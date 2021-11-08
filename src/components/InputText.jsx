import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo, updateTodo } from '../redux/actions/actionCreator';
import List from './List';
import './InputText.css';

export default function InputText() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState();
  const [index, setIndex] = useState();

  function Create() {
    if (!inputValue.trim()) return;

    dispatch(createTodo(inputValue));

    setInputValue('');
  }

  function Update() {
    if (!inputValue.trim()) return;

    dispatch(updateTodo(inputValue, index));

    setInputValue('');
  }

  return (
    <div className="inputTodo">
      <div>
        <input
          className="inputItem"
          type="text"
          value={inputValue}
          onChange={((event) => setInputValue(event.target.value))}
          data-testid="input-task"
        />
      </div>
      <div className="butons">
        <button
          type="button"
          onClick={Create}
          data-testid="create-button"
        >
          Create
        </button>

        <button
          type="button"
          onClick={Update}
          data-testid="update-button"
        >
          update
        </button>
      </div>

      <List setInputValue={setInputValue} setIndex={setIndex} />

    </div>
  );
}
