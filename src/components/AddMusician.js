import React, { Component } from 'react';
import axios from 'axios';

export class AddMusician extends Component {
    state = {
        name: '',
        year: '',
        genre: '',
        album: '',
        concert: '',
        uri: `http://145.24.222.48:8000/api/musicians`
    }

    onSubmit = (e) => {
        console.log('Submitting musician...')
        let bodyJSON = {name: this.state.name, year: this.state.year, genre: this.state.genre, album: this.state.album, concert: this.state.concert}

        e.preventDefault();
        console.log(bodyJSON)

        axios.post((this.state.uri), bodyJSON, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            } 
        })
        .catch(err => console.log(err)) 
        .then(console.log(`Added new musician! ${this.state.uri}`))
        .then(alert("A new musican has been added"))
    }

    onNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    };
    onYearChange = (e) => {
        this.setState({
            year: e.target.value
        });
    };  
    onGenreChange = (e) => {
        this.setState({
            genre: e.target.value
        });
    };
    onAlbumChange = (e) => {
        this.setState({
            album: e.target.value
        });
    }; 
    onConcertChange = (e) => {
        this.setState({
            concert: e.target.value
        });
    };    

    // onConcertChange = (e) => this.setState({[e.target.concert]: e.target.value});

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <label>Name Musician
                    <input type="text" name="name" placeholder="Name..." value={ this.state.name } onChange={this.onNameChange} style={ inputStyle }/>
                </label>

                <label>Year of origin
                    <input type="text" name="year" placeholder="Year..." value={ this.state.year } onChange={this.onYearChange} style={ inputStyle }/>
                </label>

                <label>Music genre
                    <input type="text" name="genre" placeholder="Genre.." value={ this.state.genre } onChange={this.onGenreChange} style={ inputStyle }/>
                </label>

                <label>Best known album
                    <input type="text" name="album" placeholder="Album..." value={ this.state.album } onChange={this.onAlbumChange} style={ inputStyle }/>
                </label>

                <label>Best known live performance
                    <input type="text" name="concert" placeholder="Concert..." value={ this.state.concert } onChange={this.onConcertChange} style={ inputStyle }/>
                </label>

                <input type="submit" value="Submit" style={ addStyle }/>
            </form>
        )
    }
}

const addStyle = {
    border: 'none',
    textAlign: 'center',
    textDecoration: 'none',
    padding: '8px 25px',
    borderRadius: '5px',
    backgroundColor: '#00008B',
    color: '#f2f2f2',
    flex: '1'
}

const inputStyle = {
    flex: '10',
    padding: '5px'
}

export default AddMusician