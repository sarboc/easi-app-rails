// Package server is some throwaway server code to setup testing
package server

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
)

type status string

const (
	draft status = "DRAFT"
)

type profile struct {
	Name         string
	SystemOwners []string
	CreatedAt    time.Time
	UpdatedAt    time.Time
	Status       status
}

// HandleLanding is the handler for the root path
func HandleLanding(w http.ResponseWriter, r *http.Request) {
	sampleProfile := profile{
		Name:         "My Favorite Project",
		SystemOwners: []string{"admin@example.com", "operations@example.com"},
		CreatedAt:    time.Now(),
		UpdatedAt:    time.Now(),
		Status:       draft,
	}
	js, err := json.Marshal(sampleProfile)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	enableCors(&w)

	_, err = w.Write(js)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
}

// Serve serves all the handlers
func Serve() {
	r := mux.NewRouter()
	fmt.Print("Serving application on localhost:8080")
	r.HandleFunc("/", HandleLanding)
	log.Fatal(http.ListenAndServe(":8080", r))
}