import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const TopRecommendations = (props) => {

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
            <h1 style={headerStyle}>Recommendations</h1>
            <Carousel style={styles}>
                {[...Array(10)].map((x, i) =>
                    <Carousel.Item >
                        <div style={imageContainer}>
                            <img
                            style={imageStyles}
                            src={props.topRecommendationsImages[i]}
                            alt="Slide"
                            />
                        </div>
                        <Carousel.Caption style={captionStyle}>
                            <h3 style={textStyle}>{props.topRecommendations[i]}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}
            </Carousel>
        </div>
    );
}

export default TopRecommendations;