import React, { Component } from 'react';
import axios from 'axios';

export class DetailMusician extends Component {

  state = {
    uri: `http://145.24.222.48:8000/api/musicians/${this.props.match.params.id}`,
    musician: {}
  }

    componentDidMount() {
        console.log("Did mount")
        axios.get((this.state.uri), {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => this.setState({ musician: response.data }))
    }

    render() {
        return (
            <div>
                <h1>Details for {this.state.musician.name}</h1>
                <p>Below you will find some more info of the musician, including their most well-known album and live concert.</p><br></br>

                <h3>Name: {this.state.musician.name}</h3><br></br>
                <h3>Year: {this.state.musician.year}</h3><br></br>
                <h3>Genre: {this.state.musician.genre}</h3><br></br>
                <h3>Album: {this.state.musician.album}</h3><br></br>
                <h3>Concert: {this.state.musician.concert}</h3>
            </div>
            
        )
    }
}

export default DetailMusician;