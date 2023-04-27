import { createAction, props } from '@ngrx/store';

export const setPersonalDetails = createAction(
  '[Product Details] Set Personal Details',
  props<{
    gender: string,
    firstname: string,
    lastname: string,
    day: string,
    month: string,
    year: string,
    nationality: string,
  }>()
);
