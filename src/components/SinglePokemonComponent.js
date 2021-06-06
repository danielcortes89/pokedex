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
                <div className="dex-body ">
                    <div className="row d-flex justify-content-between">
                        {/* READOUT */}
                        <div className="col-12 col-md-5 info-body d-flex flex-column justify-content-between p-2">

                            <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
                                <h2 className="no-marg">{props.match.params.pokemon}</h2>
                                <p className="no-marg">Height: {height}'</p>
                            </div>

                            <div>
                                <span>Types:</span>
                                <div className="row">
                                    {types.map((type, index) => {
                                        return (
                                            <span key={index} className="col-12 col-md-6 text-center">
                                                <div className={type.type.name}>{type.type.name}</div>
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>

                            <div>
                                <span>Abilities:</span>
                                <div className="row">
                                    {abilities.map((ability, index) => {
                                        return (
                                            <span key={index} className="col-12 col-md-6 text-center">
                                                <div className="dark">{ability.ability.name}</div>
                                            </span>
                                        )
                                    })}
                                </div>
                            </div> 

                            {isFavorite &&
                                <div className="text-center">
                                    <span>This is one of your favorites.</span>
                                    <button className="butn" id="btn2" onClick={() => toggleFavorite(singlePokemon)}>Remove?</button>
                                </div>
                            }    
                            {!isFavorite &&
                                <div className="text-center">
                                    <button className="butn" id="btn2" onClick={() => toggleFavorite(singlePokemon)}>Add To Favorites?</button>
                                </div>
                            } 

                        </div>

                        {/* IMAGE */}
                        <div className="img-wrapper col-12 col-md-5">
                            <div className="img-field">
                                <img src={pokeSprite} alt="Sprite of Pokemon"/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="stats mt-3">
                        <table >
                            <tr className="row text-center">
                                {baseStats.map(stat => {
                                    return (
                                        <th className="col-2">{stat.stat.name}</th>
                                    )
                                })}
                            </tr>
                            <tr className="row text-center">
                                {baseStats.map(stat => {
                                    return (
                                        <th className="col-2">{stat.base_stat}</th>
                                    )
                                })}
                            </tr>
                        </table>
                    </div>
                </div>
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

