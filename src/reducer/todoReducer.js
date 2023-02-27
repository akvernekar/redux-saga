import { TODO_TYPE } from "../constant";

const initialState = {
  isLoading: { initial: false, create: false, update: false, delete: false },
  todos: [],
  error: {},
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_TYPE.getTodosSendRequest:
      return {
        ...state,
        isLoading: { ...state.isLoading, initial: true },
      };
    case TODO_TYPE.getTodosSucess:
      return {
        ...state,
        todos: action.payload,
        isLoading: { ...state.isLoading, initial: false },
        error: {},
      };
    case TODO_TYPE.getTodosError:
      return {
        ...state,
        isLoading: { ...state.isLoading, initial: true },
        error: action.error,
      };
    case TODO_TYPE.createTodoRequest:
      return {
        ...state,
        isLoading: { ...state.isLoading, create: true },
      };
    case TODO_TYPE.createTodoSuccess:
      return {
        // ...state,
        todos: [action.payload, ...state.todos],
        isLoading: { ...state.isLoading, create: false },
        error: {},
      };
    case TODO_TYPE.createTodoError:
      return {
        ...state,
        isLoading: { ...state.isLoading, create: false },
        error: action.error,
      };
    case TODO_TYPE.deleteTodoRequest:
      return {
        ...state,
        isLoading: { ...state.isLoading, delete: true },
      };
    case TODO_TYPE.deleteTodoSuccess:
      const updateTodo = [...state.todos].filter(
        (i) => i.id !== action.payload.id
      );
      return {
        todos: updateTodo,
        isLoading: { ...state.isLoading, delete: false },
        error: {},
      };
    case TODO_TYPE.deleteTodoError:
      return {
        ...state,
        isLoading: { ...state.isLoading, delete: false },
        error: action.error,
      };
    case TODO_TYPE.editTodoRequest:
      return {
        ...state,
        isLoading: { ...state.isLoading, update: true },
      };
    case TODO_TYPE.editTodoSuccess:
      const updateEditedTodo = [...state.todos].map((i) => {
        if (action.payload.id === i.id) {
          return action.payload;
        }
        return i;
      });
      return {
        todos: updateEditedTodo,
        isLoading: { ...state.isLoading, update: false },
        error: {},
      };
    case TODO_TYPE.editTodoError:
      return {
        ...state,
        isLoading: { ...state.isLoading, update: false },
        error: action.error,
      };

    default:
      return state;
  }
};
