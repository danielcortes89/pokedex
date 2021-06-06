import React from 'react'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
    return (
        <div className="header">
            <span>
                <Link to="/home" className="mr-3">Kanto</Link>
            </span>
            <span>
                <Link to="/favorites">Favorites</Link>
            </span>
        </div>
    )
}

export default HeaderComponent;