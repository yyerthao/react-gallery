import React, { Component } from 'react';



class GalleryList extends Component{
    render(){
        return(
            <>
        <img className="sunboys" src="images/sunboys.jpg" alt="Sun flower boys"/>
        <button>Love it!</button>
        <img className="sungirls" src="images/sungirls.jpg" alt="Sun flower gals"/>
        <button>Love it!</button>
        </>
        )
    }
}

export default GalleryList;