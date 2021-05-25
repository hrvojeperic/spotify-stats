import axios from 'axios';

const requests = {
    
    // request top artists
    getTopArtists: (callback, errorCallback) => {

        const ENDPOINT = "https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=10";
        let errorCode = 0;
        
        axios.get(ENDPOINT, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("accessToken"),
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

    getUsersProfile: (callback, errorCallback) => {

        const ENDPOINT = "https://api.spotify.com/v1/me";
        let errorCode = 0;
        
        axios.get(ENDPOINT, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("accessToken"),
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

        const ENDPOINT = "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=10";
        let errorCode = 0;
        
        axios.get(ENDPOINT, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("accessToken"),
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
        
        const ID_PARAM = ids.join(",");
        const ENDPOINT = `https://api.spotify.com/v1/audio-features?ids=${ID_PARAM}`;
        let errorCode = 0;

        axios.get(ENDPOINT, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("accessToken"),
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

        const SEED_ARTISTS = artistIDs.join(",");
        const SEED_SONGS = songIDs.join(",");
        const ENDPOINT = `https://api.spotify.com/v1/recommendations?limit=10&seed_artists=${SEED_ARTISTS}&seed_tracks=${SEED_SONGS}`;
        let errorCode = 0;

        axios.get(ENDPOINT, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("accessToken"),
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