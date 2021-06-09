import React, { Component } from 'react'
import Sprite from './PokeSpriteComponent'

const HomeComponent = (props) => {
    
        const { pokemon, handleChange, resetSearch } = props
        if(pokemon){
            return (
                <div className="container">
                    <h2 className="text-center">Kanto Pokedex</h2>
                    <div className="my-2">
                        <form onSubmit={resetSearch} className="search">
                            <input 
                                type="text"
                                onChange={handleChange}
                                placeholder="Search"
                                className="mr-1"/>
                            <button 
                                type="submit"
                                value="Reset"
                                id="searchBtn"
                                >Reset</button>
                        </form>
                    </div>
                    <div className="poke-field row">
                        {pokemon.map((poke, index) => {
                            return <Sprite name={poke.name} key={index}/>
                        })}
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <h3>Pokemon failed to load</h3>
                </div>
            )
        }
}

export default HomeComponent