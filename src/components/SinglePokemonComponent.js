import React, { useState, useEffect }  from 'react'
import axios from 'axios'

const SinglePokemonComponent = (props) => {
    const [singlePokemon, setSinglePokemon] =  useState({})

    const getSprite = async () => {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.pokemon}/`)
            console.log(res.data)
            // setSinglePokemon(res)
        } catch (error) {
            console.log(error)
            return null
        }
    }

    useEffect(() => {
        getSprite()
    }, [])
    return (
        <div>
            <h2>Single Pokemon</h2>
            {props.match.params.pokemon}
        </div>
    )
}


export default SinglePokemonComponent