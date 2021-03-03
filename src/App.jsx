import React, { Component } from 'react';
// import { addTodo, deleteTodo, toggleTodo, editTodo } from './actions';
// import { connect } from 'react-redux';
import Header from './containers/headerContainer';
import List from './containers/listContainer';
import Form from './containers/formContainer';

class App extends Component {
  // state = {
  //   todos: [],
  // };

  // onToggle = (id) => {
  //   this.setState((prevState) => ({
  //     todos: prevState.todos.map((el) =>
  //       el.id === id ? { ...el, completed: !el.completed } : el,
  //     ),
  //   }));
  // };

  // onDelete = (id) => {
  //   this.setState((prevState) => ({
  //     todos: prevState.todos.filter((el) => el.id !== id),
  //   }));
  // };

  // onEdit = (id, title) => {
  //   this.setState((prevState) => ({
  //     todos: prevState.todos.map((el) =>
  //       el.id === id ? { ...el, title } : el,
  //     ),
  //   }));
  // };

  // onAdd = (title) => {
  //   const id = Math.random().toString(36).substr(2, 9);
  //   this.setState((prevState) => ({
  //     todos: [...prevState.todos, { title, id, completed: false }],
  //   }));
  // };

  // mapStateToProps = (state) => {
  //   return {
  //     todos: state.todos,
  //   };
  // };

  render() {
    return (
      <main>
        <Header />
        <List />
        <Form />
      </main>
    );
  }
}

export default App;
