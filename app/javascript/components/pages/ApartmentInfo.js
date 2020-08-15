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

  handleDelete = () => {
    this.props.onDelete(this.state.apartmentid)
  }

  render () {
    const { apartmentid } = this.state
    const { apartments } = this.props
    const apartment = apartments.find((a)=> a.id === parseInt(apartmentid))
    return (
      <Row>
        <Col>
          <CardDeck>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="text-center"> {apartment.id}</CardTitle>
                  <CardText className="text-center"> {apartment.street} </CardText>
                  <CardText className="text-center"> {apartment.city} </CardText>
                  <CardText className="text-center"> {apartment.state} </CardText>
                  <CardText className="text-center"> {apartment.postal_code} </CardText>
                  <CardText className="text-center"> {apartment.country} </CardText>
                  <CardText className="text-center"> {apartment.manager_name} </CardText>
                  <CardText className="text-center"> {apartment.manager_number} </CardText>
                  <CardText className="text-center"> {apartment.manager_hours} </CardText>
                  <div className="text-center">
                    <Link to="/apartments" className= "btn btn-primary" onClick={this.handleDelete}>Delete Listing</Link>
                    &nbsp;
                    <Link to={`/edit/${apartment.id}`} className= "btn btn-primary">Edit Listing</Link>
                  </div>
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
