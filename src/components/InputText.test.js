/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { mount } from 'enzyme';
import InputText from './InputText';
import List from './List';
import { render, screen } from '../utils/test.utils';

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
});
