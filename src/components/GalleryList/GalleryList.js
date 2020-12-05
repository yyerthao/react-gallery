import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

// all images must be in here

class GalleryList extends Component{
    render(){
        return(
        <>
        <img className="sungirls" src="images/sungirls.jpg" alt="Big Lake, MN Sunflower field"/>
        <br></br>
        <GalleryItem photo={this.props.photo}/>
        </>
        )
    }
}


export default GalleryList;