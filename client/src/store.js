import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const initialState = {};

const middlware = [thunk];

const store = createStore(
 () => [],
 initialState,
 compose(
  applyMiddleware(...middlware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
 ),
);

export default store;
