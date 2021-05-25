import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import TopSongs from './pages/TopSongs';
import TopArtists from './pages/TopArtists';
import TopGenres from './pages/TopGenres';
import Recommendations from './pages/Recommendations';
import Visuals from './pages/Visuals';

function App() {
  return (
    <div>
       <Main></Main>
    </div>
  );
}

export default App;
