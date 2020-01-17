import { combineReducers } from "redux";
import photoReducers from "./photosReducers";
import selectPhotoReducer from "./selectPhotoReducer";

export default combineReducers({
  photos: photoReducers,
  selectPhoto: selectPhotoReducer
});
