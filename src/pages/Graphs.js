import React, { useState, useEffect } from 'react';
import '../styles/topsongs.css';
import '../styles/graph.css';
// import { Radar } from 'react-chartjs-2';
import { Treemap, BarChart, Bar, CartesianGrid, XAxis, YAxis, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, LabelList, PieChart, Pie, Sector, Cell,RadialBarChart, RadialBar, Legend } from 'recharts';
import DonutPieChart from '../components/graphs/DonutPieChart';
import VisibilitySensor from 'react-visibility-sensor';


const Graphs = (props) => {

    const [visibility, setVisibility] = useState(false);
    const [treeMapArray, setTreeMapArray] = useState([]);

    useEffect(() => {
        if (props.treeMapData !== null) {
            let children = [];
            for (const key in props.treeMapData) {
                children.push({name: ""+ key, size: props.treeMapData[key]});
            }
            setTreeMapArray(children);
        }
    }, []);

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
        { name: 'largo', value: props.tempo.largo, fill: '#581845' },
        { name: 'adante', value: props.tempo.adante, fill: '#900C3F' },
        { name: 'moderato', value: props.tempo.moderato, fill: '#C70039' },
        { name: 'allegro', value: props.tempo.allegro, fill: '#FF5733' },
        { name: 'presto', value: props.tempo.presto, fill: '#FFC300' },
    ];

    const treeData = [
        {
          name: "Artists",
          children: treeMapArray
        }
      ];

    const graphStyle = {
      width: "700px",
      height:"500px",
      margin: "auto",
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh',
      borderStyle: "dotted",
    }

    return (

        <div class="banner">
            <div class="container banner-align">
                
                <div class="banner-hero">
                    <VisibilitySensor
                        onChange={(isVisible) => {
                        isVisible ? setTestData(radarData) : setTestData(dummyRadarData)
                        setVisibility(isVisible)
                        console.log(document.getElementById("testingDiv"));
                        }}
                        // containment={document.getElementById("testingDiv")}  
                        partialVisibility={true}
                        // offset={{ top: 450, bottom: 800 }}
                        offset={{ top: 450, }}
                        // offset={{ top: "0%", bottom: "0%"}}
                    >
                        <div style={graphStyle}>
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
                </div>

                <div class="banner-hero">
                    <div style={graphStyle}>
                        <h2 style={{textAlign:"center"}}>Time Signatures</h2>
                        <h5 style={{textAlign:"center", color: "#C8C8C8"}}>See what your top time signatures are.</h5>
                        <ResponsiveContainer width="100%" height="100%">
                            <DonutPieChart
                            timeSignatures={props.songFeatures.timeSignatures}
                            />
                        </ResponsiveContainer>
                    </div>
                </div>

                <div class="banner-hero">
                    <div style={graphStyle}>
                        <h2 style={{textAlign:"center"}}>Tempo</h2>
                        <h5 style={{textAlign:"center", color: "#C8C8C8"}}>View your favorite tempos.</h5>
                        <ResponsiveContainer width="100%" height="80%">
                            <BarChart width={700} height={500} data={halfPieData}>
                                <Bar dataKey="value" fill="#8884d8" />
                                <Tooltip />
                                <XAxis dataKey="name" />
                                <YAxis />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div class="banner-hero">
                    <div style={graphStyle}>
                        <h2 style={{textAlign:"center"}}>Artists</h2>
                        <h5 style={{textAlign:"center", color: "#C8C8C8"}}>See which artists are in your most listened to songs.</h5>
                        <ResponsiveContainer width="100%" height="80%">
                            <Treemap
                                width={700}
                                height={500}
                                data={treeData}
                                dataKey="size"
                                ratio={4 / 3}
                                stroke="#fff"
                                fill="#8884d8"
                            >
                                <Tooltip />
                            </Treemap>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>
        </div>


    
    );
}

export default Graphs;