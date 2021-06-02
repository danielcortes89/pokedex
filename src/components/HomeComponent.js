import React, { Component } from 'react'
import Sprite from './PokeSpriteComponent'

class HomeComponent extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        const { pokemon } = this.props
        if(pokemon){
            return (
                <div>
                    <h2>Home</h2>
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
}

export default HomeComponent