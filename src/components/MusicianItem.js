import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MusicianItem extends Component {

    editMusician = (e) => {
        console.log("Editing...")
    }
    deleteMusician = (e) => {
        console.log("Yeet!")
    }
    detailMusician = (e) => {
        console.log(this.props.musician._links.self.href)
    }

    render() {

        const { _id, name } = this.props.musician;
        const uri = this.props.musician._links.self.href
        return (
            <React.Fragment>
                <td>{ name }</td>
                <td><Link to={`/details/${_id}`} key={_id} style={ detailStyle } onClick={() =>this.detailMusician(uri)}>Details</Link></td>
                <td><Link to={`/edit/${_id}`} key={_id} style={ editStyle } onClick={() =>this.editMusician(uri)}>Edit</Link></td>
                <td><Link to={'/'} key={_id} style={ deleteStyle } onClick={() =>this.props.deleteMusician(uri)}>Delete</Link></td>
            </React.Fragment>
        )
    }
}

const detailStyle = {
    border: 'none',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    padding: '8px 25px',
    borderRadius: '5px',
    backgroundColor: '#00008B',
    color: '#f2f2f2' 
}

const editStyle = {
    border: 'none',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    padding: '8px 25px',
    borderRadius: '5px',
    backgroundColor: '#006400',
    color: '#f2f2f2'  
}

const deleteStyle = {
    border: 'none',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    padding: '8px 25px',
    borderRadius: '5px',
    backgroundColor: '#8B0000',
    color: '#f2f2f2'  
}

export default MusicianItem