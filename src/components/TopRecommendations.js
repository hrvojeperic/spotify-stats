import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const TopRecommendations = (props) => {

    const songListStyle = {
        color: "#fff",
        width: "100%",
        background: "linear-gradient(#000000 0%, #0f6c30 40%, #1ed760 100%)",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "70px"
    }

    const songStyle = {
        display: "flex",
        fontFamily: "Montserrat, sans-serif",
        margin: "0rem",
        height: "25vh",
        justifyContent: "center"
    }

    const photoStyle = {
        width: "30vw",
        paddingRight: "50px",
        textAlign: "right"
    }

    const nameStyle = {
        marginLeft: "0%",
        marginTop: "3%",
        width: "30vw"
    }

    const imageStyle = {
        background: "gray",
        width: "150px",
        height: "150px",
        borderRadius: "50%"
    }

    return (
        <div style={songListStyle} >
                {[...Array(10)].map((x, i) =>
                    <div style={songStyle}>
                        <div style={photoStyle}>
                            <img src={props.topRecommendationsImages[i]} style={imageStyle} />
                        </div>
                        <div style={nameStyle}>
                            <h3>{props.topRecommendations[i]}</h3>
                            <h3 style={{color:"#C8C8C8"}}>By {props.topRecommendationsArtistName[i]}</h3>
                        </div>
                    </div>
                )}
        </div>
    );
}

export default TopRecommendations;