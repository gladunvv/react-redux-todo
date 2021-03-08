import { connect } from 'react-redux';
import { addTodo } from '../store/actions';
import Form from '../components/Form';

const mapDispatchToProps = {
  addTodo,
};

export default connect(null, mapDispatchToProps)(Form);
