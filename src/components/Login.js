import React from 'react';
import '../styles/login.css';
import spotifyIcon from '../images/spotify_logo.png';

const Login = (props) => {

    const songListStyle = {
        color: "#fff",
        width: "100%",
        background: "linear-gradient(#000000 0%, #0f6c30 100%)",
        height: "100vh",
        margin: "auto",
        position: "absolute",
    }

    const innerContainer = {
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)"
    }

    const headerContainerStyle = {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    }

    const headerStyle1 = {
        fontSize: "100px",
        color: "white",
        display:"inline"
    }

    const headerStyle2 = {
        fontSize: "100px",
        color: "#1DB954",
        display:"inline"
    }

    const buttonContainer = {
        display: "flex",
        justifyContent: "center",
        paddingTop: "50px",
    }

    const logoStyle = {
        width: "35px",
        height: "30px",
        paddingRight: "5px"
    }

    const buttonTextStyle = {
        verticalAlign: "middle"
    }

    const signOutContainer = {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingTop: "50px"
    }

    const sampleAccountContainer = {
        textAlign: "center",
        paddingTop:"20px",
    }

    return (
        <div style={songListStyle}>
            <div style={innerContainer}>
                <div style={headerContainerStyle}>
                    <h1 style={headerStyle1}>Spotify</h1>
                    <h1 style={headerStyle2}>Stats</h1>
                </div>
                <div style={buttonContainer}>
                    <button className="button" onClick={props.login}>
                        <img style={logoStyle} src={spotifyIcon} alt={"Spotify Icon"}/>
                        <span style={buttonTextStyle}>Get Started</span>
                    </button>
                </div>
                <div style={sampleAccountContainer}>
                    <a style={{color: "white"}} href="url" onClick={props.sample}>Don't have a Spotify account? Use this sample account.</a>
                </div>
                <div style={signOutContainer}>
                    {props.isSignOut ? <h3 style={{color: "#C8C8C8"}}>Successfully Signed Out</h3> : null}
                    {props.isNoData ? <h3 style={{color: "#C8C8C8"}}>Insufficient data in your spotify account.</h3> : null}
                </div>
            </div>
        </div>
    );
}


export default Login;