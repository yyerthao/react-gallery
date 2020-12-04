import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

state = {
  imageList: []
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Yer's Gallery</h1>
        </header>ç
        <br/>
        <p>GALLERY GOES HERE</p>
        <GalleryList galleryList={this.state.imageList}/>
      </div>
    );
  }
}

export default App;
