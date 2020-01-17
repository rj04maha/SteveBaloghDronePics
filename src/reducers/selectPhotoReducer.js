const selectedPhotoReducer = (selectedPhoto = null, action) => {
  if (action.type === "PHOTO_SELECTED") {
    return action.payload;
  }
  if (action.type === "PHOTO_UNSELECTED") {
    return action.payload;
  }
  return selectedPhoto;
};

export default selectedPhotoReducer;
