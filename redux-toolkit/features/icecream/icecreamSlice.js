const createSlice = require("@reduxjs/toolkit").createSlice;
const { cakeActions } = require("../cake/cakeSlice");

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
    builder.addCase(cakeActions.ordered, (state) => {
      state.numIcecream--;
    });
  },
  
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
