import React, { Component } from 'react';

export default class Info extends Component {
  render() {
    return (
      <div className='right'>
      This will be the instructional portion
      <code>{'import body { color: blue; }'}</code>
        <a href={this.props.github}>Get the Code</a>
      </div>
    );
  }
}