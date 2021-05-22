import React, { Component } from 'react';
import axios from 'axios';
import Graphs from './Graphs';
import TopSongs from './TopSongs';
import { Stack, Item} from '@material-ui/core';
import requests from '../utilities/requests';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

class Stats extends Component {

    state = {
        accessToken: "",
        tokenType: "",
        expiresIn: "",
        playlists: {},
        topArtistNames: [],
        topArtistImages: [],
        topSongs: {},
        topSongNames: [],
        topSongImages: []
    }

    componentDidMount() {
        if (localStorage.getItem("accessToken")) {
            this.setState({accessToken: localStorage.getItem("accessToken")});
            //this.getAlbums();
            this.showTopArtists();
            this.showTopSongs();
        }
    }

    getAlbums = () => {
        const ENDPOINT = "https://api.spotify.com/v1/me/playlists";
        console.log("HERE: "+ localStorage.getItem("accessToken"));
        axios.get(ENDPOINT, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("accessToken"),
            }
        })
        .then((response) => {
            this.setState({playlists: response.data});
        })
        .catch((error) => {
            console.log(error);
        });
    }

    showTopArtists = () => {
        requests.getTopArtists(this._showTopArtistsCallback, this._errorCallback);
    }

    _showTopArtistsCallback = (data) => {
        let name = [];
        let image = [];
        for(let i = 0; i < data.items.length; i++) {
            if (data.items[i].name != null) { // null checking
                name.push(data.items[i].name);
            }
            else {
                name.push("Unknown");
            }
            if (data.items[i].images != null) { // null checking
                image.push(data.items[i].images[0].url);
            }
            else {
                // TODO: Push default artist image for null images
            }
        }
        this.setState({
            topArtistNames: name,
            topArtistImages: image
        });
    }

    showTopSongs = () => {
        requests.getTopSongs(this._showTopSongsCallback, this._errorCallback);
    }

    _showTopSongsCallback = (data) => {
        let name = [];
        let image = [];
        for(let i = 0; i < data.items.length; i++) {
            if (data.items[i].name != null) { // null checking
                name.push(data.items[i].name);      
            }
            else {
                name.push("Unknown");
            }
            if (data.items[i].album.images != null) { // null checking
                image.push(data.items[i].album.images[0].url);
            }
            else {
                // TODO: Push default song image for null images
            }
        }
        this.setState({
            topSongNames: name,
            topSongImages: image
        });
    }

    _errorCallback = () => {
        // TODO: handle API errors on UI
    }

    

    render() {
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
                <div>
                    <h1 style={headerStyle}>Top Artists</h1>
                    <Carousel style={styles}>
                        {[...Array(10)].map((x, i) =>
                            <Carousel.Item >
                                <div style={imageContainer}>
                                    <img
                                    style={imageStyles}
                                    src={this.state.topArtistImages[i]}
                                    alt="Slide"
                                    />
                                </div>
                                <Carousel.Caption style={captionStyle}>
                                    <h3 style={textStyle}>{this.state.topArtistNames[i]}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )}
                    </Carousel>
                </div>
                <div>
                    <h1 style={headerStyle}>Top Songs</h1>
                    <Carousel style={styles}>
                        {[...Array(10)].map((x, i) =>
                            <Carousel.Item >
                                <div style={imageContainer}>
                                    <img
                                    style={imageStyles}
                                    src={this.state.topSongImages[i]}
                                    alt="Slide"
                                    />
                                </div>
                                <Carousel.Caption style={captionStyle}>
                                    <h3 style={textStyle}>{this.state.topSongNames[i]}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )}
                    </Carousel>
                </div>
            </div>
        );
    }

}

export default Stats;