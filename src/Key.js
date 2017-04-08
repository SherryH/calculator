import React from 'react';

function Key({ val, otherClass }) {
  return (
    <div className={`col btn ${otherClass}`}>{val}</div>
  );
}

Key.defaultProps = {
  val: 0,
  otherClass: undefined,
};

Key.propTypes = {
  val: React.PropTypes.string,
  otherClass: React.PropTypes.string,
};

export default Key;
