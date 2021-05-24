import React, { Component } from 'react';
import '../styles/topsongs.css';
import Carousel from 'react-bootstrap/Carousel';
import { Radar } from 'react-chartjs-2';

const Graphs = (props) => {

    const graphStyle = {
        width: "500px",
        height:"500px",
        margin: "auto"
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
          data: [props.songFeatures.acousticness, props.songFeatures.danceability, props.songFeatures.energy, props.songFeatures.instrumentalness, 
            props.songFeatures.liveness, props.songFeatures.valence, props.songFeatures.speechiness],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }]
      };

    const options={ 
        legend: {
            display: false,
        },
    };

    return (
        <div style={graphStyle}>
            <Radar 
                type='radar'
                data={data}
                options={options}
            />
        </div>
    );
}

export default Graphs;