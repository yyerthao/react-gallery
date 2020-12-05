import React, { Component } from 'react';

// represents a single image and description
// ability to like an image must happen here

class GalleryItem extends Component {

    state = {
        liked: false
    }


    toggleLike = () =>{
        this.setState({
            liked: !this.state.liked // flip the boolean using ! NOT 
        })
    }


    toggleLike = () => {
      console.log('Toggling like button');
    }


  render() {
    return (
        <>  
        {/* <button onClick={this.toggleMask}>
            {this.state.liked? `Like!` : `Liked!`}
            {this.props.photo}>Like!</button> */}
          <button onClick={this.toggleLike}>Like</button>
        </>
    );
  }
}


export default GalleryItem;
