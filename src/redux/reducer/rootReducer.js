// src/redux/reducers/rootReducer.js
import { combineReducers } from 'redux';
import fileReducer from './upload';


const rootReducer = combineReducers({
  fileState: fileReducer,
});

export default rootReducer;
