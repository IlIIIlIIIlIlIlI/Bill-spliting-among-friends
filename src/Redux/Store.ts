import { combineReducers, createStore } from 'redux';
import nameReducer from './Reducer';
import { Statename } from './Reducer';

type State = {
  name: Statename;
};

export const combinesReducer = combineReducers<State>({
  name: nameReducer,
});

export const store = createStore(combinesReducer);
