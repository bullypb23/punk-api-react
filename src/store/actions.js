import * as actionTypes from './actionTypes';
import axios from 'axios';
import { BASE_URL } from '../shared/apiUrls';

export const handleLoading = () => (
  {
    type: actionTypes.HANDLE_LOADING,
  }
)

export const handleFetchData = (page, items) => {
  return dispatch => {
    dispatch(handleLoading());
    axios.get(`${BASE_URL}?page=${page}&per_page=${items}`)
      .then(response => {
        dispatch(handleFetchDataSuccess(response.data));
        dispatch(handleLoading()); 
      })
      .catch(error => {
        dispatch(handleFetchDataFailed(error.message));
        dispatch(handleLoading()); 
      })
  };
};

export const handleFetchDataSuccess = data => (
  {
    type: actionTypes.HANDLE_FETCH_DATA_SUCCESS,
    data,
  }
);

export const handleFetchDataFailed = error => (
  {
    type: actionTypes.HANDLE_FETCH_DATA_FAILED,
    error,
  }
);

export const handleInputChange = value => (
  {
    type: actionTypes.HANDLE_INPUT_CHANGE,
    value,
  }
);

export const handleMaxItems = value => (
  {
    type: actionTypes.HANDLE_MAX_ITEMS,
    value,
  }
);

export const handlePageChange = value => (
  {
    type: actionTypes.HANDLE_PAGE_CHANGE,
    value,
  }
);

export const handleSearchName = value => (
  {
    type: actionTypes.HANDLE_SEARCH_NAME,
    value,
  }
);

export const handleDatabaseSearch = value => {
  return dispatch => {
    if (value) {
      axios.get(`${BASE_URL}?beer_name=${value}`)
        .then(response => {
          dispatch(handleDatabaseSearchSuccess(response.data));
        })
        .catch(error => {
          dispatch(handleDatabaseSearchFailed(error.message));
        })
    } else {
      dispatch(handleDatabaseSearchSuccess([]));
    }
  }
};

export const handleDatabaseSearchSuccess = data => (
  {
    type: actionTypes.HANDLE_DATABASE_SEARCH_SUCCESS,
    data,
  }
);

export const handleDatabaseSearchFailed = error => (
  {
    type: actionTypes.HANDLE_DATABASE_SEARCH_FAILED,
    error,
  }
);

export const handleFetchBeerDetails = id => {
  return dispatch => {
    axios.get(`${BASE_URL}/${id}`)
      .then(response => {
        dispatch(handleFetchBeerDetailsSuccess(response.data));
      })
      .catch(error => {
        dispatch(handleFetchBeerDetailsFailed(error.message));
      })
  }
};

export const handleFetchBeerDetailsSuccess = data => (
  {
    type: actionTypes.HANDLE_BEER_DETAILS_SUCCESS,
    data,
  }
);

export const handleFetchBeerDetailsFailed = error => (
  {
    type: actionTypes.HANDLE_BEER_DETAILS_FAILED,
    error,
  }
);

