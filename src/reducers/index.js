import { createStore } from 'redux';

const initialState = { todos: [] };

export default createStore((state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            title: action.payload.title,
            completed: false,
          },
        ],
      };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      };
    case 'DELETE_TODO':
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case 'EDIT_TODO':
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, title: action.payload.title }
            : todo,
        ),
      };
    default:
      return state;
  }
});
