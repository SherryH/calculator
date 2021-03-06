import React from 'react';
import Key from './Key';
import styles from './App.css';

const App = ({ expression, operate }) => {
  const renderKey = (val) => {
    let otherClass;
    if (isNaN(parseFloat(val))) {
      otherClass = 'blue';
    }
    const valStr = val.toString();
    return (<Key
      val={valStr} otherClass={otherClass} callback={() => {
        operate(valStr);
      }}
    />);
  };

  return (
    <div className={styles.calc}>
      A calculator
      <input className={styles.panel} value={expression}/>
      <div className="keypad">
        <div className={styles.row}>
          {renderKey('Clear')}
          {renderKey('<--')}
        </div>
        <div className={styles.row}>
          {renderKey(7)}
          {renderKey(8)}
          {renderKey(9)}
          {renderKey('/')}
        </div>
        <div className={styles.row}>
          {renderKey(4)}
          {renderKey(5)}
          {renderKey(6)}
          {renderKey('x')}
        </div>
        <div className={styles.row}>
          {renderKey(1)}
          {renderKey(2)}
          {renderKey(3)}
          {renderKey('-')}
        </div>
        <div className={styles.row}>
          {renderKey(0)}
          {renderKey('.')}
          {renderKey('=')}
          {renderKey('+')}
        </div>
      </div>
    </div>
  );
};


App.defaultProps = {
  expression: '',
  operate: function operate() {},
};

App.propTypes = {
  expression: React.PropTypes.string,
  operate: React.PropTypes.func,
};

export default App;
