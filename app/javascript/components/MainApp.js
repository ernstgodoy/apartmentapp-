import React from "react"
// import PropTypes from "prop-types"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Navbar, NavItem } from 'reactstrap'
import Example from "./Nav"


//pages
import Apartments from "./pages/Apartments"
import AddNew from "./pages/AddNew"
import ApartmentInfo from "./pages/ApartmentInfo"


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


  //{*/ ties Apartments.js to Apartment database
  getApartments = ()=>{
   fetch("/apartments") //Fetch returns a promise
   .then((response)=>{
     if(response.status === 200){ //Make sure we get a successfull response back
       return(response.json()) //We need to convert the response to json.  This also returns a promise
     }
   })
   .then((apartmentsArray)=>{
     this.setState({apartments: apartmentsArray}) //Finally, we can assign the cats to state, and they will render.
   })
 }


//creates new apartments and puts it in the database
 createApartment = (apartment)=>{
  return fetch('/apartments', {
    body: JSON.stringify(apartment),  // <- we need to stringify the json for fetch
    headers: {  // <- We specify that we're sending JSON, and expect JSON back
      'Content-Type': 'application/json'
    },
    method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
  })
  .then((response) => {
    if(response.ok){
      return this.getApartments()
    }
  })
}



  //delete functionality
    deleteApartment = (id)=> {
     return fetch(`/apartments/${id}` , {
      method: 'DELETE'
    })
    .then((response) => {
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
      <Router>


    {/* items in nav bar */}
      <Navbar>
      <Example signed_in= {signed_in} sign_in_route= {sign_in_route} sign_out_route= {sign_out_route}/>
     </Navbar>
     {/*end of navbar*/}




     {/*switcher*/}
     <Switch>
     <Route exact path="/apartments" render={(props) => <Apartments {...props} apartments={ this.state.apartments } current_user={current_user} /> } />

     <Route exact path="/addnew" render={(props) => <AddNew onSubmit={this.createApartment} current_user={current_user} /> } />

     <Route exact path="/apartmentinfo/:id" render={(props) => <ApartmentInfo {...props} onDelete= {this.deleteApartment} apartments={ this.state.apartments } /> } />


     </Switch>
     {/*end of switcher*/}

     </Router>




      </React.Fragment>



    );
  }
}

export default MainApp
