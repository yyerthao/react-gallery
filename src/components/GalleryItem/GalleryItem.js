import React, { Component } from 'react';

// represents a single image and description
// ability to like an image must happen here

class GalleryItem extends Component {

    state = {
        unliked: false,
        count: 0
    }

    // this is a function, will set the state of unmasked to be flipped
    toggleLike = () => {
        console.log('Toggling like button'); // logging to ensure button is working X
        this.setState(({ // setting state of key unliked to a flipped boolean
            unliked: !this.state.unliked, // flip the boolean using ! NOT 
        }))
    }


    increment = () => {
        console.log('CLICK ON LIKE BUTTON');
        this.setState({
            state: [this.state.count + 1, !this.state.unliked]
        })
        
    }


  render() {
      // conditional can go in here



      
    return (
        <>  
            <img src={this.props.photo.path} alt={this.props.photo.description}></img>
            {/* <button onClick={this.toggleLike}> */}
            {/* {this.state.unliked? `Like!` : `Unlike!`}  */}
            {/* ternary operator  */}
            {/* </button> */}
            {/*  */}
            <p><button onClick={(event) => {
                this.increment();
                this.toggleLike();
            }}>
                {this.state.unliked? `Like!` : `Unlike!`} </button>0 Likes.</p>
        </>
    );
  }
}

export default GalleryItem;




// Utilized this link to see if I could run two functions in 1 onClick    
// https://stackoverflow.com/questions/26069238/call-multiple-functions-onclick-reactjs