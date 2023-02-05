/* eslint-disable no-param-reassign */
import produce from 'immer';
import { createReducer } from 'typesafe-actions';
import { setDatesSelected } from './Actions';
import { ReduxActionType } from './types';

export type Statename = {
  name: string;
};

const initialState: Statename = {
  name: '',
};

export default createReducer<Statename, ReduxActionType>(
  initialState
).handleAction(setDatesSelected, (state, { payload }) => {
  console.log('payload', payload);
  return produce(state, (draft) => {
    draft.name = payload.name;
  });
});
