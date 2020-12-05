import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

// 
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
        <p>“Wherever life plants you, bloom with grace.” – Old French Proverb</p>
        {/* <GalleryList galleryList={this.state.imageList}/> */}
        {/* GalleryList is a component, utilize props to pass array imageList to there */}
        <GalleryList list={this.state.imageList}/>
      </div>
    );
  }
}


export default App;
