import React, { Component } from 'react';

export default class Contructor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 'Created on initializaton',
    };
  }

  render() {

    return (
      <div className='center'>
      <legend className='headingtext'>Example Constructor</legend>
      {this.state.test}
      </div>
    );
  }
}
