import { connect } from 'react-redux';

import Header from '../components/Header';

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(Header);
