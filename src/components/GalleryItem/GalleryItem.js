import React, { Component } from 'react';
import './GalleryItem.css';
import axios from 'axios';



class GalleryItem extends Component {
  state = {
    displayPic: true,
  };

  toggleImage = () => {
    console.log("Toggling like button");
    this.setState({
      displayPic: !this.state.displayPic,
    });
  };

  handleLike = () => {
    axios
      .put(`/gallery/like/${this.props.image.id}`)
      .then((response) => {
        console.log("Response:", response);
        this.props.getImages();
      })
      .catch((error) => {
        alert("Something bad happened");
        console.log("Error", error);
      });
  };

  handleUnlike = () => {
    axios
      .put(`/gallery/unlike/${this.props.image.id}`)
      .then((response) => {
        console.log("Response:", response);
        this.props.getImages();
      })
      .catch((error) => {
        alert("Something bad happened");
        console.log("Error", error);
      });
  };

  render() {
    return (
      <>
        <div className="outer-div">
          <div onClick={this.toggleImage}>
            {this.state.displayPic ? (
              <img src={this.props.image.path} alt="Yer's Photos"></img>
            ) : (
              <p className="img-btn">{this.props.image.description}</p>
            )}
            <p>
              {this.props.image.likes === 0
                ? "No one likes this"
                : this.props.image.likes === 1
                ? "1 person likes this"
                : `${this.props.image.likes} people like this`}
            </p>
          </div>
          <button onClick={this.handleLike}>Like</button>
          <button onClick={this.handleUnlike}>Unlike</button>
        </div>
      </>
    );
  }
}


export default GalleryItem;


// get like button to connect to put route, counter already done
// button on image to toggle to description
// https: //medium.com/javascript-scene/nested-ternaries-are-great-361bddd0f340
