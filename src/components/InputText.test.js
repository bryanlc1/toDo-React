/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import InputText from './InputText';
import List from './List';
import { render, screen, fireEvent } from '../utils/test.utils';

describe('Given a todo InputText component', () => {
  beforeEach(() => {
    const initialState = { tasks: [] };
    render(<InputText />, { initialState });
  });
  test('Then create button should be in the document', () => {
    expect(screen.getByTestId('create-button')).toBeInTheDocument();
  });

  test('Then update button should be in the document', () => {
    expect(screen.getByTestId('update-button')).toBeInTheDocument();
  });

  describe('and the input changes', () => {
    beforeEach(() => {
      const taskInput = screen.getByTestId('input-task');
      const setInputValue = 'do todo list';
      const setIndex = '';
      fireEvent.change(taskInput, { target: { value: setInputValue } });

      render(<List setInputValue={setInputValue} setIndex={setIndex} />);
    });

    describe('And create button is clicked', () => {
      beforeEach(() => {
        const createButton = screen.getByTestId('create-button');
        fireEvent.click(createButton);
      });
      test('Then list-item-0 should be in the document', () => {
        const li = screen.getByTestId('list-item-0');
        expect(li).toBeInTheDocument();
      });
    });
  });
});
