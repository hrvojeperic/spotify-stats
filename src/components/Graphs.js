import React, { Component, useState } from 'react';
import '../styles/topsongs.css';
import Carousel from 'react-bootstrap/Carousel';
// import { Radar } from 'react-chartjs-2';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, FunnelChart, Tooltip, Funnel, LabelList, PieChart, Pie, Sector, Cell,RadialBarChart, RadialBar, Legend } from 'recharts';
import DonutPieChart from './graphs/DonutPieChart';
import VisibilitySensor from 'react-visibility-sensor';

const Graphs = (props) => {

    const [visibility, setVisibility] = useState(false);

    const [testData, setTestData] = useState([
        {
            subject: 'Acousticness',
            A: 0,
        },
        {
            subject: 'Danceability',
            A: 0,
        },
        {
            subject: 'Energy',
            A: 0,
        },
        {
            subject: 'Instrumentalness',
            A: 0,
        },
        {
            subject: 'Liveness',
            A: 0,
        },
        {
            subject: 'Valence',
            A: 0,
        },
        {
            subject: 'Speechiness',
            A: 0,
        },
    ]);

    let dummyRadarData = [
        {
            subject: 'Acousticness',
            A: 0,
        },
        {
            subject: 'Danceability',
            A: 0,
        },
        {
            subject: 'Energy',
            A: 0,
        },
        {
            subject: 'Instrumentalness',
            A: 0,
        },
        {
            subject: 'Liveness',
            A: 0,
        },
        {
            subject: 'Valence',
            A: 0,
        },
        {
            subject: 'Speechiness',
            A: 0,
        },
    ];

    let radarData = [
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

    const halfPieData = [
        { name: 'largo', value: props.tempo.largo, fill: '#8884d8' },
        { name: 'adante', value: props.tempo.adante, fill: '#83a6ed' },
        { name: 'moderato', value: props.tempo.moderato, fill: '#8dd1e1' },
        { name: 'allegro', value: props.tempo.allegro, fill: '#82ca9d' },
        { name: 'presto', value: props.tempo.presto, fill: '#a4de6c' },
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
      height: '90vh',
      borderStyle: "dotted"
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

    const style = {
        lineHeight: "24px"
      };

    return (
        <div style={songListStyle}>

            <VisibilitySensor
                onChange={(isVisible) => {
                    isVisible ? setTestData(radarData) : setTestData(dummyRadarData)
                    setVisibility(isVisible)
                    console.log(document.getElementById("testingDiv"));
                }}
                // containment={document.getElementById("testingDiv")}  
                partialVisibility={true}
                // offset={{ top: 450, bottom: 800 }}
                offset={{ top: 450, bottom: 800 }}
                // offset={{ top: "0%", bottom: "0%"}}
            >   
                <div id="testingDiv" style={graphStyle}>
                    <h2 style={{textAlign:"center"}}>Song Features</h2>
                    <h5 style={{textAlign:"center", color: "#C8C8C8"}}>Based on your top 50 songs.</h5>
                    <ResponsiveContainer width="100%" height="100%" >
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={testData}> 
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" stroke="#fff" />
                            <PolarRadiusAxis angle={38.6} domain={[0, 1]} />
                            <Radar name="Features" dataKey="A" stroke="#fff" fill="#fff" fillOpacity={0.4}  />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
            </VisibilitySensor>

                {/* <ResponsiveContainer width="100%" height="100%">
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
                        label
                    />
                    <Tooltip />
                    </PieChart>
                </ResponsiveContainer> */}
            <div id="testingDiv" style={graphStyle}>
            <div style={style}>
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                    width={500}
                    height={500}
                    cx={150}
                    cy={150}
                    innerRadius={20}
                    outerRadius={140}
                    barSize={10}
                    data={halfPieData}
                    >
                    <RadialBar
                        minAngle={15}
                        label={{ position: "insideStart", fill: "black" }}
                        background
                        clockWise
                        dataKey="value"
                    />
                    <Tooltip />
                    <Legend
                        iconSize={10}
                        width={120}
                        height={140}
                        layout="vertical"
                        verticalAlign="middle"
                        wrapperStyle={style}
                    />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
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