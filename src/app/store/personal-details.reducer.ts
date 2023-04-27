import { createReducer, on } from '@ngrx/store';
import { setPersonalDetails } from './personal-details.actions';

export interface PersonalDetailsState {
  gender: string;
  firstname: string;
  lastname: string;
  day: string;
  month: string;
  year: string;
  nationality: string;
}

export const initialState: PersonalDetailsState = {
  gender: '',
  firstname: '',
  lastname: '',
  day: '',
  month: '',
  year: '',
  nationality: '',
};

export const personalDetailsReducer = createReducer(
  initialState,
  on(setPersonalDetails, (state, { gender, firstname, lastname, day, month, year, nationality }) => ({
    ...state,
    gender,
    firstname,
    lastname,
    day,
    month,
    year,
    nationality,
  }))
);
