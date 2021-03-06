import React from 'react';
import '../styles/topsongs.css';

const TopSongs = (props) => {

    const songListStyle = {
        color: "#fff",
        width: "100%",
        background: "linear-gradient(#000000 0%, #0f6c30 40%, #1ed760 100%)",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "70px",
        paddingBottom: "70px"
    }

    const songStyle = {
        display: "flex",
        fontFamily: "Montserrat, sans-serif",
        margin: "0rem",
        minHeight: "25vh",
        justifyContent: "center",
        paddingTop: "20px",
        paddingBottom: "20px"
    }

    const photoStyle = {
        width: "30vw",
        paddingRight: "50px",
        textAlign: "right",
        position: "relative",
        display: "inline-flex",
    }

    const nameStyle = {
        width: "30vw",
        paddingRight: "50px",
        textAlign: "left",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",

    }

    const imageStyle = {
        background: "gray",
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        backgroundColor:"black"
    }

    const photoInnerStyle = {
        marginLeft: "auto",
        marginTop: "auto",
        marginBottom: "auto",
    }

    const subHeaderStyle = {
        color:"#C8C8C8"
    }

    return (
        <div style={songListStyle} >
                {[...Array(10)].map((x, i) =>
                    <div key={i} style={songStyle}>
                        <div style={photoStyle}>
                            <div style={photoInnerStyle}>
                                <img src={props.topSongImages[i]} alt={"artist"} style={imageStyle} />
                            </div>
                        </div>
                        <div style={nameStyle} >
                            <h3>{props.topSongNames[i]}</h3>
                            <h3 style={subHeaderStyle}>By {props.topSongArtistName[i]}</h3>
                        </div>
                    </div>
                )}
        </div>
    );
}

export default TopSongs;