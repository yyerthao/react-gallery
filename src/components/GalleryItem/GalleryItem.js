import React, { Component } from 'react';

// represents a single image and description
// ability to like an image must happen here

class GalleryItem extends Component {

    state = {
        unliked: false,
        counter: 0
    }

    // this is a function, will set the state of unmasked to be flipped
    toggleMask = () => {
        this.setState({
            unliked: !this.state.unliked, // flip the boolean using ! NOT 
            [this.state.counter]: this.state.count + 1
        })
    }

    // likeCounts = () => {
    //     this.setState({
    //         [this.state.counter]: this.state.count + 1
    //     })
    // }

  render() {
      
    return (
        <>  
            <img src={this.props.photo.path} alt={this.props.photo.description}></img>
            <button onClick={this.toggleMask}>
            {this.state.unliked? `Like!` : `Unlike!`}
            </button>
            {/* <button onClick={this.props.heroesAssemble}>Like!</button> */}
        </>
    );
  }
}

export default GalleryItem;


           