import React, { Component } from 'react';
import axios from 'axios';


import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid"
// import Paper from "@material-ui/core/Paper"

const styles = theme => ({
  card: {
    maxWidth: 500,
  },
  media: {
    height: 200,
  },
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
});


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

  render(props) {
    const { classes } = this.props;
    return (
      <>
        <div>
          {this.state.displayPic ? (
            // <img src={this.props.image.path} alt="Yer's Photos"></img>
            <div>
              <Grid
                container
                spacing={4}
                className={classes.gridContainer}
                justify="center"
              >
                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        onClick={this.toggleImage}
                        className={classes.media}
                        image={this.props.image.path}
                        alt="Yer's Photos"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h2"
                        ></Typography>
                        <Typography component="p"></Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        onClick={this.handleLike}
                      >
                        Like
                      </Button>
                      <Button
                        size="small"
                        color="primary"
                        onClick={this.handleUnlike}
                      >
                        Unlike
                      </Button>
                    </CardActions>
                    {this.props.image.likes === 0
                      ? "No one likes this"
                      : this.props.image.likes === 1
                      ? "1 person likes this"
                      : `${this.props.image.likes} people like this`}
                  </Card>
                </Grid>
              </Grid>
            </div>
          ) : (
            <div>
              <Grid
                container
                spacing={4}
                className={classes.gridContainer}
                justify="center"
              >
                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                      // comment
                        onClick={this.toggleImage}
                        className={classes.media}
                        image={this.props.image.path}
                        alt="Yer's Photos"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {this.props.image.description}
                        </Typography>
                        <Typography component="p"></Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        onClick={this.handleLike}
                      >
                        Like
                      </Button>
                      <Button
                        size="small"
                        color="primary"
                        onClick={this.handleUnlike}
                      >
                        Unlike
                      </Button>
                    </CardActions>
                    {this.props.image.likes === 0
                      ? "No one likes this"
                      : this.props.image.likes === 1
                      ? "1 person likes this"
                      : `${this.props.image.likes} people like this`}
                  </Card>
                </Grid>
              </Grid>
            </div>
          )}
          {/* <p>
              {this.props.image.likes === 0
                ? "No one likes this"
                : this.props.image.likes === 1
                ? "1 person likes this"
                : `${this.props.image.likes} people like this`}
            </p> */}
        </div>
      </>
    );
  }
}


GalleryItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GalleryItem);



// get like button to connect to put route, counter already done
// button on image to toggle to description
// https: //medium.com/javascript-scene/nested-ternaries-are-great-361bddd0f340
