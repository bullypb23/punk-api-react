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
    handleLoading();
    axios.get(`${BASE_URL}page=${page}&per_page=${items}`)
      .then(response => {
        dispatch(handleLoading());
        dispatch(handleFetchDataSuccess(response.data));
      })
      .catch(error => {
        dispatch(handleFetchDataFailed(error.message));
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
    type: actionTypes.HANDLE_FETCH_DATA_SUCCESS,
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
    axios.get(`${BASE_URL}beer_name=${value}`)
      .then(response => {
        dispatch(handleDatabaseSearchSuccess(response.data));
      })
      .catch(error => {
        dispatch(handleDatabaseSearchFailed(error.message));
      })
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
