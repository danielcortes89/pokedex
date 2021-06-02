import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/HomeComponent'
import Favorites from './components/FavoritesComponent'
import Single from './components/SinglePokemonComponent'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home}/>
          <Route exact path="/favorites" component={Favorites}/>
          <Route path="/pokemon/:pokemon" component={Single}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
