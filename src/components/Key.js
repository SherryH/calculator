import React from 'react';
import styles from './Key.css';

function Key({ val, otherClass, callback }) {
  return (
    <div className={`${styles.col} ${styles.btn} ${styles[otherClass]}`} onClick={callback}>{val}</div>
  );
}

Key.defaultProps = {
  val: 0,
  otherClass: undefined,
  callback: function callback() {},
};

Key.propTypes = {
  val: React.PropTypes.string,
  otherClass: React.PropTypes.string,
  callback: React.PropTypes.func,
};

export default Key;