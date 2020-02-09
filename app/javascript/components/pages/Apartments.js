import React from "react"
// import PropTypes from "prop-types"
import { UncontrolledCollapse, CardDeck, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

class Apartments extends React.Component {
  render () {

    const { current_user, apartments } = this.props
    const apartment = apartments.filter((a, i) => {
      return (
      a.user_id === current_user.id)
    })

    return (
      <Row>
      <Col sm={12}>
        <CardDeck>
        {apartment.map((apartment, i) =>
          <Col sm="12">
          <Card>
          <CardBody>
          <CardTitle> {apartment.id}</CardTitle>
          <CardText> {apartment.street} </CardText>
          <CardText> {apartment.city} </CardText>
          <CardText> {apartment.state} </CardText>
          <CardText> {apartment.postal_code} </CardText>
          <CardText> {apartment.country} </CardText>


          <UncontrolledCollapse toggler={`#toggler${i}`}>
          <CardText> {apartment.manager_name} </CardText>
          <CardText> {apartment.manager_number} </CardText>
          <CardText> {apartment.manager_hours} </CardText>
          </UncontrolledCollapse>
          <Button color="primary" id={`toggler${i}`} style={{ marginBottom: '1rem' }}>
          More Info
          </Button>
          </CardBody>
          </Card>
          </Col>
        )}
        </CardDeck>
        </Col>
      </Row>
        )
    }
}

export default Apartments
