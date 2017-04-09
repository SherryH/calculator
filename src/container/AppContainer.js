import { connect } from 'react-redux';
import App from '../components/App';
import operate from '../actions';

const mapStateToProps = state => (
  {
    expression: state.expression,
  }
);

const mapDispatchToProps = dispatch => (
  {
    operate: (val) => { dispatch(operate(val)); },
  }
);

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
