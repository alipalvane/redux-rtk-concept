import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  numCake: number;
};

const initialState: initialStateType = {
  numCake: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numCake--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numCake += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
