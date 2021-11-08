/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../redux/actions/actionCreator';
import './List.css';

export default function List({ setInputValue, setIndex }) {
  const todos = useSelector((store) => store.todos);
  const dispatch = useDispatch();
  return (
    <div className="listTodo">
      <ul>
        {
              todos.map((todo, todoIndex) => (
                <li key={`item-${todo}`} data-testid={`list-item-${todoIndex}`}>
                  <button
                    className="itemList"
                    type="button"
                    onClick={() => {
                      setInputValue(todo);
                      setIndex(todoIndex);
                    }}
                  >
                    {todo}
                  </button>
                  <button type="button" className="butonDelete" onClick={() => dispatch(deleteTodo(todo))}>Delete</button>
                </li>
              ))
          }
      </ul>
    </div>
  );
}
