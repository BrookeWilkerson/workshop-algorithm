import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class Step extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: [
        'Gater your materials ie;peanut butter,jelly,spreading tool,and bread',
        'Place two slices of bread laying down on a flat surface',
        'Open jar of peanut butter and jar of jelly',
        'Start with your jelly and spread it over one slice of bread then rinse your spreading tool',
        'Now spread your peanut butter over second slice of spread',
        'Put both pieces of bread together and cut your sandwhich diaganolly',
        'Put away all of your materials and enjoy'
      ],
      index: 0,
      button: 'next'
   };
  }

  render() {
      return (
        <div>
          <div className="step-text">{this.state.steps[this.state.index]}</div>
          <Button
            bsStyle="success"
            bsSize="large"
            onClick={event => this.setState({ index: this.state.index + 1 })}>
            { this.state.button }
          </Button>
        </div>
      );
  }
}

export default Step;
