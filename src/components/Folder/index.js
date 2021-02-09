import React, { Component } from 'react';

import Folder from 'components/Folder';
import File from 'components/File';

import { folderConstants } from 'utils/constants';

import './style.css';

class FolderBlock extends Component {
  state = {
    collapse: false,
  }

  onFolderChange = () => {
    this.setState(prev => ({
      collapse: !prev.collapse,
    }));
  }
  onFolderShow = () => {
    this.setState({collapse: true});
  }

  render() {
    const {name, data} = this.props;
    const {collapse} = this.state;
    return (
      <div className="folder-block">
        <b onClick={this.onFolderChange}>Folder: {name}</b>
        <div className={`folder-block-data ${collapse ? 'show' : ''}`}>
          {data.map(elem =>
            elem.type === folderConstants.FOLDER
              ? <Folder key={elem.name} name={elem.name} data={elem.children} type={elem.type}/>
              : <File key={elem.name} name={elem.name} mime={elem.mime} onFolderShow={this.onFolderShow}/>
          )}
        </div>
      </div>
    );
  }
}

export default FolderBlock;