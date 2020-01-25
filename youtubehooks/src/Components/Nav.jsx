import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {

    const navStyle = {
        color: 'white'
    }

    return (
        <nav>
            <h3>Youtube API Fun</h3>
            <ul className='nav-links'>
                <Link style={navStyle} to="/"><strong><li>Home</li></strong></Link>
                <Link style={navStyle} to='/about'><strong><li>About</li></strong></Link>
            </ul>
        </nav>
    );
}

export default Nav;