import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const PokeSpriteComponent = (props) => {
    const [pokeSprite, setPokeSprite] =  useState('blank')

    const getSprite = async () => {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}/`)
            console.log(res.data.id)


            setPokeSprite(res.data.sprites.front_default)
        } catch (error) {
            console.log(error)
            return null
        }
    }

    useEffect(() => {
        getSprite()
    })
    return (
        <Link to={`/pokemon/${props.name}`} className="poke-sprite">
            <p>{props.name}</p>
            {pokeSprite !== 'blank' &&
            <img src={pokeSprite}/>
            }
        </Link>
    )
}

export default PokeSpriteComponent