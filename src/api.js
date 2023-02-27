import axios from "axios";
import {
  getAllTodosError,
  getAllTodosSuccess,
  createTodoSuccess,
  createTodoError,
  deleteTodoSuccess,
  deleteTodoError,
  editTodoSuccess,
  editTodoError,
} from "./action/todoAction";
import { put, call } from "redux-saga/effects";

export function* getAllTodosApi() {
  try {
    const res = yield call(() =>
      axios.get("https://jsonplaceholder.typicode.com/todos")
    );
    if (res.data) {
      yield put(getAllTodosSuccess(res.data));
    }
  } catch (err) {
    yield put(getAllTodosError({ errorMsg: err.message }));
  }
}

export function* createTodoApi(body) {
  try {
    const res = yield call(() =>
      axios.post("https://jsonplaceholder.typicode.com/todos", body.payload)
    );
    if (res.data) {
      yield put(createTodoSuccess(res.data));
    }
  } catch (err) {
    yield put(createTodoError({ errorMsg: err.message }));
  }
}

export function* deleteTodoApi(body) {
  try {
    const res = yield call(() =>
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${body.payload}`)
    );
    if (res.data) {
      yield put(deleteTodoSuccess({ id: body.payload }));
    }
  } catch (err) {
    yield put(deleteTodoError({ errorMsg: err.message }));
  }
}

export function* editTodoApi(body) {
  try {
    const res = yield call(() =>
      axios.patch(
        `https://jsonplaceholder.typicode.com/todos/${body.payload.id}`,
        body.payload
      )
    );
    if (res.data) {
      yield put(editTodoSuccess(res.data));
    }
  } catch (err) {
    yield put(editTodoError({ errorMsg: err.message }));
  }
}
