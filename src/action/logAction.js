import { GET_LOGS, SET_LOADING, LOG_ERROR, ADD_LOG, DELETE_LOG } from "./types";
import axios from "axios";

// Add Log
export const addLog = log => async dispatch => {
  try {
    setLoading();
    axios
      .post("/logs", log)
      .then(function(response) {
        console.log(response);
        dispatch({
          type: ADD_LOG,
          payload: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
        dispatch({ type: LOG_ERROR, payload: error.data });
      });
  } catch (err) {
    dispatch({ type: LOG_ERROR, payload: err.response.data });
  }
};
// Get Logs From Json Server DB.json
export const getLogs = () => async dispatch => {
  try {
    setLoading();
    const response = await axios.get("/logs");
    console.log("response from getLogs " + response.data);
    dispatch({
      type: GET_LOGS,
      payload: response.data
    });
  } catch (err) {
    dispatch({ type: LOG_ERROR, payload: err.response.data });
  }
};
// Delete Log
export const deleteLog = id => async dispatch => {
  try {
    setLoading();
    await axios.delete(`/logs/${id}`);
    console.log("response from deleteLOG " + id);
    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (err) {
    dispatch({ type: LOG_ERROR, payload: err.response.data });
  }
};

// Set Loading True
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
