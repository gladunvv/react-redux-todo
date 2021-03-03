import React from 'react';

import Todo from './Todo';

const List = ({ todos = [], editTodo, deleteTodo, toggleTodo }) => {
  return (
    <div>
      <section className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
            onEdit={editTodo}
          />
        ))}
      </section>
    </div>
  );
};

export default List;
