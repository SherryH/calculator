import React from 'react';
import Key from './Key';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: '',
    };
    this.operate = this.operate.bind(this);
  }

  operate(val) {
    const valNew = val.replace(/x/, '*'); // set JS recognisable multiplier
    if (val === '=') {
      // http://stackoverflow.com/questions/6479236/calculate-string-value-in-javascript-not-using-eval
      const calcVal = eval(this.state.expression);
      this.setState({
        expression: calcVal,
      });
    } else if (valNew === 'Clear') {
      this.setState({
        expression: '',
      });
    } else if (valNew === '<--') {
      this.setState({
        expression: this.state.expression && this.state.expression.slice(0, -1),
      });
    } else {
      this.setState({
        expression: this.state.expression + valNew,
      });
    }
  }

  renderKey(val) {
    let otherClass;
    if (isNaN(parseFloat(val))) {
      otherClass = 'blue';
    }
    const valStr = val.toString();
    return (<Key
      val={valStr} otherClass={otherClass} callback={() => {
        this.operate(valStr);
      }}
    />);
  }
  render() {
    return (
      <div className="calc">
        A calculator
        <input className="panel" value={this.state.expression}/>
        <div className="keypad">
          <div className="row">
            {this.renderKey('Clear')}
            {this.renderKey('<--')}
          </div>
          <div className="row">
            {this.renderKey(7)}
            {this.renderKey(8)}
            {this.renderKey(9)}
            {this.renderKey('/')}
          </div>
          <div className="row">
            {this.renderKey(4)}
            {this.renderKey(5)}
            {this.renderKey(6)}
            {this.renderKey('x')}
          </div>
          <div className="row">
            {this.renderKey(1)}
            {this.renderKey(2)}
            {this.renderKey(3)}
            {this.renderKey('-')}
          </div>
          <div className="row">
            {this.renderKey(0)}
            {this.renderKey('.')}
            {this.renderKey('=')}
            {this.renderKey('+')}
          </div>
        </div>
      </div>
    );
  }
}


export default App;
