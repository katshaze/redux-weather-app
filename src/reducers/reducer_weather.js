import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    return [action.payload.data, ...state]; // creates a new array, doesn't mutate, adding new city to front of array
  }
  return state;
}
