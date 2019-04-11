import React from "react";
import Display from "../display/Display";

class Dashboard extends React.Component {
  state = {
    strike: 0,
    ball: 0,
    foul: 0,
    hit: 0,
    out: 0
  };

  render() {
    return (
      <>
        <div>
          <h2>Count Selectors</h2>
          <button onClick={this.strike}>Strike</button>
          <button onClick={this.ball}>Ball</button>
          <button onClick={this.foul}>Foul</button>
          <button onClick={this.hit}>Hit</button>
          <button onClick={this.out}>Out</button>
        </div>
        <Display count={this.state} />
      </>
    );
  }

  strike = () => {
    if (this.state.strike === 2 && this.state.out < 2) {
      this.setState({
        strike: 0,
        ball: 0,
        foul: 0,
        out: this.state.out + 1
      });
    } else if (this.state.strike === 2 && this.state.out === 2) {
      this.setState({
        strike: 0,
        ball: 0,
        foul: 0,
        out: 0
      });
    } else {
      this.setState({ strike: this.state.strike + 1 });
    }
  };

  ball = () => {
    if (this.state.ball === 3) {
      this.setState({
        strike: 0,
        ball: 0,
        foul: 0
      });
    } else {
      this.setState({ ball: this.state.ball + 1 });
    }
  };

  foul = () => {
    if (this.state.strike < 2) {
      this.setState({
        strike: this.state.strike + 1,
        foul: this.state.foul + 1
      });
    } else {
      this.setState({ foul: this.state.foul + 1 });
    }
  };

  hit = () => {
    this.setState({
      strike: 0,
      ball: 0,
      foul: 0,
      hit: this.state.hit + 1
    });
  };

  out = () => {
    if (this.state.out === 2) {
      this.setState({
        strike: 0,
        ball: 0,
        foul: 0,
        out: 0
      });
    } else {
      this.setState({
        strike: 0,
        ball: 0,
        foul: 0,
        out: this.state.out + 1 
      });
    }
  };
}

export default Dashboard;
