import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  error: "",
  properties: [],
};

//A slice for properties with 3 reducers
const propertySlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    getProperties: (state) => {
      state.loading = true;
    },
    getPropertiesSucess: (state, { payload }) => {
      state.loading = false;
      state.properties = payload;
      state.hasErrors = false;
    },
    getPropertiesFailure: (state, { error }) => {
      state.loading = false;
      state.hasErrors = true;
      state.error = error;
    },
  },
});

//three actons genrerated from slice
export const {
  getProperties,
  getPropertiesFailure,
  getPropertiesSucess,
} = propertySlice.actions;

export const propertySelector = (state) => state.properties;

//the reducer
export default propertySlice.reducer;

//Asynchronus Thunk action
export function fetchProperties() {
  return async (dispatch) => {
    dispatch(getProperties());
    try {
      const response = await fetch("http://localhost:4000/api/properties");
      const data = await response.json();
      dispatch(getPropertiesSucess(data));
    } catch (error) {
      console.log("error:" + error);
      dispatch(getPropertiesFailure(error));
    }
  };
}
