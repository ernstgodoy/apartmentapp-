import React from "react"
import { CardDeck, Row, Col, Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';
import { Link } from "react-router-dom"



class ApartmentInfo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartmentid : props.match.params.id,
    }
}


handleDelete = () =>{
  this.props.onDelete(this.state.apartmentid)

}




  render () {
    const { apartmentid } = this.state
    const { apartments } = this.props
    const apartment = apartments.find((a)=> a.id === parseInt(apartmentid))
    return (
      <Row>
      <Col xs={12}>
      <CardDeck>

      <Col sm="6">
      <Card>
      <CardBody>
      <CardTitle> {apartment.id}</CardTitle>
      <CardText> {apartment.street} </CardText>
      <CardText> {apartment.city} </CardText>
      <CardText> {apartment.state} </CardText>
      <CardText> {apartment.postal_code} </CardText>
      <CardText> {apartment.country} </CardText>
      <CardText> {apartment.manager_name} </CardText>
      <CardText> {apartment.manager_number} </CardText>
      <CardText> {apartment.manager_hours} </CardText>

      <Link to="/apartments" className= "btn btn-primary" onClick={this.handleDelete}>Delete Listing</Link>

      </CardBody>
      </Card>
      </Col>

      </CardDeck>
      </Col>
      </Row>

    );
  }
}



export default ApartmentInfo
