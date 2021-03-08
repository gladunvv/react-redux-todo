import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO } from '../actionTypes';

export const addTodo = ({ title }) => {
  const id = Math.random().toString(36).substr(2, 9);
  return {
    type: ADD_TODO,
    payload: {
      id,
      title,
    },
  };
};

export const toggleTodo = ({ id }) => {
  return {
    type: TOGGLE_TODO,
    payload: {
      id,
    },
  };
};

export const deleteTodo = ({ id }) => {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
};

export const editTodo = ({ id, title }) => {
  return {
    type: EDIT_TODO,
    payload: {
      id,
      title,
    },
  };
};
