import { OPERATE, CLEAR, DELETE, EVALUATE } from '../constants';

const operate = (val) => {
  if (val === 'Clear') {
    return {
      type: CLEAR,
    };
  }

  if (val === '<--') {
    return {
      type: DELETE,
    };
  }

  if (val === '=') {
    return {
      type: EVALUATE,
    };
  }


  return {
    type: OPERATE,
    valStr: val,
  };
};

export default operate;
