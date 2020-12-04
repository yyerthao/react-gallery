import React, { Component } from 'react';

class GalleryItem extends Component {
  render() {
    return (
        <>  
        <img src="images/sunboys.jpg"/>
        <img className="sungirls" src="images/sungirls.jpg"/>
        </>
    );
  }
}

export default GalleryItem;
