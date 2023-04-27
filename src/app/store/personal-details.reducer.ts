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

const initialState: PersonalDetailsState = JSON.parse(localStorage.getItem('personalDetails') || JSON.stringify({
  gender: '',
  firstname: '',
  lastname: '',
  day: '',
  month: '',
  year: '',
  nationality: '',
}));

export const personalDetailsReducer = createReducer(
  initialState,
  on(setPersonalDetails, (state, action) => {
    const newState = { ...state, ...action };
    localStorage.setItem('personalDetails', JSON.stringify(newState));

    return newState;
  }),
);
