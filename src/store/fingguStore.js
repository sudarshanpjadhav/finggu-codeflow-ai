import { createStore } from 'redux';
import { fingguReducer } from '../reducers/fingguReducer';

export const fingguStore = createStore(fingguReducer);