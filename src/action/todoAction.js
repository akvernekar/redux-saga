import {TODO_TYPE} from '../constant';

export const getAllTodos = () => {
  return {
    type: TODO_TYPE.getTodosSendRequest,
  };
};

export const getAllTodosSuccess = (data) => {
  return {
    type: TODO_TYPE.getTodosSucess,
    payload: data,
  };
};

export const getAllTodosError = (error) => {
  return {
    type: TODO_TYPE.getTodosError,
    payload: [],
    error: error,
  };
};


export const createTodoRequest = (body) => {
  return {
    type: TODO_TYPE.createTodoRequest,
    payload:body
  };
};

export const createTodoSuccess = (data) => {
  return {
    type: TODO_TYPE.createTodoSuccess,
    payload: data,
  };
};

export const createTodoError = (error) => {
  return {
    type: TODO_TYPE.createTodoError,
    payload: [],
    error: error,
  };
};

export const deleteTodoRequest = (id) => {
  return {
    type: TODO_TYPE.deleteTodoRequest,
    payload:id
  };
};

export const deleteTodoSuccess = (data) => {
  return {
    type: TODO_TYPE.deleteTodoSuccess,
    payload: data,
  };
};

export const deleteTodoError = (error) => {
  return {
    type: TODO_TYPE.deleteTodoError,
    payload: [],
    error: error,
  };
};


export const editTodoRequest = (body) => {
  return {
    type: TODO_TYPE.editTodoRequest,
    payload:body
  };
};

export const editTodoSuccess = (data) => {
  return {
    type: TODO_TYPE.editTodoSuccess,
    payload: data,
  };
};

export const editTodoError = (error) => {
  return {
    type: TODO_TYPE.editTodoError,
    payload: [],
    error: error,
  };
};

