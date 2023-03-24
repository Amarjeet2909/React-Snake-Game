import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";
import gameReducer from "./reducers";
import watcherSagas from "./sagas";
// using the createSagaMiddleware() function to create a saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(gameReducer, applyMiddleware(sagaMiddleware));

// running our sagaMiddleware using this code
sagaMiddleware.run(watcherSagas);

export default store;