import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { todoReducer } from "../reducer/todoReducer";
import rootSaga from "../sagas/rootSagas";

const sagaMiddleware = createSagaMiddleware();

const allReducers = {
  todos: todoReducer,
};

export const configrationStore = () => {
  const store = createStore(
    combineReducers(allReducers),
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
