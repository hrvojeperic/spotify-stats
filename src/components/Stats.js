import React, { Component } from 'react';
import axios from 'axios';
import Graphs from './Graphs';
import TopSongs from './TopSongs';
import { Stack, Item} from '@material-ui/core';
import requests from '../utilities/requests';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Chart,
    Radar
  } from 'react-chartjs-2';

class Stats extends Component {
    isSongUpdateDone = false;
    isArtistUpdateDone = false;
    state = {
        accessToken: "",
        tokenType: "",
        expiresIn: "",
        playlists: {},
        topArtistNames: [],
        topArtistImages: [],
        topArtistID: [],
        topSongNames: [],
        topSongImages: [],
        topSongID: [],
        topGenres: [],
        topRecommendations: [],
        topRecommendationsImages: [],
        songFeatures: {}
    }

    componentDidMount() {
        if (localStorage.getItem("accessToken")) {
            this.setState({accessToken: localStorage.getItem("accessToken")});
            //this.getAlbums();
            this.showTopArtists();
            this.showTopSongs();
            // this.showRecommendations();
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
        let id = [];
        let genres = [];
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
            id.push(data.items[i].id);
            genres.push(...data.items[i].genres);
        }
        const calculatedTopGenres = this.calculateTopGenres(genres);
        this.setState({
            topArtistNames: name,
            topArtistImages: image,
            topArtistID: id,
            topGenres: calculatedTopGenres
        }, () => {
            this.isArtistUpdateDone = true;
            this.showRecommendations(); 
        });
    }

    showTopSongs = () => {
        requests.getTopSongs(this._showTopSongsCallback, this._errorCallback);
    }

    _showTopSongsCallback = (data) => {
        let name = [];
        let image = [];
        let id = [];
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
            id.push(data.items[i].id);
        }
        this.setState({
            topSongNames: name,
            topSongImages: image,
            topSongID: id
        }, () => {
            this.isSongUpdateDone = true;
            this.showRecommendations();
        });
        requests.getSongFeatures(this.state.topSongID, this._showTopSongFeaturesCallback, this._errorCallback);
    }

    _showTopSongFeaturesCallback = (data) => {
        console.log(data)
        let acousticness = 0;
        let danceability = 0;
        let energy = 0;
        let instrumentalness = 0;
        let liveness = 0;
        let valence = 0;
        let speechiness = 0;
        let length = data.audio_features.length;

        for(let i = 0; i < length; i++) {
            acousticness += data.audio_features[i].acousticness;
            danceability += data.audio_features[i].danceability;
            energy += data.audio_features[i].energy;
            instrumentalness += data.audio_features[i].instrumentalness;
            liveness += data.audio_features[i].liveness;
            valence += data.audio_features[i].valence;
            speechiness += data.audio_features[i].speechiness;

        }

        acousticness = acousticness / length;
        danceability = danceability / length;
        energy = energy / length;
        instrumentalness = instrumentalness / length;
        liveness = liveness / length;
        valence = valence / length;
        speechiness = speechiness / length;
        
        const features = {
                "acousticness": acousticness,
                "danceability": danceability,
                "energy": energy,
                "instrumentalness": instrumentalness,
                "liveness": liveness,
                "valence": valence,
                "speechiness": speechiness
        }
        this.setState({
            songFeatures: features
        })
        console.log(this.state.songFeatures )
        console.log(this.state.songFeatures.danceability)
    }

    calculateTopGenres = (genres) => {
        var occurrences = {};
        for (var i = 0, j = genres.length; i < j; i++) {
            occurrences[genres[i]] = (occurrences[genres[i]] || 0) + 1;
        }
        // console.log(occurrences);
        let num = 10;
        let sortedTopGenres = [];
        if(num > Object.keys(occurrences).length){
            return false;
        };
        Object.keys(occurrences).sort((a, b) => occurrences[b] - occurrences[a]).forEach((key, ind) =>
        {
            if(ind < num){
                sortedTopGenres.push(key);
            }
        });
        // console.log(sortedTopGenres);
        return sortedTopGenres;
    }

    showRecommendations = () => {
        if (this.isSongUpdateDone && this.isArtistUpdateDone) {
            let artistIDs = [];
            let songIDs = [];
            for (let i = 0; (i < this.state.topArtistID.length) &&  (i < 2); i++) {
                artistIDs.push(this.state.topArtistID[i]);
            }
            for (let i = 0; (i < this.state.topSongID.length) &&  (i < 3); i++) {
                songIDs.push(this.state.topSongID[i]);
            }

            console.log(artistIDs);
            console.log(songIDs);
            requests.getRecommendations(artistIDs, songIDs, this._showRecommendationsCallback, this._errorCallback);
        } 
        
    }

    _showRecommendationsCallback = (data) => {
        let songs = [];
        let images = [];
        for(let i = 0; i < data.tracks.length; i++) {
            songs.push(data.tracks[i].name);
            images.push(data.tracks[i].album.images[0].url);
        }
        this.setState({
            topRecommendations: songs,
            topRecommendationsImages: images
        })
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

        const data = {
            labels: [
              'Acousticness',
              'Danceability',
              'Energy',
              'Instrumentalness',
              'Liveness',
              'Valence',
              'Speechiness'
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [this.state.songFeatures.acousticness, this.state.songFeatures.danceability, this.state.songFeatures.energy, this.state.songFeatures.instrumentalness, 
              this.state.songFeatures.liveness, this.state.songFeatures.valence, this.state.songFeatures.speechiness],
              fill: true,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgb(255, 99, 132)',
              pointBackgroundColor: 'rgb(255, 99, 132)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(255, 99, 132)'
            }]
          };
        
        
       
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
                <div>
                    <h1 style={headerStyle}>Top Genres</h1>
                    <Carousel style={styles}>
                        {[...Array(10)].map((x, i) =>
                            <Carousel.Item >
                                <div style={imageContainer}>
                                    <h3 style={textStyle}>{this.state.topGenres[i]}</h3>
                                </div> 
                            </Carousel.Item>
                        )}
                    </Carousel>
                </div>
                <div>
                    <h1 style={headerStyle}>Recommendations</h1>
                    <Carousel style={styles}>
                        {[...Array(10)].map((x, i) =>
                            <Carousel.Item >
                                <div style={imageContainer}>
                                    <img
                                    style={imageStyles}
                                    src={this.state.topRecommendationsImages[i]}
                                    alt="Slide"
                                    />
                                </div>
                                <Carousel.Caption style={captionStyle}>
                                    <h3 style={textStyle}>{this.state.topRecommendations[i]}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )}
                    </Carousel>
                </div>
                <div>
                    <Radar
                    type='radar'
                    data={data}
                    options={{
                        title:{
                          display:true,
                          text:'Song Attributes',
                          fontSize:20
                        },
                        legend:{
                          display:true,
                          position:'right'
                        }
                      }}
                    />
                </div>
            </div>
        );
    }

}

export default Stats;