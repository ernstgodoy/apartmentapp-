import React from "react"
import { CardDeck, Row, Col, Card, CardImg, CardText, CardBody,CardTitle, Container } from 'reactstrap';
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
    return (
      <Container>
        { apartment && 
          <Row>
            <Col>
              <CardDeck>
                <Col>
                  <Card>
                    <CardBody>
                      <CardText className="text-center"> {apartment.street} </CardText>
                      <CardText className="text-center"> {apartment.city}, {apartment.state.toUpperCase()} </CardText>
                      <CardText className="text-center"> {apartment.postal_code} {apartment.country.toUpperCase()}</CardText>
                      <CardText className="text-center"> <em>Manager:</em> {apartment.manager_name} {apartment.manager_number} </CardText>
                      <CardText className="text-center"> <em>Hours:</em> {apartment.manager_hours} </CardText>
                      {signed_in && (current_user.id === apartment.user_id) && 
                        <div className="text-center">
                          <Link to="/apartments" className= "btn btn-primary" onClick={this.handleDelete}>Delete Listing</Link>
                          &nbsp;
                          <Link to={`/edit/${apartment.id}`} className= "btn btn-primary">Edit Listing</Link>
                        </div>
                      }
                    </CardBody>
                  </Card>
                </Col>
              </CardDeck>
            </Col>
          </Row>
        }
      </Container>
    );
  }
}

export default ApartmentInfo
