(this["webpackJsonpspotify-stats"]=this["webpackJsonpspotify-stats"]||[]).push([[0],{150:function(t,e,n){},239:function(t,e,n){},240:function(t,e,n){},241:function(t,e,n){},247:function(t,e,n){},413:function(t,e,n){"use strict";n.r(e);var s,a,i,o,r,c,l=n(0),d=n.n(l),u=n(64),p=n.n(u),h=(n(239),n(240),n(37)),g=n(17),m=n(197),j=n(198),f=n(199),b=n(229),x=(n(241),n.p+"static/media/spotify_logo.21441016.png"),y=n(2),O=function(t){return Object(y.jsx)("div",{style:{color:"#fff",width:"100%",background:"linear-gradient(#000000 0%, #0f6c30 100%)",height:"100vh",margin:"auto",position:"absolute"},children:Object(y.jsxs)("div",{style:{position:"relative",top:"50%",transform:"translateY(-50%)"},children:[Object(y.jsxs)("div",{style:{width:"100%",alignItems:"center",justifyContent:"center",textAlign:"center"},children:[Object(y.jsx)("h1",{style:{fontSize:"100px",color:"white",display:"inline"},children:"Spotify"}),Object(y.jsx)("h1",{style:{fontSize:"100px",color:"#1DB954",display:"inline"},children:"Stats"})]}),Object(y.jsx)("div",{style:{display:"flex",justifyContent:"center",paddingTop:"50px"},children:Object(y.jsxs)("button",{className:"button",onClick:t.login,children:[Object(y.jsx)("img",{style:{width:"35px",height:"30px",paddingRight:"5px"},src:x,alt:"Spotify Icon"}),Object(y.jsx)("span",{style:{verticalAlign:"middle"},children:"Get Started"})]})}),Object(y.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"center",paddingTop:"50px"},children:[t.isSignOut?Object(y.jsx)("h3",{style:{color:"#C8C8C8"},children:"Successfully Signed Out"}):null,t.isNoData?Object(y.jsx)("h3",{style:{color:"#C8C8C8"},children:"Insufficient data in your spotify account."}):null]})]})})},v=n(82),S=n(18),w=n(57),A=n(58),C=n(228),k=A.a.nav(s||(s=Object(w.a)(["\n  background: #000;\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem calc((100vw - 1000px) / 2);\n  z-index: 10;\n"]))),T=Object(A.a)(v.b)(a||(a=Object(w.a)(["\n  color: #fff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n  &.active {\n    color: #1DB954;\n  }\n  &:hover {\n    color: #1DB954;\n    text-decoration: none;\n  }\n"]))),F=Object(A.a)(C.a)(i||(i=Object(w.a)(["\n  display: none;\n  color: #fff;\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 75%);\n    font-size: 1.8rem;\n    cursor: pointer;\n  }\n"]))),I=A.a.div(o||(o=Object(w.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: -24px;\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),D=A.a.nav(r||(r=Object(w.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 24px;\n  \n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),_=Object(A.a)(v.b)(c||(c=Object(w.a)(["\n  border-radius: 4px;\n  background: #1DB954;\n  padding: 10px 22px;\n  color: #fff;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n  margin-left: 24px;\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: #fff;\n    color: #010606;\n    text-decoration: none;\n  }\n"]))),R=function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(k,{children:[Object(y.jsxs)(T,{to:"/spotify-stats/",children:[Object(y.jsx)("h1",{style:{fontSize:"30px",color:"white",display:"inline"},children:"Spotify"}),Object(y.jsx)("h1",{style:{fontSize:"30px",color:"#1DB954",display:"inline"},children:"Stats"})]}),Object(y.jsx)(F,{}),Object(y.jsxs)(I,{children:[Object(y.jsx)(T,{to:"/spotify-stats/top-songs",activeStyle:!0,children:"Top Songs"}),Object(y.jsx)(T,{to:"/spotify-stats/top-artists",activeStyle:!0,children:"Top Artists"}),Object(y.jsx)(T,{to:"/spotify-stats/top-genres",activeStyle:!0,children:"Top Genres"}),Object(y.jsx)(T,{to:"/spotify-stats/recommendations",activeStyle:!0,children:"Recommendations"}),Object(y.jsx)(T,{to:"/spotify-stats/visuals",activeStyle:!0,children:"Visuals"})]}),Object(y.jsx)(D,{children:Object(y.jsx)(_,{to:"/spotify-stats/sign-out",children:"Sign Out"})})]})})},N=function(t){return Object(y.jsx)("div",{style:{color:"#fff",width:"100%",background:"linear-gradient(#000000 0%, #0f6c30 40%, #1ed760 100%)",height:"100vh",margin:"auto",position:"absolute"},children:Object(y.jsxs)("div",{style:{display:"flex",fontFamily:"Montserrat, sans-serif",margin:"0rem",height:"25vh",justifyContent:"center",position:"relative",top:"50%",transform:"translateY(-50%)"},children:[Object(y.jsx)("div",{style:{width:"30vw",paddingRight:"50px",textAlign:"right"},children:Object(y.jsx)("img",{src:t.userImage,alt:"Profile",style:{background:"gray",width:"150px",height:"150px",borderRadius:"50%",border:"none"}})}),Object(y.jsxs)("div",{style:{marginLeft:"0%",marginTop:"3%",width:"30vw"},children:[Object(y.jsx)("h3",{children:t.userName}),Object(y.jsxs)("h3",{style:{color:"#C8C8C8"},children:["Followers - ",t.followers]})]})]})})},B=(n(150),function(t){var e={display:"flex",fontFamily:"Montserrat, sans-serif",margin:"0rem",minHeight:"25vh",justifyContent:"center",paddingTop:"20px",paddingBottom:"20px"},n={width:"30vw",paddingRight:"50px",textAlign:"right",position:"relative",display:"inline-flex"},s={width:"30vw",paddingRight:"50px",textAlign:"left",display:"flex",justifyContent:"center",alignContent:"center",flexDirection:"column"},a={background:"gray",width:"150px",height:"150px",borderRadius:"50%",backgroundColor:"black"},i={marginLeft:"auto",marginTop:"auto",marginBottom:"auto"},o={color:"#C8C8C8"};return Object(y.jsx)("div",{style:{color:"#fff",width:"100%",background:"linear-gradient(#000000 0%, #0f6c30 40%, #1ed760 100%)",alignItems:"center",justifyContent:"center",paddingTop:"70px",paddingBottom:"70px"},children:Object(h.a)(Array(10)).map((function(r,c){return Object(y.jsxs)("div",{style:e,children:[Object(y.jsx)("div",{style:n,children:Object(y.jsx)("div",{style:i,children:Object(y.jsx)("img",{src:t.topSongImages[c],alt:"artist",style:a})})}),Object(y.jsxs)("div",{style:s,children:[Object(y.jsx)("h3",{children:t.topSongNames[c]}),Object(y.jsxs)("h3",{style:o,children:["By ",t.topSongArtistName[c]]})]})]},c)}))})}),M=function(t){var e={display:"flex",fontFamily:"Montserrat, sans-serif",margin:"0rem",minHeight:"25vh",justifyContent:"center",paddingTop:"20px",paddingBottom:"20px"},n={width:"30vw",paddingRight:"50px",textAlign:"right",position:"relative",display:"inline-flex"},s={width:"30vw",paddingRight:"50px",textAlign:"left",display:"flex",justifyContent:"center",alignContent:"center",flexDirection:"column"},a={background:"gray",width:"150px",height:"150px",borderRadius:"50%"},i={marginLeft:"auto",marginTop:"auto",marginBottom:"auto"},o={color:"#C8C8C8"};return Object(y.jsx)("div",{style:{color:"#fff",width:"100%",background:"linear-gradient(#000000 0%, #0f6c30 40%, #1ed760 100%)",alignItems:"center",justifyContent:"center",paddingTop:"70px",paddingBottom:"70px"},children:Object(h.a)(Array(10)).map((function(r,c){return Object(y.jsxs)("div",{style:e,children:[Object(y.jsx)("div",{style:n,children:Object(y.jsx)("div",{style:i,children:Object(y.jsx)("img",{src:t.topArtistImages[c],alt:"artist",style:a})})}),Object(y.jsxs)("div",{style:s,children:[Object(y.jsx)("h3",{children:t.topArtistNames[c]}),Object(y.jsxs)("h3",{style:o,children:["Followers - ",t.topArtistFollowers[c]]})]})]},c)}))})},G=function(t){var e={display:"flex",fontFamily:"Montserrat, sans-serif",margin:"0rem",minHeight:"25vh",justifyContent:"center"},n={marginLeft:"0%",marginTop:"3%",width:"30vw",textAlign:"center"};return Object(y.jsx)("div",{style:{color:"#fff",width:"100%",background:"linear-gradient(#000000 0%, #0f6c30 40%, #1ed760 100%)",alignItems:"center",justifyContent:"center",paddingTop:"70px",paddingBottom:"70px"},children:Object(h.a)(Array(10)).map((function(s,a){return Object(y.jsx)("div",{style:e,children:Object(y.jsx)("div",{style:n,children:Object(y.jsx)("h3",{children:t.topGenres[a]})})},a)}))})},U=function(t){var e={display:"flex",fontFamily:"Montserrat, sans-serif",margin:"0rem",minHeight:"25vh",justifyContent:"center",paddingTop:"20px",paddingBottom:"20px"},n={width:"30vw",paddingRight:"50px",textAlign:"right",position:"relative",display:"inline-flex"},s={width:"30vw",paddingRight:"50px",textAlign:"left",display:"flex",justifyContent:"center",alignContent:"center",flexDirection:"column"},a={background:"gray",width:"150px",height:"150px",borderRadius:"50%",backgroundColor:"black"},i={marginLeft:"auto",marginTop:"auto",marginBottom:"auto"},o={color:"#C8C8C8"};return Object(y.jsx)("div",{style:{color:"#fff",width:"100%",background:"linear-gradient(#000000 0%, #0f6c30 40%, #1ed760 100%)",alignItems:"center",justifyContent:"center",paddingTop:"70px",paddingBottom:"70px"},children:Object(h.a)(Array(10)).map((function(r,c){return Object(y.jsxs)("div",{style:e,children:[Object(y.jsx)("div",{style:n,children:Object(y.jsx)("div",{style:i,children:Object(y.jsx)("img",{src:t.topRecommendationsImages[c],alt:"album",style:a})})}),Object(y.jsxs)("div",{style:s,children:[Object(y.jsx)("h3",{children:t.topRecommendations[c]}),Object(y.jsxs)("h3",{style:o,children:["By ",t.topRecommendationsArtistName[c]]})]})]},c)}))})},z=n(205),L=(n(247),n(415)),P=n(416),E=n(420),V=n(220),H=n(221),K=n(218),J=n(421),Y=n(230),q=n(224),Q=n(225),W=n(423),X=n(46),Z=n(140),$=n.n(Z),tt=function(t){var e=Object(l.useState)(!1),n=Object(g.a)(e,2),s=(n[0],n[1]),a=Object(l.useState)(!1),i=Object(g.a)(a,2),o=(i[0],i[1]),r=Object(l.useState)(!1),c=Object(g.a)(r,2),d=(c[0],c[1],Object(l.useState)([])),u=Object(g.a)(d,2),p=u[0],h=u[1],m=Object(l.useState)([]),j=Object(g.a)(m,2),f=(j[0],j[1]),b=Object(l.useState)([{subject:"Acousticness",A:0},{subject:"Danceability",A:0},{subject:"Energy",A:0},{subject:"Instrumentalness",A:0},{subject:"Liveness",A:0},{subject:"Valence",A:0},{subject:"Speechiness",A:0}]),x=Object(g.a)(b,2),O=x[0],v=x[1],S=[{subject:"Acousticness",A:0},{subject:"Danceability",A:0},{subject:"Energy",A:0},{subject:"Instrumentalness",A:0},{subject:"Liveness",A:0},{subject:"Valence",A:0},{subject:"Speechiness",A:0}],w=[{subject:"Acousticness",A:t.songFeatures.acousticness},{subject:"Danceability",A:t.songFeatures.danceability},{subject:"Energy",A:t.songFeatures.energy},{subject:"Instrumentalness",A:t.songFeatures.instrumentalness},{subject:"Liveness",A:t.songFeatures.liveness},{subject:"Valence",A:t.songFeatures.valence},{subject:"Speechiness",A:t.songFeatures.speechiness}],A=Object(l.useState)([{name:"largo",value:0,fill:"#581845"},{name:"adante",value:0,fill:"#900C3F"},{name:"moderato",value:0,fill:"#C70039"},{name:"allegro",value:0,fill:"#FF5733"},{name:"presto",value:0,fill:"#FFC300"}]),C=Object(g.a)(A,2),k=C[0],T=C[1],F=[{name:"largo",value:0,fill:"#581845"},{name:"adante",value:0,fill:"#900C3F"},{name:"moderato",value:0,fill:"#C70039"},{name:"allegro",value:0,fill:"#FF5733"},{name:"presto",value:0,fill:"#FFC300"}],I=[{name:"largo",value:t.tempo.largo,fill:"#581845"},{name:"adante",value:t.tempo.adante,fill:"#900C3F"},{name:"moderato",value:t.tempo.moderato,fill:"#C70039"},{name:"allegro",value:t.tempo.allegro,fill:"#FF5733"},{name:"presto",value:t.tempo.presto,fill:"#FFC300"}],D=Object(l.useState)([]),_=Object(g.a)(D,2),R=(_[0],_[1]),N=Object(l.useState)([]),B=Object(g.a)(N,2),M=(B[0],B[1]),G=[{name:"Artists",children:p}];Object(l.useEffect)((function(){if(null!==t.treeMapData){var e=[];for(var n in t.treeMapData)e.push({name:""+n,size:t.treeMapData[n]});h(e)}if(null!==t.songFeatures.timeSignatures){var s=[],a=[];for(var i in t.songFeatures.timeSignatures)s.push({name:""+i,value:t.songFeatures.timeSignatures[i]}),a.push({name:""+i,value:100});R(a),M(a),f(s)}}),[]);var U=Object(z.a)({width:"90vh",height:"90vh",margin:"auto",justifyContent:"center",alignItems:"center"},"height","90vh"),Z={paddingBottom:"20px"};Math.PI;return Object(y.jsx)("div",{className:"banner",children:Object(y.jsxs)("div",{className:"container banner-align",children:[Object(y.jsx)("div",{className:"banner-hero",children:Object(y.jsx)($.a,{onChange:function(t){v(t?w:S),s(t)},partialVisibility:!0,offset:{top:450},children:Object(y.jsxs)("div",{style:U,children:[Object(y.jsx)("h2",{style:{textAlign:"center"},children:"Features"}),Object(y.jsx)("h5",{style:{textAlign:"center",color:"#C8C8C8"},children:"Based on your top 50 songs."}),Object(y.jsx)(L.a,{width:"100%",height:"100%",children:Object(y.jsxs)(P.a,{cx:"50%",cy:"50%",outerRadius:"80%",data:O,children:[Object(y.jsx)(E.a,{}),Object(y.jsx)(V.a,{dataKey:"subject",stroke:"#fff"}),Object(y.jsx)(H.a,{angle:38.6,domain:[0,1]}),Object(y.jsx)(K.a,{name:"Features",dataKey:"A",stroke:"#fff",fill:"#fff",fillOpacity:.4})]})})]})})}),Object(y.jsx)("div",{className:"banner-hero",children:Object(y.jsx)($.a,{onChange:function(t){T(t?I:F),o(t)},partialVisibility:!0,offset:{top:450},children:Object(y.jsxs)("div",{style:U,children:[Object(y.jsxs)("div",{style:Z,children:[Object(y.jsx)("h2",{style:{textAlign:"center"},children:"Tempo"}),Object(y.jsx)("h5",{style:{textAlign:"center",color:"#C8C8C8"},children:"View your favorite tempos."})]}),Object(y.jsx)(L.a,{width:"100%",height:"80%",children:Object(y.jsxs)(J.a,{width:700,height:500,data:k,children:[Object(y.jsx)(Y.a,{dataKey:"value",fill:"#8884d8"}),Object(y.jsx)(q.a,{dataKey:"name",stroke:"white"}),Object(y.jsx)(Q.a,{stroke:"white"})]})})]})})}),Object(y.jsx)("div",{className:"banner-hero",children:Object(y.jsxs)("div",{style:U,children:[Object(y.jsxs)("div",{style:Z,children:[Object(y.jsx)("h2",{style:{textAlign:"center"},children:"Artists"}),Object(y.jsx)("h5",{style:{textAlign:"center",color:"#C8C8C8"},children:"See which artists produce your most listened to songs."})]}),Object(y.jsx)(L.a,{width:"100%",height:"80%",children:Object(y.jsx)(W.a,{width:700,height:500,data:G,dataKey:"size",ratio:4/3,stroke:"#fff",fill:"#8884d8",children:Object(y.jsx)(X.a,{separator:"",formatter:function(t,e,n){return n.payload.name+" : "+t+(t>1?" songs":" song")}})})})]})})]})})},et=n(74),nt=n.n(et),st={getUsersProfile:function(t,e){console.log("Getting Users Profile!!!");nt.a.get("https://api.spotify.com/v1/me",{headers:{Authorization:"Bearer "+localStorage.getItem("accessToken")}}).then((function(t){if(200===t.status)return t.data;throw t.status,new Error(t.status)})).then((function(e){t(e)})).catch((function(t){console.log(t),e()}))},getTopSongs:function(t,e){console.log("Getting Top Songs!!!");nt.a.get("https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=100",{headers:{Authorization:"Bearer "+localStorage.getItem("accessToken")}}).then((function(t){if(200===t.status)return t.data;throw t.status,new Error(t.status)})).then((function(e){t(e)})).catch((function(t){console.log(t),e()}))},getTopArtists:function(t,e){console.log("Getting Top Artists!!!");nt.a.get("https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=100",{headers:{Authorization:"Bearer "+localStorage.getItem("accessToken")}}).then((function(t){if(200===t.status)return t.data;throw t.status,new Error(t.status)})).then((function(e){t(e)})).catch((function(t){console.log(t),e()}))},getRecommendations:function(t,e,n,s){console.log("Getting Top Recommendations!!!");var a=t.join(","),i=e.join(","),o="https://api.spotify.com/v1/recommendations?limit=10&seed_artists=".concat(a,"&seed_tracks=").concat(i);nt.a.get(o,{headers:{Authorization:"Bearer "+localStorage.getItem("accessToken")}}).then((function(t){if(200===t.status)return t.data;throw t.status,new Error(t.status)})).then((function(t){n(t)})).catch((function(t){console.log(t),s()}))},getSongFeatures:function(t,e,n){console.log("Getting Song Features!!!");var s=t.join(","),a="https://api.spotify.com/v1/audio-features?ids=".concat(s);nt.a.get(a,{headers:{Authorization:"Bearer "+localStorage.getItem("accessToken")}}).then((function(t){if(200===t.status)return t.data;throw t.status,new Error(t.status)})).then((function(t){e(t)})).catch((function(t){console.log(t),n()}))}},at=n.p+"static/media/default_image.84681b68.jpg",it=(n(412),function(t){Object(f.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(m.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).isSongUpdateDone=!1,t.isArtistUpdateDone=!1,t.state={visible:!0,accessToken:"",tokenType:"",expiresIn:"",data:{},isSignOut:!1,userName:"",followers:0,userImage:"",isDataRetrieved:!1,topArtistNames:[],topArtistImages:[],topArtistID:[],topArtistFollowers:[],topSongNames:[],topSongImages:[],topSongID:[],topSongArtistName:[],topGenres:[],topRecommendations:[],topRecommendationsImages:[],topRecommendationsArtistName:[],songFeatures:{},timeSignatures:{},tempo:{},treeMapData:{},isNoData:!1},t.handleLogin=function(){var t=["user-top-read","playlist-read-private"].join("%20");window.location="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("f6914647e144472a9946eba5f87d9721","&response_type=").concat("token","&show_dialog=").concat("true","&redirect_uri=").concat("https://hrvojeperic.github.io/spotify-stats/","&scope=").concat(t)},t.getParamsFromAuthentication=function(t){return t.substring(1).split("&").reduce((function(t,e){var n=e.split("="),s=Object(g.a)(n,2),a=s[0],i=s[1];return t[a]=i,t}),{})},t.handleSignout=function(){return t.setState({visible:!0,isSignOut:!0}),null},t.showUserProfile=function(){st.getUsersProfile(t._showUserProfileCallback,t._errorCallback)},t._showUserProfileCallback=function(e){var n=e.display_name,s=e.followers.total,a=at;0!==e.images.length&&(a=e.images[0].href),t.setState({userName:n,followers:s,userImage:a})},t.showTopArtists=function(){st.getTopArtists(t._showTopArtistsCallback,t._errorCallback)},t._showTopArtistsCallback=function(e){var n=[],s=[],a=[],i=[],o=[];if(0===e.items.length)t.setState({isNoData:!0});else{for(var r=0;r<e.items.length;r++)null!=e.items[r].name?n.push(e.items[r].name):n.push("Unknown"),null!=e.items[r].images&&s.push(e.items[r].images[0].url),a.push(e.items[r].id),i.push.apply(i,Object(h.a)(e.items[r].genres)),o.push(e.items[r].followers.total);var c=t.calculateTopGenres(i);t.setState({topArtistNames:n,topArtistImages:s,topArtistID:a,topArtistFollowers:o,topGenres:c},(function(){t.isArtistUpdateDone=!0,t.showRecommendations()}))}},t.showTopSongs=function(){st.getTopSongs(t._showTopSongsCallback,t._errorCallback)},t._showTopSongsCallback=function(e){var n=[],s=[],a=[],i=[];if(0===e.items.length)t.setState({isNoData:!0});else{for(var o=0;o<e.items.length;o++)null!=e.items[o].name?n.push(e.items[o].name):n.push("Unknown"),null!=e.items[o].album.images&&s.push(e.items[o].album.images[0].url),a.push(e.items[o].id),i.push(e.items[o].album.artists[0].name);t.setState({topSongNames:n,topSongImages:s,topSongID:a,topSongArtistName:i},(function(){t.isSongUpdateDone=!0,t.showRecommendations(),t.setTreeMapData(t.state.topSongArtistName)})),st.getSongFeatures(t.state.topSongID,t._showTopSongFeaturesCallback,t._errorCallback)}},t._showTopSongFeaturesCallback=function(e){for(var n=0,s=0,a=0,i=0,o=0,r=0,c=0,l=[],d=[],u=[],p=e.audio_features.length,h=0;h<p;h++)n+=e.audio_features[h].acousticness,s+=e.audio_features[h].danceability,a+=e.audio_features[h].energy,i+=e.audio_features[h].instrumentalness,o+=e.audio_features[h].liveness,r+=e.audio_features[h].valence,c+=e.audio_features[h].speechiness,l.push(e.audio_features[h].duration_ms),d.push(e.audio_features[h].time_signature),u.push(e.audio_features[h].tempo);n/=p,s/=p,a/=p,i/=p,o/=p,r/=p,c/=p;for(var g=0,m=l[0],j=l[0],f=0;f<l.length;f++)m<l[f]&&(m=l[f]),j>l[f]&&(j=l[f]),g+=l[f];m/=6e4,j/=6e4;for(var b=(g/=6e4)/l.length,x={},y=0,O=d.length;y<O;y++)x[d[y]]=(x[d[y]]||0)+1;for(var v={largo:0,adante:0,moderato:0,allegro:0,presto:0},S=0;S<u.length;S++)u[S]<=76?v.largo++:u[S]<=108?v.adante++:u[S]<=120?v.moderato++:u[S]<=168?v.allegro++:v.presto++;var w={acousticness:n,danceability:s,energy:a,instrumentalness:i,liveness:o,valence:r,speechiness:c,minDuration:j,maxDuration:m,avgDuration:b,timeSignatures:x};t.setState({songFeatures:w,tempo:v})},t.calculateTopGenres=function(t){for(var e={},n=0,s=t.length;n<s;n++)e[t[n]]=(e[t[n]]||0)+1;console.log(t);var a=[];return!(10>Object.keys(e).length)&&(Object.keys(e).sort((function(t,n){return e[n]-e[t]})).forEach((function(t,e){e<10&&a.push(t)})),console.log(a),a)},t.showRecommendations=function(){if(t.isSongUpdateDone&&t.isArtistUpdateDone){for(var e=[],n=[],s=0;s<t.state.topArtistID.length&&s<2;s++)e.push(t.state.topArtistID[s]);for(var a=0;a<t.state.topSongID.length&&a<3;a++)n.push(t.state.topSongID[a]);st.getRecommendations(e,n,t._showRecommendationsCallback,t._errorCallback)}},t._showRecommendationsCallback=function(e){var n=[],s=[],a=[];if(0===e.tracks.length)t.setState({isNoData:!0});else{for(var i=0;i<e.tracks.length;i++)n.push(e.tracks[i].name),s.push(e.tracks[i].album.images[0].url),a.push(e.tracks[i].artists[0].name);t.setState({topRecommendations:n,topRecommendationsImages:s,topRecommendationsArtistName:a})}},t._errorCallback=function(){},t.setTreeMapData=function(e){for(var n={},s=0,a=e.length;s<a;s++)n[e[s]]=(n[e[s]]||0)+1;t.setState({treeMapData:n})},t.handleHome=function(){return!1===t.state.isDataRetrieved&&(t.setState({isDataRetrieved:!0}),t.showUserProfile(),t.showTopSongs(),t.showTopArtists(),t.showRecommendations()),Object(y.jsx)(N,{userName:t.state.userName,followers:t.state.followers,userImage:t.state.userImage})},t.handleTopSongs=function(){return Object(y.jsx)(B,{topSongNames:t.state.topSongNames,topSongImages:t.state.topSongImages,topSongArtistName:t.state.topSongArtistName})},t.handleTopArtists=function(){return Object(y.jsx)(M,{topArtistNames:t.state.topArtistNames,topArtistImages:t.state.topArtistImages,topArtistFollowers:t.state.topArtistFollowers})},t.handleTopGenres=function(){return Object(y.jsx)(G,{topGenres:t.state.topGenres})},t.handleRecommendations=function(){return Object(y.jsx)(U,{topRecommendations:t.state.topRecommendations,topRecommendationsImages:t.state.topRecommendationsImages,topRecommendationsArtistName:t.state.topRecommendationsArtistName})},t.handleVisuals=function(){return Object(y.jsx)(tt,{songFeatures:t.state.songFeatures,tempo:null!=t.state.tempo?t.state.tempo:{},treeMapData:t.state.treeMapData})},t}return Object(j.a)(n,[{key:"componentDidMount",value:function(){if(window.location.hash){this.setState({visible:!1});var t=this.getParamsFromAuthentication(window.location.hash);localStorage.clear(),this.setState({accessToken:t.access_token,tokenType:t.token_type,expiresIn:t.expires_in}),localStorage.setItem("accessToken",t.access_token),localStorage.setItem("tokenType",t.token_type),localStorage.setItem("expiresIn",t.expires_in)}}},{key:"render",value:function(){var t=this;return Object(y.jsx)("div",{children:this.state.visible||this.state.isNoData?this.state.isNoData?Object(y.jsx)(O,{login:function(){return t.handleLogin()},isNoData:this.state.isNoData}):Object(y.jsx)(O,{login:function(){return t.handleLogin()},isSignOut:this.state.isSignOut}):Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(v.a,{children:[Object(y.jsx)(R,{}),Object(y.jsx)(S.c,{children:Object(y.jsx)(S.a,{path:"/spotify-stats",exact:!0,component:function(){return t.handleHome()}})}),Object(y.jsx)(S.c,{children:Object(y.jsx)(S.a,{path:"/top-songs",exact:!0,component:function(){return t.handleTopSongs()}})}),Object(y.jsx)(S.c,{children:Object(y.jsx)(S.a,{path:"/top-artists",exact:!0,component:function(){return t.handleTopArtists()}})}),Object(y.jsx)(S.c,{children:Object(y.jsx)(S.a,{path:"/top-genres",exact:!0,component:function(){return t.handleTopGenres()}})}),Object(y.jsx)(S.c,{children:Object(y.jsx)(S.a,{path:"/recommendations",exact:!0,component:function(){return t.handleRecommendations()}})}),Object(y.jsx)(S.c,{children:Object(y.jsx)(S.a,{path:"/visuals",exact:!0,component:function(){return t.handleVisuals()}})}),Object(y.jsx)(S.c,{children:Object(y.jsx)(S.a,{path:"/sign-out",exact:!0,component:function(){return t.handleSignout()}})})]})})})}}]),n}(l.Component));var ot=function(){return Object(y.jsx)("div",{children:Object(y.jsx)(it,{})})},rt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,424)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),s(t),a(t),i(t),o(t)}))};p.a.render(Object(y.jsx)(d.a.StrictMode,{children:Object(y.jsx)(ot,{})}),document.getElementById("root")),rt()}},[[413,1,2]]]);
//# sourceMappingURL=main.f3da2d3c.chunk.js.map