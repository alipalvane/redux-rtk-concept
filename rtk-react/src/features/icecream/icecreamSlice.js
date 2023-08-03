import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

const initialState = {
  numIcecream: 5,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numIcecream--;
    },
    restocked: (state, action) => {
      state.numIcecream += action.payload;
    },
  },

  //* First Way
  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {
  //       state.numIcecream--;
  //     },
  //   },
  //* Second Way
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numIcecream--;
    });
  },
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
