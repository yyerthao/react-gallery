import React, { Component } from 'react';
import './App.css'; 
import axios from 'axios'; // need to import axios for server requests
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

state = {
  imageList: [], // at this point, imageList array has no data
  unliked: true, // boolean created 

}

// readyNow function, start of react life cycle
  componentDidMount() {
    this.getImages(); // call get function
  }

  // imageList array now has data from galleryItems array -- from gallery.data.js

  getImages = () => {
    axios.get('/gallery')
    // axios will GET data from server
    // inside server.js, there is no GET, only an app.use with match url /gallery ('/gallery', gallery)
    // axios will then travel to gallery.router.js because at the top of server.js, is a
    //      - const gallery = require('./routes/gallery.router.js'). This const is inside app.use()
    // inside gallery.router.js, we need to find a get with a / 
    //      - router.get('/', (req, res) => {
    //      res.send(galleryItems);
    //      }); // END GET Route
    // - we want to send galleryItems, which is a const required at top of gallery.router.js
    //      - const galleryItems = require('../modules/gallery.data');
    // - INSIDE gallery.data.js, we will have our galleryItems array, which is essentially our data to renders
      .then(response => { // galleryItems array becomes our response, storing it into state
        this.setState({
          imageList: response.data // setting imageList to be our data
        })
      }).catch((error)=>{
        alert('Error');
        console.log('Error', error);
      }) 
  }

// Want to change state in App from button in child component
// Pass the function as a prop to the child
   photoChange= () => {
    console.log('Liked a photo');
    this.setState({
      liked: false

    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Yer's Gallery</h1>
        </header>
        <div className="container">
        <p>&nbsp;{/* INSERT QUOTE HERE LATER */}</p>
        
        {/* GalleryList is a component, list is our prop, it is taco.. we are storing our imageList into this prop variable, 
        at this point, imageList already has our galleryItems array of photo data in it..*/}
        <GalleryList list={this.state.imageList}
                photoChange={this.photoChange}/>
                </div>
      </div>
    );
  }
}

export default App;
