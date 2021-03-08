import { connect } from 'react-redux';
import { deleteTodo, toggleTodo, editTodo } from '../store/actions';
import List from '../components/List';

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = {
  editTodo,
  deleteTodo,
  toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
