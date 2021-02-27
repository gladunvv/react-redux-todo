import React, { Component } from 'react';

import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';

class App extends Component {
  state = {
    todos: [],
  };

  onToggle = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : el,
      ),
    }));
  };

  onDelete = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((el) => el.id !== id),
    }));
  };

  onEdit = (id, title) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((el) =>
        el.id === id ? { ...el, title } : el,
      ),
    }));
  };

  onAdd = (title) => {
    const id = Math.random().toString(36).substr(2, 9);
    this.setState((prevState) => ({
      todos: [...prevState.todos, { title, id, completed: false }],
    }));
  };

  render() {
    return (
      <main>
        <Header todos={this.state.todos} />
        <List
          todos={this.state.todos}
          onToggle={this.onToggle}
          onDelete={this.onDelete}
          onEdit={this.onEdit}
        />
        <Form onAdd={this.onAdd} />
      </main>
    );
  }
}

export default App;
