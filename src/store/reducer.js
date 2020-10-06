import * as actionTypes from './actionTypes';

const initialState = {
  data: [],
  dataLoaded: false,
  isLoading: false,
  error: null,
  name: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case actionTypes.HANDLE_FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        dataLoaded: true,
      };
    case actionTypes.HANDLE_FETCH_DATA_FAILED:
      return {
        ...state,
        error: action.error,
        dataLoaded: false,
      };
    case actionTypes.HANDLE_INPUT_CHANGE:
      return {
        ...state,
        name: action.value,
      };
    default: return state;
  }
};

export default reducer;
