import React, { Component } from 'react';

import './style.css';

class FileBlock extends Component {
  render() {
    const {name, mime} = this.props;
    return (
      <div className="file-block">
        <span>name: {name}</span>
        <span>mime: {mime}</span>
      </div>
    );
  }
}

export default FileBlock;