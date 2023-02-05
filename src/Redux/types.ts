import { ActionType } from 'typesafe-actions';
import { setDatesSelected } from './Actions';

export type ReduxActionType = ActionType<typeof setDatesSelected>;
