const redux = require("redux");
const createStore = redux.createStore;
const actionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const CACKE_ORDER = "CACKE_ORDER";
const ICECREAM_ORDER = "ICECREAM_ORDER";

function actionCreator() {
  return {
    type: CACKE_ORDER,
    qty: 1,
  };
}

function orderIcecream(qty = 1) {
  return {
    type: ICECREAM_ORDER,
    payload: qty,
  };
}

const initialCackeState = {
  numbOfCacke: 10,
};
const initialIcecreamState = {
  numbOfCacke: 10,
  numbOfIcecream: 5,
};

const cackeReducer = (state = initialCackeState, action) => {
  switch (action.type) {
    case CACKE_ORDER:
      return {
        ...state,
        numbOfCacke: state.numbOfCacke - 1,
      };
    default:
      return state;
  }
};
const iceReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDER:
      return {
        ...state,
        numbOfIcecream: state.numbOfIcecream + action.payload,
      };
    // extra reducer from cackes
    case CACKE_ORDER: {
      return {
        ...state,
        numbOfIcecream: state.numbOfIcecream - 1,
      };
    }

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cackeReducer,
  iceReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));

console.log("State is:", store.getState());

const unsubscribe = store.subscribe(() => {});

// store.dispatch(actionCreator());
// store.dispatch(actionCreator());
// store.dispatch(actionCreator());

const actions = actionCreators(
  { actionCreator, orderIcecream },
  store.dispatch
);

actions.actionCreator();
actions.orderIcecream(3);

unsubscribe();
