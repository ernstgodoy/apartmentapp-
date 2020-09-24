import React from "react"
import { Row, Col, Container } from 'reactstrap';
import { Link } from "react-router-dom"

class ApartmentInfo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartment: null,
    }
    this.getApt()
  }
  
  getApt = () => {
    fetch(`/apartments/${this.props.match.params.id}`).then((response) => {
      if (response.ok) {
        return(response.json())
      }
    }).then((data) => {
      this.setState({apartment: data})
    })
  }

  handleDelete = () => {
    this.props.onDelete(this.props.apartmentId)
  }

  render () {
    const { signed_in, current_user } = this.props
    const { apartment } = this.state
    const img = require('../../../assets/images/interior.jpg')
    return (
      <Container className="apartment-info">
        { apartment && 
          <Row>
            <Col md={ 6 }>
              <img className="img-fluid" src={ img }/>
            </Col>
            <Col md={ 6 } className="info">
              <p>{apartment.street}<br/>{apartment.city}, {apartment.state.toUpperCase()}<br/> {apartment.postal_code} {apartment.country.toUpperCase()}<br/> <em>Hours:</em> {apartment.manager_hours}<br/> <em>Manager:</em> {apartment.manager_name} {apartment.manager_number}</p>
              {signed_in && (current_user.id === apartment.user_id) && 
                <div>
                  <Link to="/apartments" className= "btn btn-primary" onClick={this.handleDelete}>Delete Listing</Link>
                  &nbsp;
                  <Link to={`/edit/${apartment.id}`} className= "btn btn-primary">Edit Listing</Link>
                </div>
              }
            </Col>
          </Row>
        }
      </Container>
    );
  }
}

export default ApartmentInfo
