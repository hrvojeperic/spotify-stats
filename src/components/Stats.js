import React, { Component } from 'react';
import axios from 'axios';
import Home from './Home';
import TopArtists from './TopArtists';
import TopSongs from './TopSongs';
import TopGenres from './TopGenres';
import TopRecommendations from './TopRecommendations';
import Graphs from './Graphs';
import { Stack, Item} from '@material-ui/core';
import requests from '../utilities/requests';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Radar } from 'react-chartjs-2';
import defaultIcon from './default_image.jpg';
import { FaThList } from 'react-icons/fa';


class Stats extends Component {

    isSongUpdateDone = false;
    isArtistUpdateDone = false;
    state = {
        accessToken: "",
        tokenType: "",
        expiresIn: "",
        playlists: {},
        userName: "",
        followers: 0,
        userImage: "",
        topArtistNames: [],
        topArtistImages: [],
        topArtistID: [],
        topArtistFollowers: [],
        topSongNames: [],
        topSongImages: [],
        topSongID: [],
        topSongArtistName: [],
        topGenres: [],
        topRecommendations: [],
        topRecommendationsImages: [],
        topRecommendationsArtistName: [],
        songFeatures: {}
    }

    componentDidMount() {
        if (localStorage.getItem("accessToken")) {
            this.setState({accessToken: localStorage.getItem("accessToken")});
            //this.getAlbums();
            this.showUserProfile();
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

    showUserProfile = () => {
        requests.getUsersProfile(this._showUserProfileCallback, this._errorCallback);
    }

    _showUserProfileCallback = (data) => {
        let name = data.display_name;
        let followers = data.followers.total;
        let image = defaultIcon;
        if (data.images.length != 0) {
            image = data.images[0].href;
        }
        this.setState({
            userName: name,
            followers: followers,
            userImage: image
        });
        console.log(this.state.userName);
    }

    showTopArtists = () => {
        requests.getTopArtists(this._showTopArtistsCallback, this._errorCallback);
    }

    _showTopArtistsCallback = (data) => {
        let name = [];
        let image = [];
        let id = [];
        let genres = [];
        let followers = [];
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
            followers.push(data.items[i].followers.total);
        }
        const calculatedTopGenres = this.calculateTopGenres(genres);
        this.setState({
            topArtistNames: name,
            topArtistImages: image,
            topArtistID: id,
            topArtistFollowers: followers,
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
        let artistName = [];
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
            artistName.push(data.items[i].album.artists[0].name);
        }
        this.setState({
            topSongNames: name,
            topSongImages: image,
            topSongID: id,
            topSongArtistName: artistName
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
            requests.getRecommendations(artistIDs, songIDs, this._showRecommendationsCallback, this._errorCallback);
        } 
        
    }

    _showRecommendationsCallback = (data) => {
        let songs = [];
        let images = [];
        let artistName = [];
        for(let i = 0; i < data.tracks.length; i++) {
            songs.push(data.tracks[i].name);
            images.push(data.tracks[i].album.images[0].url);
            artistName.push(data.tracks[i].artists[0].name);
        }
        this.setState({
            topRecommendations: songs,
            topRecommendationsImages: images,
            topRecommendationsArtistName: artistName
        })
    }

    _errorCallback = () => {
        // TODO: handle API errors on UI
    }

    render() {
        return (
            <div>

                {window.location.pathname==="/" ? 
                    <Home
                        userName={this.state.userName}
                        followers={this.state.followers}
                        userImage={this.state.userImage}
                    />
                    : null
                }
                
                {window.location.pathname==="/top-artists" ? 
                    <TopArtists 
                        topArtistNames={this.state.topArtistNames}
                        topArtistImages={this.state.topArtistImages}
                        topArtistFollowers={this.state.topArtistFollowers}
                    />
                    : null
                }

                {window.location.pathname==="/top-songs" ? 
                    <TopSongs 
                        topSongNames={this.state.topSongNames}
                        topSongImages={this.state.topSongImages}
                        topSongArtistName={this.state.topSongArtistName}
                    />
                    : null
                }

                {window.location.pathname==="/top-genres" ? 
                    <TopGenres 
                        topGenres={this.state.topGenres}
                     />
                    : null
                }
            
                {window.location.pathname==="/recommendations" ? 
                    <TopRecommendations
                        topRecommendations={this.state.topRecommendations}
                        topRecommendationsImages={this.state.topRecommendationsImages}
                        topRecommendationsArtistName={this.state.topRecommendationsArtistName}
                    />
                    : null
                }

                {window.location.pathname==="/visuals" ? 
                    <Graphs 
                        songFeatures={this.state.songFeatures}
                    />
                    : null
                }
                
            </div>
        );
    }

}

export default Stats;