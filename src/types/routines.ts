import { createRoutine } from 'redux-saga-routines';

// SystemIntakes routines
export const fetchSystemIntakes = createRoutine('FETCH_SYSTEM_INTAKES');

// SystemIntake routines
export const fetchSystemIntake = createRoutine('FETCH_SYSTEM_INTAKE');
export const saveSystemIntake = createRoutine('PUT_SYSTEM_INTAKE');

// SystemShorts routines
export const fetchSystemShorts = createRoutine('FETCH_SYSTEM_SHORTS');