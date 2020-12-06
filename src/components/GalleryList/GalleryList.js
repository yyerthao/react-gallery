import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

// all images must be in here per instructions

class GalleryList extends Component{
    render(){
        return(
        <>
        {/* list (contains imageList array) gets pass through from parent App.js*/}
        {/* map is a functions method, sort of like a for loop, which utilizes a taco, 
        in this case, image, to iterate through the our imageList array to render to DOM*/}
        {this.props.list.map((image) =>
        // key={item.id} not necessary but rids warning key error on browser console
        // photo is prop to move photo data to GalleryItem
        <GalleryItem photo={image} key={image.id}
                            photoChange={this.props.photoChange}/>        
            )
        } {/* end of this.props.list.map */}
        </>
        ) // end return
    } // end render
} // end classs

export default GalleryList;




/*

- get something from /gallery
- go to server.js with axios
- find /gallery, and see if it's a GET OR USE
- since it's a USE, must search through gallery router file for specific GET /gallery
       - app.use('/gallery', gallery);
- go to const gallery = require('./routes/gallery.router.js');
- 
- 
- 
*/