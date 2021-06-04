import React, { Component } from 'react'
import Sprite from './PokeSpriteComponent'

const HomeComponent = (props) => {
    
        const { pokemon, handleChange, resetSearch } = props
        if(pokemon){
            return (
                <div>
                    <h2>Home</h2>
                    <div>
                        <form onSubmit={resetSearch}>
                            <input 
                                type="text"
                                onChange={handleChange}
                                placeholder="Search"/>
                            <button 
                                type="submit"
                                value="Reset"
                                >Reset</button>
                        </form>
                    </div>
                    <div className="poke-field">
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