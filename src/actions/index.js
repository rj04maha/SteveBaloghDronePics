import upsplash from "../api/upsplash";

export const fetchPhotos = () => async dispatch => {
  const response = await upsplash.get("/search/photos", {
    params: { query: "cats", per_page: "30" }
  });

  dispatch({ type: "FETCH_PHOTOS", payload: response.data.results });
};

export const selectedPhoto = photo => {
  return {
    type: "PHOTO_SELECTED",
    payload: [photo]
  };
};

export const unselectPhoto = photo => {
  return {
    type: "PHOTO_UNSELECTED",
    payload: photo
  };
};
