import React, { Component } from 'react';
import '../styles/topsongs.css';
import Carousel from 'react-bootstrap/Carousel';
// import { Radar } from 'react-chartjs-2';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, FunnelChart, Tooltip, Funnel, LabelList } from 'recharts';

const Graphs = (props) => {

    const radarData = [
        {
            subject: 'Acousticness',
            A: props.songFeatures.acousticness,
        },
        {
            subject: 'Danceability',
            A: props.songFeatures.danceability,
        },
        {
            subject: 'Energy',
            A: props.songFeatures.energy,
        },
        {
            subject: 'Instrumentalness',
            A: props.songFeatures.instrumentalness,
        },
        {
            subject: 'Liveness',
            A: props.songFeatures.liveness,
        },
        {
            subject: 'Valence',
            A: props.songFeatures.valence,
        },
        {
            subject: 'Speechiness',
            A: props.songFeatures.speechiness,
        },
    ];


    const funnelData = [
        {
          "value": props.songFeatures.maxDuration,
          "name": "Max Duration",
          "fill": "#FC766AFF",
          "fillOpacity": "0.6"
        },
        {
          "value": props.songFeatures.avgDuration,
          "name": "Average Duration",
          "fill": "#B0B8B4FF",
          "fillOpacity": "0.6"
        },
        {
          "value": props.songFeatures.minDuration,
          "name": "Min Duration",
          "fill": "#184A45FF",
          "fillOpacity": "0.6"
        }
      ]

    const songListStyle = {
      color: "#fff",
      width: "100%",
      background: "linear-gradient(#000000 0%, #0f6c30 40%, #1ed760 100%)",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "70px",
    }

    const graphStyle = {
      width: "700px",
      height:"500px",
      margin: "auto",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh'
    }

    return (
        <div style={songListStyle}>
            {console.log(props.songFeatures)}
            <div style={graphStyle}>
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" stroke="#fff" />
                        <PolarRadiusAxis angle={38.6} domain={[0, 1]} />
                        <Radar name="Features" dataKey="A" stroke="#fff" fill="#fff" fillOpacity={0.4} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>

            <div style={graphStyle}>
                <ResponsiveContainer width="100%" height="100%">
                    <FunnelChart width={730} height={250}>
                        <Tooltip />
                        <Funnel
                            dataKey="value"
                            data={funnelData}
                            isAnimationActive
                        >
                            <LabelList position="right" fill="white" stroke="none" dataKey="name" />
                        </Funnel>
                    </FunnelChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default Graphs;