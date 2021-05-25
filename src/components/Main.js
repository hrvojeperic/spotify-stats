import React, { Component } from 'react';
import axios from 'axios';
import Stats from './Stats';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './navbar';

class Main extends Component {

    state = {
        visible: true,
        accessToken: "",
        tokenType: "",
        expiresIn: "",
        data: {}
    }

    componentDidMount() {
        if(window.location.hash){
            this.setState({visible: false});
            const paramInfo = this.getParamsFromAuthentication(window.location.hash);
            console.log(paramInfo)
            localStorage.clear();
            this.setState({
                accessToken: paramInfo.access_token, 
                tokenType: paramInfo.token_type, 
                expiresIn: paramInfo.expires_in}
            );
            localStorage.setItem("accessToken", paramInfo.access_token);
            localStorage.setItem("tokenType", paramInfo.token_type);
            localStorage.setItem("expiresIn", paramInfo.expires_in);
        }
    }

    handleLogin = () => {
        // set up url for authentication
        const ENDPOINT = "https://accounts.spotify.com/authorize";
        const CLIENT_ID = "f6914647e144472a9946eba5f87d9721";
        const RESPONSE_TYPE = "token";
        const SHOW_DIALOG = "true";
        const REDIRECT_URI = "http://localhost:3000/";
        const SCOPE = ["user-top-read", "playlist-read-private"];
        const DELIMINATOR = "%20";
        const SCOPE_PARAM = SCOPE.join(DELIMINATOR);
        // redirect to spotify sign in
        window.location = `${ENDPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&show_dialog=${SHOW_DIALOG}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE_PARAM}`;
    }

    getParamsFromAuthentication = (hash) => {
         let cleanHash = hash.substring(1);
         let splitHash = cleanHash.split("&");
         const splitHashMore = splitHash.reduce((acc, val) => {
             const [key, value] = val.split("=");
             acc[key] = value;
             return acc;
         }, {});
        return splitHashMore;
    }

    render() {
        return (
            <div>
                {!this.state.visible ? <Navbar/> : <Login login={() => this.handleLogin()}/>}
            </div>
        );
    }

}


export default Main;