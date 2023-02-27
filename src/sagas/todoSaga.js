import {TODO_TYPE} from '../constant'
import {getAllTodosApi, createTodoApi, deleteTodoApi, editTodoApi} from '../api';
import {takeEvery, takeLatest} from 'redux-saga/effects'

export function* getAllTodo(){
    yield takeEvery(TODO_TYPE.getTodosSendRequest, getAllTodosApi)
}

export function* createTodo(){
    yield takeLatest(TODO_TYPE.createTodoRequest, createTodoApi)
}

export function* deleteTodo(){
    yield takeLatest(TODO_TYPE.deleteTodoRequest, deleteTodoApi)
}

export function* editTodo(){
    yield takeLatest(TODO_TYPE.editTodoRequest, editTodoApi)
}