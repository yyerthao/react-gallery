import React, { Component } from 'react';
import './GalleryItem.css';
import axios from 'axios';

// represents a single image and description
// ability to like an image must happen here

class GalleryItem extends Component {

    state = {
        displayPic: true,
    }

    // this is a function, will set the state of displayPic to be flipped
    toggleImage = () => {
        console.log('Toggling like button'); // logging to ensure button is working X
        this.setState(({ // setting state of key displayPic to a flipped boolean
            displayPic: !this.state.displayPic, // flip the boolean using ! NOT 
        }))
    }
    

    handleLike = () => { // notes that the event was pressed 'onClick' and the id is passed in
    axios.put(`/gallery/like/${this.props.image.id}`) // the id is sent as the params to the server-side
      .then((response) => {
        console.log('Response:', response); // we get an OK back from the DB that it was updated
        this.props.getImages() // call getImages again to update the DOM
      })
      .catch((error) => {
        alert('Something bad happened');
        console.log('Error', error)
      })
  }


  render() {

    return (
        <>  
            <div className="outer-div">
                {/* Ternary operator, if the photo is true or not, toggle image accordingly to 
                display image or description */}

                <div onClick={this.toggleImage} >
                    { 
                    this.state.displayPic // CONDITION
                    ? <img src={this.props.image.path} alt="Yer's Photos"></img> // truthy value 
                    : <p className="img-btn">{this.props.image.description}</p> // falsy value 
                    }
                <p>
                    {/* nested ternary operator */}
                    {
                    (this.props.image.likes === 0)
                    ? 'No one likes this'
                    : (this.props.image.likes === 1)
                    ? '1 person likes this'
                    : `${this.props.image.likes} people like this`
                    }
                </p>
                </div>
                <button onClick={this.handleLike}>Like</button>
                {/* <button>Unlike</button> */}

            </div>

        </>
    );
  }
}


export default GalleryItem;


// get like button to connect to put route, counter already done
// button on image to toggle to description
// https: //medium.com/javascript-scene/nested-ternaries-are-great-361bddd0f340
