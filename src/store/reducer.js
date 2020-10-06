import * as actionTypes from './actionTypes';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_LOADING:
      return {
        ...state,
        loading: !state.loading,
      }
    case actionTypes.HANDLE_FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
      }
    case actionTypes.HANDLE_FETCH_DATA_FAILED:
      return {
        ...state,
        error: action.error,
      }
    default: return state;
  }
};

export default reducer;
