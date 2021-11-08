import actionTypes from '../actions/actionTypes';

export default function todosReducer(todoList = [], action) {
  let newTodoList = todoList;

  switch (action.type) {
    case actionTypes.CREATE_TODO:
      newTodoList = [...todoList, action.todo];
      break;
    case actionTypes.DELETE_TODO:
      newTodoList = todoList.filter((todo) => todo !== action.todo);
      break;
    case actionTypes.UPDATE_TODO:
      newTodoList[action.index] = action.todo;
      newTodoList = [
        ...newTodoList
      ];
      break;
    default:
      break;
  }

  return newTodoList;
}
