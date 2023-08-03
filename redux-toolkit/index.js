const store = require("./app/store");
const cackeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions = require("./features/icecream/icecreamSlice").icecreamActions;
const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Update State", store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cackeActions.ordered());
// store.dispatch(cackeActions.restocked(5));

// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(10));

// unsubscribe();
