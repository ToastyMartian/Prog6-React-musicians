import React, { Component } from 'react';
import MusicianItem from './MusicianItem';

class Musicians extends Component {
  render() {
    return this.props.currentMusicians.map((musician) => (
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Details</th>
            <th scope="col">Edit Musician</th>
            <th scope="col">Delete Musician</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <MusicianItem key={musician._id} musician={musician} detailMusician={this.props.detailMusician} editMusician={this.props.editMusician} deleteMusician={ this.props.deleteMusician }/>
          </tr>
        </tbody>
      </table>
    ));
  }
}
export default Musicians;