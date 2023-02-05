import { createAction } from 'typesafe-actions';

export const setDatesSelected = createAction(
  'SET_DATES_SELECTED',
  (action) => (payload: { name: string }) => action(payload)
);
