import React, { Component } from 'react';
import axios from 'axios';
import Stats from './Stats';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Navbar from './navbar';
import Home from '../pages/Home';
import TopSongs from '../pages/TopSongs';
import TopArtists from '../pages/TopArtists';
import TopGenres from '../pages/TopGenres';
import Recommendations from '../pages/Recommendations';
import Visuals from '../pages/Visuals';

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
                {!this.state.visible ? 
                <>
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route path='/' exact component={Stats} />
                    </Switch>
                    <Switch>
                        <Route path='/top-songs' exact component={Stats} />
                    </Switch>
                    <Switch>
                        <Route path='/top-artists' exact component={Stats} />
                    </Switch>
                    <Switch>
                        <Route path='/top-genres' exact component={Stats} />
                    </Switch>
                    <Switch>
                        <Route path='/recommendations' exact component={Stats} />
                    </Switch>
                    <Switch>
                        <Route path='/visuals' exact component={Stats} />
                    </Switch>
                </Router>
                </> : <Login login={() => this.handleLogin()}/>}
            </div>
        );
    }

}


export default Main;