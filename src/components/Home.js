import React from 'react'

export const Home = (props) => {

    const songListStyle = {
        color: "#fff",
        width: "100%",
        background: "linear-gradient(#000000 0%, #0f6c30 40%, #1ed760 100%)",
        height: "100vh",
        margin: "auto",
        position: "absolute",
    }

    const songStyle = {
        display: "flex",
        fontFamily: "Montserrat, sans-serif",
        margin: "0rem",
        height: "25vh",
        justifyContent: "center",
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)"
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
        borderRadius: "50%",
        border: "none"
    }

    return (
        
        <div style={songListStyle} >
        
            <div style={songStyle}>
                <div style={photoStyle}>
                    <img src={props.userImage} style={imageStyle}  />
                </div>
                <div style={nameStyle}>
                <h3>{props.userName}</h3>
                <h3 style={{color:"#C8C8C8"}}>Followers - {props.followers}</h3>
                </div>
            </div>
      
        </div>
    )
}

export default Home;