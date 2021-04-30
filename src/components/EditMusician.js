import React, { Component } from 'react';
import axios from 'axios';

export class EditMusician extends Component {

  state = {
    name: '',
    year: '',
    genre: '',
    album: '',
    concert: '',
    uri: `http://145.24.222.48:8000/api/musicians/${this.props.match.params.id}`,
    musician: {}
  }

    componentDidMount() {
        console.log("Did mount edit")
        axios.get((this.state.uri), {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => this.setState({ musician: response.data }))
    }

    componentDidUpdate() {
        console.log("Updated form")
    }

    onSubmit(e) {
        console.log('Saving musician...')
        let bodyJSON = {name: this.state.name, year: this.state.year, genre: this.state.genre, album: this.state.album, concert: this.state.concert}

        e.preventDefault();

        axios.put((this.state.uri), bodyJSON, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .catch(err => console.log(err)) 
        .then(console.log(`Edited musician! ${this.state.uri}`))
        .then(alert("Musician has been updated"))

    }

    onNameChange(e) {
        console.log("name change!")
        if(this.state.name === '') {
            this.setState({
                name: this.state.musician.name
            })
        } else {
            this.setState({
                name: e.target.value
            });
        }
    };
    onYearChange(e) {
        console.log("year change!")
        if(this.state.year === '') {
            this.setState({
                year: this.state.musician.year
            })
        } else {
            this.setState({
                year: e.target.value
            });
        }
    };  
    onGenreChange(e) {
        console.log("genre change!")
        if(this.state.genre === '') {
            this.setState({
                genre: this.state.musician.genre
            })
        } else {
            this.setState({
                genre: e.target.value
            });
        }
    };
    onAlbumChange(e) {
        console.log("album change!")
        if(this.state.album === '') {
            this.setState({
                album: this.state.musician.album
            })
        } else {
            this.setState({
                album: e.target.value
            });
        }
    }; 
    onConcertChange(e) {
        console.log("concert change!")
        if(this.state.concert === '') {
            this.setState({
                concert: this.state.musician.concert
            })
        } else {
            this.setState({
                concert: e.target.value
            });
        }
    }; 

    render() {
        return (
            <div>
                <h1>Edit {this.state.musician.name}</h1>
                <p>Below you can edit any details for the musician</p><br></br>

                <form onSubmit={(e) => this.onSubmit(e)} style={{display: 'flex'}}>
                    <label>Name Musician
                        <input type="text" name="name" placeholder="name.." value={ this.state.name } onChange={(e) => this.onNameChange(e)} style={ inputStyle }/>
                    </label>

                    <label>Year of origin
                        <input type="text" name="year" placeholder="year.." value={ this.state.year } onChange={(e) => this.onYearChange(e)} style={ inputStyle }/>
                    </label>

                    <label>Music genre
                        <input type="text" name="genre" placeholder="genre.." value={ this.state.genre } onChange={(e) => this.onGenreChange(e)} style={ inputStyle }/>
                    </label>

                    <label>Best known album
                        <input type="text" name="album" placeholder="album.." value={ this.state.album } onChange={(e) => this.onAlbumChange(e)} style={ inputStyle }/>
                    </label>

                    <label>Best known live performance
                        <input type="text" name="concert" placeholder="concert.." value={ this.state.concert } onChange={(e) => this.onConcertChange(e)} style={ inputStyle }/>
                    </label>

                    <input type="submit" value="Submit" style={ editStyle }/>
                </form>
            </div>
            
        )
    }
}

const editStyle = {
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

export default EditMusician;