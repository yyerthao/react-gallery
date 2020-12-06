import React, { Component } from 'react';

// represents a single image and description
// ability to like an image must happen here

class GalleryItem extends Component {

    state = {
        unliked: false
    }

    // this is a function, will set the state of unmasked to be flipped
    toggleMask = () => {
        this.setState({
            unliked: !this.state.unliked // flip the boolean using ! NOT 
        })
    }


  render() {
    return (
        <>  
            <img src={this.props.photo.path} alt="Fun in the sun"></img>
            <button onClick={this.toggleMask}>
            {this.state.unliked? `Like!` : `Unlike!`}
            </button>
            {/* <button onClick={this.props.heroesAssemble}>Like!</button> */}
        </>
    );
  }
}

export default GalleryItem;


           