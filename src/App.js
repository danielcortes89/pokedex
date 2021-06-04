import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'

import Home from './components/HomeComponent'
import Favorites from './components/FavoritesComponent'
import Single from './components/SinglePokemonComponent'



import './App.css';

const App = () => {
  const [kantoDex, setKantoDex] =  useState([])
  const [favorites, setfavorties] =  useState([])
  
  const getKanto = async () => {

    try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=150')
        // console.log(res.data.results)
        setKantoDex(res.data.results)
    } catch (error) {
        console.log(error)
        return null
    }
  }

  const getFavorites = () => {
    let toStore = ["Ivysaur", "Squirtle"]
    let prep = JSON.stringify(toStore)

    localStorage.setItem("favorites", prep)


    const favs = localStorage.getItem("favorites")
    const update = JSON.parse(favs) 
    setfavorties(update)
  }

  useEffect(() => {
    getKanto()    
    getFavorites()
  }, [])
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Home" render={() => <Home pokemon={kantoDex}/>}/>
          <Route exact path="/favorites" component={Favorites}/>
          <Route path="/pokemon/:pokemon" component={Single} />
          <Redirect to="/home"/>
        </Switch>
      </Router>
    </div>
  );  
}

export default App;
