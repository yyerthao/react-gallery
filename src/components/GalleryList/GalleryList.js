import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

// all images must be in here

class GalleryList extends Component{
    render(){
        return(
        <>
        <img className="sungirls" src="images/sungirls.jpg" alt="Sun flower gals"/>
        <br></br>
        <GalleryItem />
        </>
        )
    }
}

export default GalleryList;