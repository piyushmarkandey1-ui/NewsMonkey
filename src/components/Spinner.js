import React, { Component } from 'react'
import loading from './loading.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="custom-spinner"></div>
      </div>
    )
  }
}

export default Spinner
