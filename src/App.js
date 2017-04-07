import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="calc">
        A calculator
        <input className="panel" />
        <div className="keypad">
          <div className="row">
            <div className="col btn ">7</div>
            <div className="col btn ">8</div>
            <div className="col btn ">9</div>
            <div className="col btn blue ">x</div>
            <div className="col btn blue ">/</div>
          </div>
          <div className="row">
            <div className="col btn ">4</div>
            <div className="col btn ">5</div>
            <div className="col btn ">6</div>
            <div className="col btn blue ">+</div>
            <div className="col btn blue ">-</div>
          </div>
          <div className="row">
            <div className="col btn ">1</div>
            <div className="col btn ">2</div>
            <div className="col btn ">3</div>
            <div className="col btn blue ">=</div>
            <div className="col btn blue ">C</div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
