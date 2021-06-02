import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'

import Home from './components/HomeComponent'
import Favorites from './components/FavoritesComponent'
import Single from './components/SinglePokemonComponent'

import { getKanto } from './utilities/utilities'

import './App.css';

const App = () => {
  const [kantoDex, setKantoDex] =  useState([])
  
  const getKanto = async () => {
    const holder = []

    try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=150')
        console.log(res.data.results)
        setKantoDex(res.data.results)
    } catch (error) {
        console.log(error)
        return null
    }
}

  useEffect(() => {
    getKanto()    
  }, [])
  
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
