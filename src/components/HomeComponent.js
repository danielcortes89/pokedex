import React, { Component } from 'react'

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
                            return <div className="poke-sprite" key={index}>
                                <span>{poke.name}</span>
                            </div>
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