import React from 'react';

const TopGenres = (props) => {

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
        justifyContent: "center"
    }

    // const photoStyle = {
    //     width: "30vw",
    //     paddingRight: "50px",
    //     textAlign: "right"
    // }

    const nameStyle = {
        marginLeft: "0%",
        marginTop: "3%",
        width: "30vw",
        textAlign: "center"
    }

    return (
        <div style={songListStyle} >
                {[...Array(10)].map((x, i) =>
                    <div key={i} style={songStyle}>
                        <div style={nameStyle}>
                            <h3 >{props.topGenres[i]}</h3>
                        </div>
                    </div>
                )}
        </div>
    );

}

export default TopGenres;