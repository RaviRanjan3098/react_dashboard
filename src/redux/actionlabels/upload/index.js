import { LOAD_FILES, LOAD_FILES_FAILURE, LOAD_FILES_SUCCESS } from "../../actions/upload";

export const loadFiles = () => ({
  type: LOAD_FILES
});

export const loadFilesSuccess = (data) => ({
  type: LOAD_FILES_SUCCESS,
  payload: data
});

export const loadFilesFailure = (error) => ({
  type: LOAD_FILES_FAILURE,
  payload: error
});