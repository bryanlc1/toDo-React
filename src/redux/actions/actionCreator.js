import actionTypes from './actionTypes';

export function createTodo(todo) {
  return {
    type: actionTypes.CREATE_TODO,
    todo
  };
}

export function deleteTodo(todo) {
  return {
    type: actionTypes.DELETE_TODO,
    todo
  };
}

export function updateTodo(todo, index) {
  return {
    type: actionTypes.UPDATE_TODO,
    todo,
    index
  };
}
