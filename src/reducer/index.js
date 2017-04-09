import { OPERATE, CLEAR, DELETE, EVALUATE } from '../constants';

const initialState = {
  expression: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPERATE: {
      const expression = state.expression + action.valStr;
      return {
        expression,
      };
    }
    case CLEAR: {
      return {
        expression: '',
      };
    }
    case DELETE: {
      return {
        expression: state.expression.slice(0, -1),
      };
    }
    case EVALUATE: {
      let expression = state.expression.replace(/x/, '*'); // set JS recognisable multiplier
      expression = eval(expression).toString();
      return {
        expression,
      };
    }
    default:
      return state;
  }
};

export default reducer;
