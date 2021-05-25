import React, { Component } from 'react';
import '../styles/topsongs.css';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

const TopSongs = (props) => {

    // const styles = {
    //     width: "500px",
    //     height:"500px",
    //     margin: "auto",
    //     outline: "5px solid black",
    //     backgroundColor: "black"
    // }
    // const imageStyles = {
    //     display: "block",  
    //     margin: "auto",
    //     verticalAlign: "true",
    //     width: "60%",
    //     height:"300px"
    // }
    // const captionStyle = {
    //     position: "relative",
    //     left: "auto",
    //     right: "auto",
    //     textColor: "black"
    // }
    // const textStyle = {
    //     color: "white"
    // }
    // const imageContainer = {
    //     width: "500px",
    //     height:"420px",
    //     display: "flex",
    //     justifyContent: "center",
    //     backgroundColor: "black"
    // }
    // const headerStyle = {
    //     display: "flex",
    //     justifyContent: "center",
    //     width: "100%",
    //     alignItems: "center"
    // }

    const itemStyle = {
        height:"400px",
        width:"500px"
    }

    return (
        <div style={{backgroundColor: "#1DB954",
        display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center"}}>
            <div style={itemStyle}>
            <h1>Top Songs</h1>
            {[...Array(10)].map((x, i) =>
                <div style={itemStyle}>
                    <Image style={{width: "200px"}} src={props.topSongImages[i]} roundedCircle />
                    <h3 >{props.topSongNames[i]}</h3>
                </div>
            )}
            </div>
            {/* <Carousel style={styles}>
                {[...Array(10)].map((x, i) =>
                    <Carousel.Item >
                        <div style={imageContainer}>
                            <img
                            style={imageStyles}
                            src={props.topSongImages[i]}
                            alt="Slide"
                            />
                        </div>
                        <Carousel.Caption style={captionStyle}>
                            <h3 style={textStyle}>{props.topSongNames[i]}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}
            </Carousel> */}
        </div>
    );
}

export default TopSongs;