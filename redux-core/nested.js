const redux = require("redux");
const produce = require("immer").produce;


const initialInfo = {
  name: "ali",
  address: {
    city: "tehran",
    code: 21,
  },
};

const UPDATE_CITY = "UPDATE_CITY";
const actionCreator = (city) => {
  return {
    type: UPDATE_CITY,
    payload: city,
  };
};

const infoReducer = (state = initialInfo, action) => {
  switch (action.type) {
    case UPDATE_CITY:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       city: action.payload,
      //     },
      //   };

      return produce(state, (draft) => {
        draft.address.city = action.payload;
      });

    default: {
      return state;
    }
  }
};

const store = redux.createStore(infoReducer);

console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(actionCreator("dezful"));

unsubscribe();
