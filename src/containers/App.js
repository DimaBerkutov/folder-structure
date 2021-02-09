import React, { Component } from 'react';

import Folder from 'components/Folder';
import File from 'components/File';

import './App.css';
import { folderConstants } from 'utils/constants';
import data from "./data.json";

class App extends Component {
  state = {
    folders: data,
  }

  render() {
    const {folders} = this.state;

    return (
      <div className="App">
        {folders.map(elem =>
          elem.type === folderConstants.FOLDER
            ? <Folder key={elem.name} name={elem.name} data={elem.children} type={elem.type}/>
            : <File key={elem.name} name={elem.name} />
        )}
      </div>
    );
  }
}

export default App;