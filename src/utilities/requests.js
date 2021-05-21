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

}

export default requests;