import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import axios from 'axios'

import Home from './components/HomeComponent'
import Favorites from './components/FavoritesComponent'
import Single from './components/SinglePokemonComponent'

import './App.css';

const App = () => {
  const [kantoDex, setKantoDex] =  useState([])
  const [favorites, setfavorites] =  useState([])
  const [search, setSearch] = useState([])

  const handleChange = (e) => {
    const search = e.target.value
    const currentState = kantoDex
    
    const newState = currentState.filter(current => {
        return current.name.includes(search)
    })

    setSearch(newState)
  }

  const resetSearch = (e) => {
    // e.preventDefault()
    resetSearch(kantoDex)
  }

  const toggleFavorite = (name) => {
    // console.log( typeof name)
    if(favorites.includes(name)){
      const newFavorites = favorites.filter(favorite => favorite !== name)
      setfavorites(newFavorites)
      localStorage.setItem("favorites", newFavorites)
    } else {
      const newFavorites = favorites
      newFavorites.push(name)
      console.log(newFavorites)
      setfavorites(newFavorites)
      localStorage.setItem("favorites", newFavorites)
    }
    
  }
  
  const getKanto = async () => {

    try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=150')
        
        setKantoDex(res.data.results)
        setSearch(res.data.results)
    } catch (error) {
        console.log(error)
        return null
    }
  }

  const getFavorites = () => {
    let toStore = ["ivysaur", "squirtle"]
    let prep = JSON.stringify(toStore)

    localStorage.setItem("favorites", prep)


    const favs = localStorage.getItem("favorites")
    const update = JSON.parse(favs) 
    setfavorites(update)
  }

  useEffect(() => {
    getKanto()    
    getFavorites()
  }, [])
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Home" render={() => <Home pokemon={search} handleChange={handleChange} resetSearch={resetSearch}/>}/>
          <Route exact path="/favorites" component={Favorites}/>
          <Route path="/single/:pokemon" render={() => <Single favorites={favorites} toggleFavorite={toggleFavorite}/>} />
          <Redirect to="/home"/>
        </Switch>
      </Router>
    </div>
  );  
}

export default App;
