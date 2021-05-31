import React, { useState, useEffect } from 'react';
import '../styles/topsongs.css';
import '../styles/graph.css';
// import { Radar } from 'react-chartjs-2';
import { Treemap, BarChart, Bar, CartesianGrid, XAxis, YAxis, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, LabelList, PieChart, Pie, Sector, Cell,RadialBarChart, RadialBar, Legend } from 'recharts';
import VisibilitySensor from 'react-visibility-sensor';


const Graphs = (props) => {

    const [visibility, setVisibility] = useState(false);
    const [barChartVisibility, setBarChartVisibility] = useState(false);
    const [pieChartVisibility, setPieChartVisibility] = useState(false);
    const [treeMapArray, setTreeMapArray] = useState([]);

    const [test, setTest] = useState([]);

    const [actualRadarData, setActualRadarData] = useState([
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

    const [actualBarData, setActualBarData] = useState([
        { name: 'largo', value: 0, fill: '#581845' },
        { name: 'adante', value: 0, fill: '#900C3F' },
        { name: 'moderato', value: 0, fill: '#C70039' },
        { name: 'allegro', value: 0, fill: '#FF5733' },
        { name: 'presto', value: 0, fill: '#FFC300' },
    ]);

    const dummyBarData = [
        { name: 'largo', value: 0, fill: '#581845' },
        { name: 'adante', value: 0, fill: '#900C3F' },
        { name: 'moderato', value: 0, fill: '#C70039' },
        { name: 'allegro', value: 0, fill: '#FF5733' },
        { name: 'presto', value: 0, fill: '#FFC300' },
    ];

    const barData = [
        { name: 'largo', value: props.tempo.largo, fill: '#581845' },
        { name: 'adante', value: props.tempo.adante, fill: '#900C3F' },
        { name: 'moderato', value: props.tempo.moderato, fill: '#C70039' },
        { name: 'allegro', value: props.tempo.allegro, fill: '#FF5733' },
        { name: 'presto', value: props.tempo.presto, fill: '#FFC300' },
    ];

    const [actualPieData, setActualPieData] = useState([]);


    const [dummyPieData, setDummyPieData] = useState([]);

    let pieData = [
        
    ]

    const treeData = [
        {
          name: "Artists",
          children: treeMapArray
        }
    ];

    useEffect(() => {
        if (props.treeMapData !== null) {
            let children = [];
            for (const key in props.treeMapData) {
                children.push({name: ""+ key, size: props.treeMapData[key]});
            }
            setTreeMapArray(children);
        }
        if (props.songFeatures.timeSignatures !== null) {
            let timeSignatureData = []
            let fakeData = [];
            for (const key in props.songFeatures.timeSignatures) {
                timeSignatureData.push({name: ""+ key, value: props.songFeatures.timeSignatures[key]});
                fakeData.push({name: ""+ key, value: 100});
            }
            setActualPieData(fakeData);
            setDummyPieData(fakeData); 
            setTest(timeSignatureData);
        }
    }, []);

    const graphStyle = {
    //   width: "700px",
    //   height:"500px",
      width: "90vh",
      height:"90vh",
      margin: "auto",
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh',
    //   borderStyle: "dotted",
    }

    const titleStyle = {
        paddingBottom: "20px"
    }



    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (

        <div class="banner">
            <div class="container banner-align">
                
                {/* radar chart */}
                <div class="banner-hero">
                    <VisibilitySensor
                        onChange={(isVisible) => {
                        isVisible ? setActualRadarData(radarData) : setActualRadarData(dummyRadarData)
                        setVisibility(isVisible)
                        }}
                        // containment={document.getElementById("testingDiv")}  
                        partialVisibility={true}
                        // offset={{ top: 450, bottom: 800 }}
                        offset={{ top: 450, }}
                        // offset={{ top: "0%", bottom: "0%"}}
                    >
                        <div style={graphStyle}>
                            <h2 style={{textAlign:"center"}}>Features</h2>
                            <h5 style={{textAlign:"center", color: "#C8C8C8"}}>Based on your top 50 songs.</h5>
                            <ResponsiveContainer width="100%" height="100%" >
                                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={actualRadarData}> 
                                    <PolarGrid />
                                    <PolarAngleAxis dataKey="subject" stroke="#fff" />
                                    <PolarRadiusAxis angle={38.6} domain={[0, 1]} />
                                    <Radar name="Features" dataKey="A" stroke="#fff" fill="#fff" fillOpacity={0.4}   />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                    </VisibilitySensor>
                </div>
                
                {/* pie chart
                <div class="banner-hero">
                <VisibilitySensor
                        onChange={(isVisible) => {
                        console.log("PIECHART: " + isVisible);
                        console.log("DUMMY: ");
                        console.log(dummyPieData);
                        console.log("ACTUAL: ");
                        console.log(actualPieData);
                        console.log("PIEDATA: ");
                        console.log(test);
                        isVisible ? setActualPieData(test) : setActualPieData(dummyPieData)
                        setPieChartVisibility(isVisible)
                        // console.log(actualPieData);
                        }}
                        // containment={document.getElementById("testingDiv")}  
                        partialVisibility={true}
                        isAnimationActive={false}
                        // offset={{ top: 450, bottom: 800 }}
                        offset={{ top: 450, }}
                        // offset={{ top: "0%", bottom: "0%"}}
                    >
                    <div style={graphStyle}>
                        <div style={titleStyle}>
                            <h2 style={{textAlign:"center"}}>Time Signatures</h2>
                            <h5 style={{textAlign:"center", color: "#C8C8C8"}}>See what your top time signatures are.</h5>
                        </div>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={700} height={500}>
                            <Pie
                                data={actualPieData}
                                cx="50%"
                                cy="30%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius="50%"
                                fill="#8884d8"
                                dataKey="value"
                                animationDuration={4000}
                                isAnimationActive={true}
                            >
                                {actualPieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    </VisibilitySensor>
                </div> */}
                
                {/* bar chart */}
                <div class="banner-hero">
                    <VisibilitySensor
                        onChange={(isVisible) => {
                        isVisible ? setActualBarData(barData) : setActualBarData(dummyBarData)
                        setBarChartVisibility(isVisible)
                        }}
                        partialVisibility={true}
                        offset={{ top: 450, }}
                    >
                        <div style={graphStyle}>
                            <div style={titleStyle}>
                                <h2 style={{textAlign:"center"}}>Tempo</h2>
                                <h5 style={{textAlign:"center", color: "#C8C8C8"}}>View your favorite tempos.</h5>
                            </div>
                            <ResponsiveContainer width="100%" height="80%">
                                <BarChart width={700} height={500} data={actualBarData}>
                                    <Bar dataKey="value" fill="#8884d8" />
                                    
                                    <XAxis dataKey="name" stroke="white" />
                                    <YAxis stroke="white" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </VisibilitySensor>
                </div>
                
                {/* tree chart */}
                <div class="banner-hero">
                    <div style={graphStyle}>
                        <div style={titleStyle}>
                            <h2 style={{textAlign:"center"}}>Artists</h2>
                            <h5 style={{textAlign:"center", color: "#C8C8C8"}}>See which artists produce your most listened to songs.</h5>
                        </div>
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
                            <Tooltip separator="" formatter={(value, unknown, data) => data.payload.name + " : " + value + ((value > 1) ? " songs" : " song") }/>
                            </Treemap>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>
        </div>


    
    );
}

export default Graphs;