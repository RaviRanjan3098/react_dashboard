import { LOAD_FILES, LOAD_FILES_FAILURE, LOAD_FILES_SUCCESS } from "../../actions/upload";

const initialState = {
  loading: false,
  files: [],
  error: null,
};

const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FILES:
      return { ...state, loading: true, error: null };

    case LOAD_FILES_SUCCESS:
      return { ...state, loading: false, files: action.payload.data };

    case LOAD_FILES_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
};

export default fileReducer;
