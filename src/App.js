import React from 'react';
import Key from './Key';
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  renderKey(val) {
    let otherClass;
    if (isNaN(parseFloat(val))) {
      otherClass = 'blue';
    }
    const valStr = val.toString();
    return <Key val={valStr} otherClass={otherClass}/>;
  }
  render() {
    return (
      <div className="calc">
        A calculator
        <input className="panel" />
        <div className="keypad">
          <div className="row">
            {this.renderKey(7)}
            {this.renderKey(8)}
            {this.renderKey(9)}
            {this.renderKey('x')}
            {this.renderKey('/')}
          </div>
          <div className="row">
            {this.renderKey(4)}
            {this.renderKey(5)}
            {this.renderKey(6)}
            {this.renderKey('+')}
            {this.renderKey('-')}
          </div>
          <div className="row">
            {this.renderKey(1)}
            {this.renderKey(2)}
            {this.renderKey(3)}
            {this.renderKey('=')}
            {this.renderKey('C')}
          </div>
          <div className="row">
            {this.renderKey(0)}
            {this.renderKey('.')}
          </div>
        </div>
      </div>
    );
  }
}


export default App;
