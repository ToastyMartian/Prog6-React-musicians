import React from 'react'

function About() {
    return (
        <div style={ aboutStyle }>
            <h1>About Soundworld</h1>
            <p>This is the Soundworld app v1.2.0.</p> 
            <p>Here you can view a variety of music artists that I personally like to listen to, including some short info about them.</p>
        </div>
    )
}

const aboutStyle = {
    textAlign: 'center',
    padding: '10px'
}

export default About;