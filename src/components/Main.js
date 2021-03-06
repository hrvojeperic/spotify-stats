import React, { Component } from 'react';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Navbar from './navbar';
import Home from '../pages/Home';
import TopSongs from '../pages/TopSongs';
import TopArtists from '../pages/TopArtists';
import TopGenres from '../pages/TopGenres';
import TopRecommendations from '../pages/TopRecommendations';
import Graphs from '../pages/Graphs';
import requests from '../utilities/requests';
import defaultIcon from '../images/default_image.jpg';
import acdcImage from '../images/acdc.jpg';
import chuckBerryImage from '../images/chuck_berry.jpg';
import ledZeppelinImage from '../images/led_zeppelin.jpg';
import aviciiImage from '../images/avicii.jpg';
import blink182Image from '../images/blink_182.jpg';
import whiteStripesImage from '../images/white_stripes.jpg';
import theSmashingPumpkinsImage from '../images/the_smashing_pumpkins.jpg';
import u2Image from '../images/u2.jpg';
import theRollingStonesImage from '../images/rolling_stones.jpg';
import calvinHarrisImage from '../images/calvin_harris.jpg';
import duaLipaImage from '../images/dua_lipa.jpg';
import hardwellImage from '../images/hardwell.jpg';
import marshmelloImage from '../images/marshmello.jpg';
import deorroImage from '../images/deorro.jpg';
import divineFitsImage from '../images/divine_fits.jpg';
import gunNRosesImage from '../images/guns_n_roses.jpg';
import kidCudiImage from '../images/kid_cudi.jpg';
import mgmtImage from '../images/mgmt.jpg';
import modestMouseImage from '../images/modest_mouse.jpg';
import swedishHouseMafiaImage from '../images/swedish_house_mafia.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import token from '../utilities/token';

class Main extends Component {

    isSongUpdateDone = false;
    isArtistUpdateDone = false;
    state = {
        visible: true,
        accessToken: "",
        tokenType: "",
        expiresIn: "",
        data: {},
        isSignOut: false,
        userName: "",
        followers: 0,
        userImage: "",
        isDataRetrieved: false,
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
        songFeatures: {},
        timeSignatures: {},
        tempo: {},
        treeMapData: {},
        isNoData: false,
        isSampleAccount: false
    }

    componentDidMount() {
        if(window.location.hash){
            this.setState({visible: false});
            const paramInfo = this.getParamsFromAuthentication(window.location.hash);
            this.setState({
                accessToken: paramInfo.access_token, 
                tokenType: paramInfo.token_type, 
                expiresIn: paramInfo.expires_in}
            );
            token.access_token = paramInfo.access_token;
            token.token_type = paramInfo.token_type;
            token.expires_in = paramInfo.expires_in;
        }
    }

    handleLogin = () => {
        // set up url for authentication
        const ENDPOINT = "https://accounts.spotify.com/authorize";
        const CLIENT_ID = "f6914647e144472a9946eba5f87d9721";
        const RESPONSE_TYPE = "token";
        const SHOW_DIALOG = "true";
        const REDIRECT_URI = "https://hrvojeperic.github.io/spotify-stats/";
        // const REDIRECT_URI = "http://localhost:3000/spotify-stats/";
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

    handleSignout = () => {
        this.setState({
            visible: true,
            isSignOut: true
        })
        window.history.replaceState(null, "New Page Title", "/spotify-stats")
        return null;
    }

    showUserProfile = () => {
        requests.getUsersProfile(this._showUserProfileCallback, this._errorCallback);
    }

    _showUserProfileCallback = (data) => {
        let name = data.display_name;
        let followers = data.followers.total;
        let image = defaultIcon;
        if (data.images.length !== 0) {
            image = data.images[0].href;
        }
        this.setState({
            userName: name,
            followers: followers,
            userImage: image
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
        let followers = [];
        if (data.items.length === 0) { // no data
            this.setState({
                isNoData: true
            })
        }
        else {
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
    }

    showTopSongs = () => {
        requests.getTopSongs(this._showTopSongsCallback, this._errorCallback);
    }

    _showTopSongsCallback = (data) => {
        let name = [];
        let image = [];
        let id = [];
        let artistName = [];
        if (data.items.length === 0) { // no data
            this.setState({
                isNoData: true
            })
        }
        else {
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
                this.setTreeMapData(this.state.topSongArtistName);
            });
            requests.getSongFeatures(this.state.topSongID, this._showTopSongFeaturesCallback, this._errorCallback);
        }
    }

    _showTopSongFeaturesCallback = (data) => {
        let acousticness = 0;
        let danceability = 0;
        let energy = 0;
        let instrumentalness = 0;
        let liveness = 0;
        let valence = 0;
        let speechiness = 0;
        let durationMs = [];
        let timeSignature = [];
        let tempo = [];
        let length = data.audio_features.length;

        for(let i = 0; i < length; i++) {
            acousticness += data.audio_features[i].acousticness;
            danceability += data.audio_features[i].danceability;
            energy += data.audio_features[i].energy;
            instrumentalness += data.audio_features[i].instrumentalness;
            liveness += data.audio_features[i].liveness;
            valence += data.audio_features[i].valence;
            speechiness += data.audio_features[i].speechiness;
            durationMs.push(data.audio_features[i].duration_ms);
            timeSignature.push(data.audio_features[i].time_signature);
            tempo.push(data.audio_features[i].tempo);

        }

        acousticness = acousticness / length;
        danceability = danceability / length;
        energy = energy / length;
        instrumentalness = instrumentalness / length;
        liveness = liveness / length;
        valence = valence / length;
        speechiness = speechiness / length;
        
        // calculate min, max, average of song durations
        let sum = 0;
        let max = durationMs[0];
        let min = durationMs[0];
        for (let i = 0; i < durationMs.length; i++) {
            if (max < durationMs[i]) {
                max = durationMs[i]
            }
            if (min > durationMs[i]) {
                min = durationMs[i]
            }
            sum += durationMs[i];
        }
        max = max / 60000;
        min = min / 60000;
        sum = sum / 60000;
        const durationAvg = sum / durationMs.length;

        // calculate the number of each time signature
        var occurrences = {};
        for (var i = 0, j = timeSignature.length; i < j; i++) {
            occurrences[timeSignature[i]] = (occurrences[timeSignature[i]] || 0) + 1;
        }

        // group tempo into Largo (0-76), Adante (77-108), Moderato (109-120), Allegro (121-168), Presto (169 - greater)
        let tempoFrequency = {largo: 0, adante: 0, moderato: 0, allegro: 0, presto: 0};
        for (let i = 0; i < tempo.length; i++) {
            if (tempo[i] <= 76) { // slow
                tempoFrequency.largo++
            }
            else if (tempo[i] <= 108) { // moderate
                tempoFrequency.adante++
            }
            else if (tempo[i] <= 120) { // moderate
                tempoFrequency.moderato++
            }
            else if (tempo[i] <= 168) { // moderate
                tempoFrequency.allegro++
            }
            else { // fast
                tempoFrequency.presto++
            }
        }
        // tempo = tempoFrequency;
        
        const features = {
                "acousticness": acousticness,
                "danceability": danceability,
                "energy": energy,
                "instrumentalness": instrumentalness,
                "liveness": liveness,
                "valence": valence,
                "speechiness": speechiness,
                "minDuration": min,
                "maxDuration": max,
                "avgDuration": durationAvg,
                "timeSignatures": occurrences
        }
        this.setState({
            songFeatures: features,
            tempo: tempoFrequency
        })
    }

    calculateTopGenres = (genres) => {
        var occurrences = {};
        for (var i = 0, j = genres.length; i < j; i++) {
            occurrences[genres[i]] = (occurrences[genres[i]] || 0) + 1;
        }
        console.log(genres);
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
        console.log(sortedTopGenres);
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
        if (data.tracks.length === 0) { // no data
            this.setState({
                isNoData: true
            })
        }
        else {
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
    }

    _errorCallback = () => {
        // TODO: handle API errors on UI
    }

    setTreeMapData = (topSongArtistName) => {
        var occurrences = {};
        for (var i = 0, j = topSongArtistName.length; i < j; i++) {
            occurrences[topSongArtistName[i]] = (occurrences[topSongArtistName[i]] || 0) + 1;
        }
        this.setState({
            treeMapData: occurrences
        });
    }

    handleHome = () => {
        if (this.state.isDataRetrieved === false && this.state.isSampleAccount === false) {
            this.setState({
                isDataRetrieved: true
            });
            this.showUserProfile();
            this.showTopSongs();
            this.showTopArtists();
            this.showRecommendations();
        }
        return <Home 
                    userName={this.state.userName}
                    followers={this.state.followers}
                    userImage={this.state.userImage}
                />;
    }

    handleTopSongs = () => {      
        return <TopSongs 
                    topSongNames={this.state.topSongNames}
                    topSongImages={this.state.topSongImages}
                    topSongArtistName={this.state.topSongArtistName}
                />;
    }

    handleTopArtists = () => {
        return <TopArtists 
                    topArtistNames={this.state.topArtistNames}
                    topArtistImages={this.state.topArtistImages}
                    topArtistFollowers={this.state.topArtistFollowers}
                />;
    }

    handleTopGenres = () => {
        return <TopGenres
                    topGenres={this.state.topGenres}
                />;
    }

    handleRecommendations = () => {
        return <TopRecommendations
                    topRecommendations={this.state.topRecommendations}
                    topRecommendationsImages={this.state.topRecommendationsImages}
                    topRecommendationsArtistName={this.state.topRecommendationsArtistName}
                />;
    }

    handleVisuals = () => {
        return <Graphs
                    songFeatures={this.state.songFeatures}
                    tempo={this.state.tempo != null ? this.state.tempo : {}}
                    treeMapData={this.state.treeMapData}
                />;
    }

    handleSampleAccount = () => {
        // Create sample data
        this.setState({
            isSampleAccount: true,
            visible: false,

            userName: "Steve Miller",
            followers: 7,
            userImage: defaultIcon,

            topSongNames: ["Wake Me Up", "Ramble On", "Back In Black", "1979", "Stairway To Heaven", "Go Johnny Go", "Whole Lotta Love", "Seven Nation Army", "I Miss You", "What's My Age Again?"],
            topSongImages: [aviciiImage, ledZeppelinImage, acdcImage, theSmashingPumpkinsImage, ledZeppelinImage, chuckBerryImage, ledZeppelinImage, whiteStripesImage, blink182Image, blink182Image],
            topSongArtistName: ["Avicii", "Led Zeppelin", "AC/DC", "The Smashing Pumpkins", "Led Zeppelin", "Chuck Berry", "Led Zeppelin", "The White Stripes", "Blink-182", "Blink-182"],

            topArtistNames: ["Led Zeppelin", "Blink-182", "Avicii", "AC/DC", "U2", "The Rolling Stones", "Calvin Harris", "Dua Lipa", "Marshmello", "Hardwell"],
            topArtistImages: [ledZeppelinImage, blink182Image, aviciiImage, acdcImage, u2Image, theRollingStonesImage, calvinHarrisImage, duaLipaImage, marshmelloImage, hardwellImage],
            topArtistFollowers: ["10,720,000", "31,753", "23,703,006", "19,210,000", "1,310,000", "2,140,000", "21,690,000", "25,280,000", "30,740,000", "3,438,881"],

            topGenres: ["rock", "classic rock", "punk rock", "electronic dance music", "pop", "hard rock", "dance", "house", "alternative rock", "hip hop"],
            
            topRecommendations: ["Alone", "Slide", "Fool in the Rain", "Would That Not Be Nice", "Electric Feel", "Five Hours", "Welcome To The Jungle", "Float On", 
                                "Pursuit Of Happiness", "Don't You Worry Child", ],
            topRecommendationsImages: [marshmelloImage, calvinHarrisImage, ledZeppelinImage, divineFitsImage, mgmtImage, deorroImage, gunNRosesImage, modestMouseImage, kidCudiImage, swedishHouseMafiaImage],
            topRecommendationsArtistName: ["Marshmello", "Calvin Harris", "Led Zeppelin", "Divine Fits", "MGMT", "Deorro", "Guns N' Roses", "Modest Mouse", 
                                            "Kid Cudi", "Swedish House Mafia"],

            songFeatures: {
                "acousticness": 0.1,
                "danceability": 0.6,
                "energy": 0.8,
                "instrumentalness": 0.4,
                "liveness": 0.8,
                "valence": 0.6,
                "speechiness": 0.4,
                "minDuration": 2,
                "maxDuration": 6,
                "avgDuration": 3,
                "timeSignatures": null
            },
            tempo: {largo: 1, adante: 10, moderato: 20, allegro: 15, presto: 5},
            treeMapData: {"Led Zeppelin": 10, "Blink-182": 5, "Avicii": 6, "AC/DC": 2, "U2": 1, "The Rolling Stones": 1, "Calvin Harris":5 , "Dua Lipa": 2, "Marshmello": 4, 
                            "Hardwell":2, "Drake":1, "Kanye West":1, "Sia": 2, "Kygo":1, "Divine Fits": 1, "Louis The Child": 2, "Crogotti": 2, "The Smashing Pumpkins":1, 
                            "The White Stripes":1}
        });

    }

    render() {
        return (
            <div>
                {!this.state.visible && !this.state.isNoData ? 
                <>
                <Router> 
                    <Navbar/>
                    <Switch>
                        <Route path='/spotify-stats' exact component={() => this.handleHome()} />
                    </Switch>
                    <Switch>
                        <Route path='/spotify-stats/top-songs' exact component={() => this.handleTopSongs()} />
                    </Switch>
                    <Switch>
                        <Route path='/spotify-stats/top-artists' exact component={() => this.handleTopArtists()} />
                    </Switch>
                    <Switch>
                        <Route path='/spotify-stats/top-genres' exact component={() => this.handleTopGenres()} />
                    </Switch>
                    <Switch>
                        <Route path='/spotify-stats/recommendations' exact component={() => this.handleRecommendations()} />
                    </Switch>
                    <Switch>
                        <Route path='/spotify-stats/visuals' exact component={() => this.handleVisuals()} />
                    </Switch>
                    <Switch>
                        <Route path='/spotify-stats/sign-out' exact component={() => this.handleSignout()} />
                    </Switch>
                </Router>
                </> 
                : this.state.isNoData ? <Login login={() => this.handleLogin()} isNoData={this.state.isNoData}/>
                : <Login login={() => this.handleLogin()} sample={() => this.handleSampleAccount()} isSignOut={this.state.isSignOut} isSampleAccount={this.state.isSampleAccount}/>}
            </div>
        );
    }

}


export default Main;