import axios from 'axios';
import token from './token';

const requests = {

    getUsersProfile: (callback, errorCallback) => {

        console.log("Getting Users Profile!!!");

        const ENDPOINT = "https://api.spotify.com/v1/me";
        let errorCode = 0;
        
        axios.get(ENDPOINT, {
            headers: {
                Authorization: "Bearer " + token.access_token,
            }
        })
        .then((response) => {
            if (response.status === 200) { // check for errors
                return response.data;
            }
            else {        
                errorCode = response.status;
                throw new Error(response.status);
            }
        })
        .then((data) => {
            callback(data)
        })
        .catch((error) => {
            console.log(error);
            errorCallback();
        });
    },

    // request top songs
    getTopSongs: (callback, errorCallback) => {

        console.log("Getting Top Songs!!!");

        const ENDPOINT = "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=100";
        let errorCode = 0;
        
        axios.get(ENDPOINT, {
            headers: {
                Authorization: "Bearer " + token.access_token,
            }
        })
        .then((response) => {
            if (response.status === 200) { // check for errors
                return response.data;
            }
            else {        
                errorCode = response.status;
                throw new Error(response.status);
            }
        })
        .then((data) => {
            callback(data)
        })
        .catch((error) => {
            console.log(error);
            errorCallback();
        });

    },

    // request top artists
    getTopArtists: (callback, errorCallback) => {

        console.log("Getting Top Artists!!!");

        const ENDPOINT = "https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=100";
        let errorCode = 0;
        
        axios.get(ENDPOINT, {
            headers: {
                Authorization: "Bearer " + token.access_token,
            }
        })
        .then((response) => {
            if (response.status === 200) { // check for errors
                return response.data;
            }
            else {        
                errorCode = response.status;
                throw new Error(response.status);
            }
        })
        .then((data) => {
            callback(data)
        })
        .catch((error) => {
            console.log(error);
            errorCallback();
        });

    },

    getRecommendations: (artistIDs, songIDs, callback, errorCallback) => {

        console.log("Getting Top Recommendations!!!");

        const SEED_ARTISTS = artistIDs.join(",");
        const SEED_SONGS = songIDs.join(",");
        const ENDPOINT = `https://api.spotify.com/v1/recommendations?limit=10&seed_artists=${SEED_ARTISTS}&seed_tracks=${SEED_SONGS}`;
        let errorCode = 0;

        axios.get(ENDPOINT, {
            headers: {
                Authorization: "Bearer " + token.access_token,
            }
        })
        .then((response) => {
            if (response.status === 200) { // check for errors
                return response.data;
            }
            else {        
                errorCode = response.status;
                throw new Error(response.status);
            }
        })
        .then((data) => {
            callback(data)
        })
        .catch((error) => {
            console.log(error);
            errorCallback();
        });

    },

    getSongFeatures: (ids, callback, errorCallback) => {

        console.log("Getting Song Features!!!");
        
        const ID_PARAM = ids.join(",");
        const ENDPOINT = `https://api.spotify.com/v1/audio-features?ids=${ID_PARAM}`;
        let errorCode = 0;

        axios.get(ENDPOINT, {
            headers: {
                Authorization: "Bearer " + token.access_token,
            }
        })
        .then((response) => {
            if (response.status === 200) { // check for errors
                return response.data;
            }
            else {        
                errorCode = response.status;
                throw new Error(response.status);
            }
        })
        .then((data) => {
            callback(data)
        })
        .catch((error) => {
            console.log(error);
            errorCallback();
        });
    },

}

export default requests;