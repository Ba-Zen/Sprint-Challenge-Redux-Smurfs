
import {
  FETCHING_SMURFS,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ADD_START,
  ADD_SUCCESS,
  ADD_FAILURE,
 
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  error: null
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        error: null,
        fetchingSmurfs: false,
        smurfs: action.payload
      };

    case FETCH_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };

   
    case ADD_START:
      return {
        ...state,
        fetchingSmurfs: true
      };

    case ADD_SUCCESS:
      return {
        ...state,
        error: null,
        fetchingSmurfs: false,
        smurfs: action.payload
      };

    case ADD_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducers;