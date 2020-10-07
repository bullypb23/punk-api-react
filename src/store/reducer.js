import * as actionTypes from './actionTypes';

const DEFAULT_ITEMS_PER_PAGE = 10;

const initialState = {
  data: [],
  dataLoaded: false,
  isLoading: false,
  error: null,
  name: '',
  itemsPerPage: DEFAULT_ITEMS_PER_PAGE,
  page: 1,
  searchName: '',
  searchData: [],
  searchError: null,
  selectedBeer: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
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
    case actionTypes.HANDLE_MAX_ITEMS:
      return {
        ...state,
        itemsPerPage: +action.value,
      };
    case actionTypes.HANDLE_PAGE_CHANGE:
      return {
        ...state,
        page: +action.value,
      };
    case actionTypes.HANDLE_SEARCH_NAME:
      return {
        ...state,
        searchName: action.value,
      };
    case actionTypes.HANDLE_DATABASE_SEARCH_SUCCESS:
      return {
        ...state,
        searchData: action.data,
        searchError: null,
      };
    case actionTypes.HANDLE_DATABASE_SEARCH_FAILED:
      return {
        ...state,
        searchData: [],
        searchError: action.error,
      };
    case actionTypes.HANDLE_BEER_DETAILS_SUCCESS:
      return {
        ...state,
        selectedBeer: action.data[0],
      };
    case actionTypes.HANDLE_BEER_DETAILS_FAILED:
      return {
        ...state,
        selectedBeer: {},
      };
    default: return state;
  }
};

export default reducer;
