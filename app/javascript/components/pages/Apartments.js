import React from "react"
// import PropTypes from "prop-types"
import { UncontrolledCollapse, CardDeck, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

class Apartments extends React.Component {
  render () {
    const { current_user, apartments } = this.props
    const apartment = apartments.filter((a, i) => {
      return(  a.user_id === current_user.id)
    })
    return (
      <Row>
        <Col>
          <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
            { apartment.map((apartment, i) =>
              <Col>
                <Card style={{flex: 1}} bodystyle={{padding: "0"}}>
                  <CardBody>
                    <CardText className="text-center"> {apartment.street} </CardText>
                    <CardText className="text-center"> {apartment.city} </CardText>
                    <CardText className="text-center"> {apartment.state} </CardText>
                    <CardText className="text-center"> {apartment.postal_code} </CardText>
                    <CardText className="text-center"> {apartment.country} </CardText>
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
    )
  }
}

export default Apartments
