import React, { Component } from 'react';
import '../styles/topsongs.css';
import Carousel from 'react-bootstrap/Carousel';
// import { Radar } from 'react-chartjs-2';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, FunnelChart, Tooltip, Funnel, LabelList, PieChart, Pie, Sector, Cell, } from 'recharts';
import DonutPieChart from './graphs/DonutPieChart';

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

    const halfPieData = [
        { name: 'Slow', value: props.tempo.slow },
        { name: 'Moderate', value: props.tempo.moderate },
        { name: 'Fast', value: props.tempo.fast },
    ];

    const pieData = [
        props.songFeatures.timeSignatures
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
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh'
    }

    const outerDiv = {
        width: "100%",
        textAlign: "center",
        justifyContent: 'center',
        display: "flex"
      }
      
    const innerDiv = {
        display: "inline-block",
        margin: "0 auto",
        padding: "3px"
    }

    return (
        <div style={songListStyle}>
            {/* {console.log(props.tempo)} */}
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
            <div style={graphStyle}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        startAngle={180}
                        endAngle={0}
                        data={halfPieData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="black"
                        fillOpacity={0.5} 
                        label
                    />
                    <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div style={outerDiv}>
                <div style={innerDiv}>
                <ResponsiveContainer width="100%" height="100%">
                    <DonutPieChart
                        timeSignatures={props.songFeatures.timeSignatures}
                    />
                </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}

export default Graphs;