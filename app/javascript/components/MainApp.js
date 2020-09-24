import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Jumbotron } from 'reactstrap'
import Example from "./Nav"
//pages
import AllApartments from "./pages/AllApartments"
import Apartments from "./pages/Apartments"
import AddNew from "./pages/AddNew"
import ApartmentInfo from "./pages/ApartmentInfo"
import Edit from "./pages/Edit"
import Landing from "./pages/Landing"


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
      if (response.ok) {
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
      current_user,
      sign_up_route
    } = this.props
    return (
      <React.Fragment>
        <Example signed_in= {signed_in} sign_in_route= {sign_in_route} sign_out_route= {sign_out_route}/>
        <Router>
          {/* items in nav bar */}
          <Switch>
            <Route exact path="/" render={(props) => <Landing {...props} signed_in={signed_in} sign_up_route={ sign_up_route } /> } />
            <Route path="/availableapartments" render={(props) => <AllApartments {...props} onDelete= {this.deleteApartment} apartments={ this.state.apartments } /> } />
            <Route path="/apartments" render={(props) => <Apartments {...props} onDelete= {this.deleteApartment} apartments={ this.state.apartments } current_user={current_user} /> } />
            <Route path="/addnew" render={(props) => <AddNew {...props} onSubmit={this.createApartment} current_user={current_user} /> } />
            <Route path="/apartmentinfo/:id" render={(props) => <ApartmentInfo {...props} signed_in={signed_in} current_user= {current_user} onDelete= {this.deleteApartment} /> } />
            <Route path="/edit/:id" render={(props) => <Edit {...props} onEdit={this.editApartment} current_user={current_user} apartments={ this.state.apartments } /> } />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default MainApp
