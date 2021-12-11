import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';


class GalleryList extends Component{
    render(){
        return(
        <>
            <div className="container">
            { this.props.list.map((image) => 
                <GalleryItem 
                            image={image} key={image.id}
                            getImages={this.props.getImages}/>
                )
            }
            </div>
        </>
        ) 
    } 
} 

export default GalleryList;
