import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';


class GalleryList extends Component{
    render(){
        return(
        <>
        {/* list (contains imageList array) gets pass through from parent App.js*/}
        {/* map is a functions method, sort of like a for loop, which utilizes a taco, 
        in this case, image, to iterate through the our imageList array to render to DOM*/}

            { this.props.list.map((item) => 
                // The left side of the = is the name of the prop
                // It must matchin this.props.x in the component
                // key prop MUSt be at this level, not in component
                <GalleryItem photo={item} key={item.id}
                                photoChange={this.props.photoChange}/>
                )
            }

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