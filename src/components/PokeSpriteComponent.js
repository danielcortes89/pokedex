import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const PokeSpriteComponent = (props) => {
    const [pokeSprite, setPokeSprite] =  useState('blank')

    const getSprite = async () => {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}/`)
            // console.log(res.data.id)


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
        <Link to={`/single/${props.name}`} className="poke-sprite" className="col-11 col-md-4 col-lg-3 p-1 flex justify-content-center align-items-center">
            <p className="text-center m-0">{props.name}</p>
            {pokeSprite !== 'blank' &&
            <img src={pokeSprite} alt="Sprite of pokemon" className="poke-sprite-img"/>
            }
        </Link>
    )
}

export default PokeSpriteComponent