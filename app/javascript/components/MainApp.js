import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Jumbotron } from 'reactstrap'
import Example from "./Nav"

//pages
import Apartments from "./pages/Apartments"
import AddNew from "./pages/AddNew"
import ApartmentInfo from "./pages/ApartmentInfo"
import Edit from "./pages/Edit"


class MainApp extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      apartments: [ ]
    }
    this.getApartments()
  }
  
  componentDidMount(){
    this.getApartments()
  }

  getApartments = () => {
    fetch("/apartments").then((response) => {
      if (response.status === 200) {
        return(response.json()) 
      }
    }).then((apartmentsArray) => {
      this.setState({apartments: apartmentsArray})
    })
  }
  
  createApartment = (apartment) => {
    return fetch('/apartments', {
      body: JSON.stringify(apartment),
      headers: { 
        'Content-Type': 'application/json'
      },
      method: "POST"  
    }).then((response) => {
      if (response.ok) {
        return this.getApartments()
      }
    })
  }

  deleteApartment = (id)=> {
    return fetch(`/apartments/${id}` , { 
      method: 'DELETE'
    }).then((response) => {
      if (response.ok) {
        return this.getApartments()
      }
    })
  }

  editApartment = (apartment)=>{
    // console.log('api call:', apartment, apartment.id)
    return fetch(`/apartments/${apartment.id}`, {
      body: JSON.stringify(apartment), 
      headers: { 
        'Content-Type': 'application/json'
      },
      method: "PUT"
    }).then((response) => {
      if(response.ok){
        return this.getApartments()
      }
    })
  }

  render () {
    const {
      signed_in,
      sign_in_route,
      sign_out_route,
      current_user
    } = this.props
    return (
      <React.Fragment>
        <Example signed_in= {signed_in} sign_in_route= {sign_in_route} sign_out_route= {sign_out_route}/>
        <Jumbotron>
          Hi
        </Jumbotron>
        <Router>
          {/* items in nav bar */}
          <Switch>
            <Route exact path="/apartments" render={(props) => <Apartments {...props} onDelete= {this.deleteApartment} apartments={ this.state.apartments } current_user={current_user} /> } />
            <Route exact path="/addnew" render={(props) => <AddNew onSubmit={this.createApartment} current_user={current_user} /> } />
            <Route exact path="/apartmentinfo/:id" render={(props) => <ApartmentInfo {...props} onDelete= {this.deleteApartment} apartments={ this.state.apartments } /> } />
            <Route exact path="/edit/:id" render={(props) => <Edit {...props} onEdit={this.editApartment} current_user={current_user} apartments={ this.state.apartments } /> } />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default MainApp
