import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './components/layout/Header';
import Musicians from './components/Musicians';
import AddMusician from './components/AddMusician';
import DetailMusician from './components/DetailMusician';
import EditMusician from './components/EditMusician';
import About from './components/pages/About';

import axios from 'axios';
import Pagination from './components/Pagination';
import './App.css';

class App extends Component {
  state = {
    musicians: [],
    currentMusicians: [],
    currentPage: null,
    totalPages: null
 }

 //Get collection
  componentDidMount() {
    console.log("Did mount")
    axios.get('http://145.24.222.48:8000/api/musicians', {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => this.setState({ musicians: response.data.items }))
  }

  //Pagination function
  onPageChanged = data => {
    const { musicians } = this.state;
    const { currentPage, totalPages, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentMusicians = musicians.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentMusicians, totalPages });
  }

  //Delete Musician
  deleteMusician = (uri) => {
    console.log(`Deleting musician ${uri}`)
    axios.delete(uri, {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(console.log(`Deleted musician at ${uri}`)) //this.setState({ musicians: [...this.state.musicians.filter(musician => musician.id !== this.state.musicians.id)] })
    .then(alert("Musician has been deleted, please refresh the page"))
  }

  render() {
    const { musicians, currentMusicians, currentPage, totalPages } = this.state;
    const totalMusicians = musicians.length;

    if (totalMusicians === 0) return null;

    const headerClass = ['text-dark py-2 pr-4 m-0', currentPage ? 'border-gray border-right' : ''].join(' ').trim();

    return (
      <Router>

        <div className="App">
          <Header/>
          <div className="container">

            <Route exact path="/" render={ props => (
              <React.Fragment>
                    <div className="d-flex flex-row align-items-center">
                      <h2 className={headerClass}>
                        <strong className="text-secondary">{totalMusicians}</strong> Musicians
                      </h2>
                      { currentPage && (
                        <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                        Page <span className="font-weight-bold">{ currentPage }</span> / <span className="font-weight-bold">{ totalPages }</span>
                        </span>
                      ) }
                    </div>

                    <div className="d-flex flex-row py-4 align-items-center">
                      <Pagination totalRecords={totalMusicians} pageLimit={5} pageNeighbours={1} onPageChanged={this.onPageChanged} />
                    </div>

                <Musicians musicians={this.state.musicians} currentMusicians={currentMusicians} detailMusician={this.detailMusician} editMusician={this.editMusician} deleteMusician={this.deleteMusician}/>
                <Link style={ linkStyle } to='/new'>Add New</Link>
              </React.Fragment>
            ) }/>

            <Route path="/new" render={ props => (
              <React.Fragment>
                <AddMusician {...props} addMusician={this.addMusician}/>
              </React.Fragment>
            ) }/>
            
            <Route path='/details/:id' render={ props => (
              <React.Fragment>
                <DetailMusician {...props} detailMusician={this.detailMusician}/>
              </React.Fragment>
            ) }/>

            <Route path='/edit/:id' render={ props => (
              <React.Fragment>
                <EditMusician {...props} editMusician={this.editMusician}/>
              </React.Fragment>
            ) }/>

            <Route path="/about" component={About}/>

          </div>
        </div>

      </Router>
    );
  }
}

const linkStyle = {
  border: 'none',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  padding: '8px 25px',
  borderRadius: '5px',
  backgroundColor: '#006400',
  color: '#f2f2f2'
}
export default App;