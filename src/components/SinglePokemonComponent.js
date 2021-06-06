import React, { useState, useEffect }  from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import axios from 'axios'

const SinglePokemonComponent = (props) => {
    const [singlePokemon, setSinglePokemon] =  useState("")
    const [abilities, setPokemonAbilities] =  useState([])
    const [height, setPokemonHeight] =  useState(0)
    const [baseStats, setPokemonStats] =  useState([])
    const [types, setPokemonTypes] =  useState([])
    const [pokeSprite, setPokeSprite] =  useState('blank')
    const [isFavorite, setfavorites] = useState(false)
    // let pokemon = ''
   
    const getSprite = async () => {
        
        try {
            // let { pokemon } = useParams()
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.pokemon}/`)
            console.log(res.data)
            
            setSinglePokemon(res.data.name)
            setPokemonAbilities(res.data.abilities)
            setPokemonHeight(res.data.height)
            setPokemonStats(res.data.stats)
            setPokemonTypes(res.data.types)
            setPokeSprite(res.data.sprites.front_default)

            const favCheck = props.favorites.filter(favorite => {
                return res.data.name === favorite
            })

            if(favCheck.length > 0){
                setfavorites(true)
            }
        } catch (error) {
            console.log(error)
            return null
        }
    }

    useEffect(() => {
        getSprite()
    }, {})

    const toggleFavorite = (name) => {
        props.toggleFavorite(name)
        props.history.push('/home')
    }

    if(singlePokemon){
        return (
            <div className="container">
                <h1>{props.match.params.pokemon}</h1>
                <div>
                    <p>Abilities:</p>
                    {abilities.map((ability, index) => {
                        return <div key={index}>
                            <p>{ability.ability.name}</p>
                        </div>
                    })}
                </div>
                <div>
                    <p>Height: {height}</p>
                </div>
                <div>
                    <ul>
                        {baseStats.map(stat => {
                            return <li>
                                {stat.stat.name}: {stat.base_stat}
                                </li>
                        })}
                    </ul>
                </div>
                <div>
                    <p>Types:</p>
                    {types.map((type, index) => {
                        return <div key={index}>
                            <p>{type.type.name}</p>
                        </div>
                    })}
                </div>
                <div>
                    <img src={pokeSprite} alt="Sprite of Pokemon"/>
                </div>
                {isFavorite &&
                    <div>
                        <span>This is one of your favorites.</span>
                        <button onClick={() => toggleFavorite(singlePokemon)}>Remove?</button>
                    </div>
                }    
                {!isFavorite &&
                    <div>
                        <button onClick={() => toggleFavorite(singlePokemon)}>Add To Favorites</button>
                    </div>
                }             
                
            </div>
        )
    } else {
        return (
            <div>
                <h2>No result</h2>
            </div>
        )
    }
    
}


export default withRouter(SinglePokemonComponent)