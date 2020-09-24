import React from "react"
// import PropTypes from "prop-types"
import { UncontrolledCollapse, CardDeck, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, Button, Jumbotron, Container } from 'reactstrap';
import { Link } from 'react-router-dom'

class AllApartments extends React.Component {
  render () {
    const { apartments } = this.props
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col>
              <h1>Available Now!</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <CardDeck>
                { apartments && apartments.map((apartment, i) =>
                  <Col md={6} key={i}>
                    <Card>
                      <CardBody>
                        <CardText className="text-center"> {apartment.street} </CardText>
                        <CardText className="text-center"> {apartment.city}, {apartment.state.toUpperCase()} </CardText>
                        <CardText className="text-center"> {apartment.postal_code} {apartment.country.toUpperCase()} </CardText>
                        <div className="text-center">
                          <Link to={`/apartmentinfo/${apartment.id}`}> More Info </Link>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                )}
              </CardDeck>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default AllApartments