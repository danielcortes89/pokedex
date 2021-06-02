import React, { useState, useEffect }  from 'react'
import axios from 'axios'

const PokeSpriteComponent = (props) => {
    const [pokeSprite, setPokeSprite] =  useState('blank')

    const getSprite = async () => {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}/`)
            // console.log(res.data.sprites.front_default)
            setPokeSprite(res.data.sprites.front_default)
        } catch (error) {
            console.log(error)
            return null
        }
    }

    useEffect(() => {
        getSprite()
    }, [])
    return (
        <div className="poke-sprite">
            {props.name}
            {pokeSprite !== 'blank' &&
            <img src={pokeSprite}/>
            }
        </div>
    )
}

export default PokeSpriteComponent