import { FINGGU_ACTION_TYPES } from '../constants/FINGGU_ACTION_TYPES';

const initialState = { tasks: [] };

export const fingguReducer = (state = initialState, action) => {
  switch (action.type) {
    case FINGGU_ACTION_TYPES.ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case FINGGU_ACTION_TYPES.REMOVE_TASK:
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload.id) };
    case FINGGU_ACTION_TYPES.UPDATE_TASK:
      return { ...state, tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task) };
    default:
      return state;
  }
};