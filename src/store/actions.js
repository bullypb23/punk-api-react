import * as actionTypes from './actionTypes';
import axios from 'axios';
import { BASE_URL } from '../shared/apiUrls';

export const handleLoading = () => (
  {
    type: actionTypes.HANDLE_LOADING,
  }
)

export const handleFetchData = () => {
  return dispatch => {
    handleLoading();
    axios.get(BASE_URL)
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