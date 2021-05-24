import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const TopGenres = (props) => {

    const styles = {
        width: "500px",
        height:"500px",
        margin: "auto",
        outline: "5px solid black",
        backgroundColor: "black"
    }
    const imageStyles = {
        display: "block",  
        margin: "auto",
        verticalAlign: "true",
        width: "60%",
        height:"300px"
    }
    const captionStyle = {
        position: "relative",
        left: "auto",
        right: "auto",
        textColor: "black"
    }
    const textStyle = {
        color: "white"
    }
    const imageContainer = {
        width: "500px",
        height:"420px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "black"
    }
    const headerStyle = {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        alignItems: "center"
    }

    return (
        <div>
            <h1 style={headerStyle}>Top Genres</h1>
            <Carousel style={styles}>
                {[...Array(10)].map((x, i) =>
                    <Carousel.Item >
                        <div style={imageContainer}>
                            <h3 style={textStyle}>{props.topGenres[i]}</h3>
                        </div> 
                    </Carousel.Item>
                )}
            </Carousel>
        </div>
    );
}

export default TopGenres;