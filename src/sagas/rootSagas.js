// import axios from 'axios';
import { getAllTodo, createTodo, deleteTodo, editTodo } from "./todoSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([getAllTodo(), createTodo(), deleteTodo(), editTodo()]);
}
