// Code generated by go-swagger; DO NOT EDIT.

package operations

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"net/http"
	"time"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"
	"github.com/go-openapi/strfmt"
)

// NewSystemsidGET3Params creates a new SystemsidGET3Params object
// with the default values initialized.
func NewSystemsidGET3Params() *SystemsidGET3Params {
	var ()
	return &SystemsidGET3Params{

		timeout: cr.DefaultTimeout,
	}
}

// NewSystemsidGET3ParamsWithTimeout creates a new SystemsidGET3Params object
// with the default values initialized, and the ability to set a timeout on a request
func NewSystemsidGET3ParamsWithTimeout(timeout time.Duration) *SystemsidGET3Params {
	var ()
	return &SystemsidGET3Params{

		timeout: timeout,
	}
}

// NewSystemsidGET3ParamsWithContext creates a new SystemsidGET3Params object
// with the default values initialized, and the ability to set a context for a request
func NewSystemsidGET3ParamsWithContext(ctx context.Context) *SystemsidGET3Params {
	var ()
	return &SystemsidGET3Params{

		Context: ctx,
	}
}

// NewSystemsidGET3ParamsWithHTTPClient creates a new SystemsidGET3Params object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewSystemsidGET3ParamsWithHTTPClient(client *http.Client) *SystemsidGET3Params {
	var ()
	return &SystemsidGET3Params{
		HTTPClient: client,
	}
}

/*SystemsidGET3Params contains all the parameters to send to the API endpoint
for the systemsid g e t 3 operation typically these are written to a http.Request
*/
type SystemsidGET3Params struct {

	/*ID*/
	ID string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the systemsid g e t 3 params
func (o *SystemsidGET3Params) WithTimeout(timeout time.Duration) *SystemsidGET3Params {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the systemsid g e t 3 params
func (o *SystemsidGET3Params) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the systemsid g e t 3 params
func (o *SystemsidGET3Params) WithContext(ctx context.Context) *SystemsidGET3Params {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the systemsid g e t 3 params
func (o *SystemsidGET3Params) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the systemsid g e t 3 params
func (o *SystemsidGET3Params) WithHTTPClient(client *http.Client) *SystemsidGET3Params {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the systemsid g e t 3 params
func (o *SystemsidGET3Params) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithID adds the id to the systemsid g e t 3 params
func (o *SystemsidGET3Params) WithID(id string) *SystemsidGET3Params {
	o.SetID(id)
	return o
}

// SetID adds the id to the systemsid g e t 3 params
func (o *SystemsidGET3Params) SetID(id string) {
	o.ID = id
}

// WriteToRequest writes these params to a swagger request
func (o *SystemsidGET3Params) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// path param id
	if err := r.SetPathParam("id", o.ID); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}