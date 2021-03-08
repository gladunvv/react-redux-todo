import React, { Component } from 'react';
// import { addTodo, deleteTodo, toggleTodo, editTodo } from './actions';
// import { connect } from 'react-redux';
import Header from './containers/headerContainer';
import List from './containers/listContainer';
import Form from './containers/formContainer';

class App extends Component {
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
