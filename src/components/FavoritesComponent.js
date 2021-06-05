import React, { Component } from 'react'
import Sprite from './PokeSpriteComponent'
import { withRouter } from 'react-router-dom'

const FavoritesComponent = (props) => {
    const { favorites } = props
    if(favorites){
        return (
            <div>
                <h2>Favorites</h2>
                <div className="poke-field">
                {favorites.map((favorite, index) =>{
                    return <Sprite name={favorite} key={index}/>
                })}
                </div>
            </div>
        )
    } else {
        return <div>
            <h2>No favorites</h2>
        </div>
    }
}

export default withRouter(FavoritesComponent)