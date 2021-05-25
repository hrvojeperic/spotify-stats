import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './components/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import TopSongs from './pages/TopSongs';
import TopArtists from './pages/TopArtists';
import TopGenres from './pages/TopGenres';
import Recommendations from './pages/Recommendations';
import Visuals from './pages/Visuals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Main />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Switch>
        <Route path='/top-songs' exact component={TopSongs} />
      </Switch>
      <Switch>
        <Route path='/top-artists' exact component={TopArtists} />
      </Switch>
      <Switch>
        <Route path='/top-genres' exact component={TopGenres} />
      </Switch>
      <Switch>
        <Route path='/recommendations' exact component={Recommendations} />
      </Switch>
      <Switch>
        <Route path='/visuals' exact component={Visuals} />
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
