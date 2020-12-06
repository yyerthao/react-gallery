import React, { Component } from 'react';
import './GalleryItem.css';

// represents a single image and description
// ability to like an image must happen here

class GalleryItem extends Component {

    state = {
        unliked: true,
    }

    // this is a function, will set the state of unmasked to be flipped
    toggleImage = () => {
        console.log('Toggling like button'); // logging to ensure button is working X
        this.setState(({ // setting state of key unliked to a flipped boolean
            unliked: !this.state.unliked, // flip the boolean using ! NOT 
        }))
    }
    

  render() {

    return (
        <>  
            <div className="outer-div">
                {/* Ternary operator, if the photo is true or not, toggle image accordingly to 
                display image or description */}

                <div onClick={this.toggleImage} >
                    { 
                    this.state.unliked // CONDITION
                    ? <img src={this.props.image.path} alt="Blue"></img> // truthy value 
                    : <p className="img-btn">{this.props.image.description}</p> // falsy value 
                    }
                </div>

            <button className="like-btn" onClick={this.props.updateImage}>Like</button>
           </div>
        </>
    );
  }
}


export default GalleryItem;



// - When the like button is clicked, use `Axios` to update (`PUT`) the like count `/gallery/like/:id`.
// Utilized this link to see if I could run two functions in 1 onClick    
// https://stackoverflow.com/questions/26069238/call-multiple-functions-onclick-reactjs
// get like button to connect to put route, counter already done
// button on image to toggle to description