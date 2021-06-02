import React, { Component } from 'react'
import Sprite from './PokeSpriteComponent'

class HomeComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            pokemon: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        this.setState({
            pokemon: this.props.pokemon
        })
    }

    handleChange(e){
        const search = e.target.value
        const currentState = this.state.pokemon
        
        const newState = currentState.filter(current => {
            return current.name.includes(search)
        })

        this.setState({
            pokemon: newState
        })
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({
            pokemon: this.props.pokemon
        })
    }
     
    render() {
        const { pokemon } = this.state
        if(pokemon !== []){
            return (
                <div>
                    <h2>Home</h2>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <input 
                                type="text"
                                onChange={this.handleChange}
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
}

export default HomeComponent