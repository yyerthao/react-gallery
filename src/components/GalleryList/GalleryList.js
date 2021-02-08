import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';


class GalleryList extends Component{
    render(){
        return(
        <>
        {/* list (contains imageList array) gets pass through from parent App.js*/}
        {/* map is a functions method, sort of like a for loop, which utilizes a taco, 
        in this case, image, to iterate through the our imageList array to render to DOM*/}
            <div className="container">
            { this.props.list.map((image) => 
                <GalleryItem 
                            image={image} key={image.id}
                            getImages={this.props.getImages}/>
                )
            }
            </div>
        </>
        ) // end return
    } // end render
} // end classs

export default GalleryList;
