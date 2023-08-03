import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

type initialStateType = {
  numIcecream : number
}

const initialState : initialStateType = {
  numIcecream: 5,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numIcecream--;
    },
    restocked: (state, action:PayloadAction<number>) => {
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
