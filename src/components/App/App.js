import React, { Component } from 'react';
import './App.css';
import GalleryItem from '../GalleryItem/GalleryItem';

class App extends Component {

state = {
  imageList: []
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Yer's Gallery</h1>
        </header>
        <br/>
        <p>GALLERY GOES HERE</p>
        <GalleryItem />
      </div>
    );
  }
}

export default App;
