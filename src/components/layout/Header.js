import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={ headerStyle }>
            <h1>Soundworld</h1>
            <Link to='/' style={linkStyle}>Home</Link> | <Link to='/about' style={linkStyle}>About</Link>
        </header>
    )
}

const linkStyle = {
    color: '#fff'
}

const headerStyle = {
    backgroundColor: '#282424',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header;