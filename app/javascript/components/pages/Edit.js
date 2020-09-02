import React from "react"
import { CardDeck, Row, Col, Card, CardImg, CardText, CardBody,CardTitle, Form, FormGroup, Label, Input,Button, Container } from 'reactstrap';
import { Link } from "react-router-dom"
// import PropTypes from "prop-types"

class Edit extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      success: false,
      form: {
          apartmentid: props.match.params.id,
          user_id: this.props.current_user.id,
          street: '',
          city: '',
          state: '',
          country: '',
          postal_code: '',
          manager_name: '',
          manager_number: '',
          manager_hours: ''
      }
    }
}

componentDidMount(){
  this.setForm()
}

setForm = () => {
  const { form } = this.state
  const { apartments } = this.props
  const apartment = apartments.find((a)=> a.id === parseInt(form.apartmentid))
  this.setState({form: apartment})
}

handleChange = (e) => {
  let {form} = this.state
  form[e.target.name] = e.target.value
  console.log("form", form)
  this.setState({form: form})
}

handleEdit = () =>{
  const editedApt = this.state.form
  this.props.onEdit(editedApt)
}


  render () {

    const { form } = this.state
    const { apartments } = this.props
    // const apartment = apartments.find((a)=> a.id === parseInt(form.apartmentid))
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col md={12}>
            <Form>
                <FormGroup>
                    <Label for="street">Street</Label>
                        <Input
                            id="street"
                            type="text"
                            name="street"
                            onChange={this.handleChange}
                            value={ form.street }
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="city">City</Label>
                        <Input
                            id="city"
                            type="text"
                            name="city"
                            onChange={this.handleChange}
                            value={ form.city }
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="state">State</Label>
                        <Input
                            id="state"
                            type="text"
                            name="state"
                            onChange={this.handleChange}
                            value={ form.state }
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="postal_code">Postal Code</Label>
                        <Input
                            id="postal_code"
                            type="text"
                            name="postal_code"
                            onChange={this.handleChange}
                            value={ form.postal_code }
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="country">Country</Label>
                        <Input
                            id="country"
                            type="text"
                            name="country"
                            onChange={this.handleChange}
                            value={ form.country }
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="manager_name">Manager Name</Label>
                        <Input
                            id="manager_name"
                            type="text"
                            name="manager_name"
                            onChange={this.handleChange}
                            value={ form.manager_name }
                        />
                  </FormGroup>
                  <FormGroup>
                      <Label for="manager_number">Manager Number</Label>
                          <Input
                              id="manager_number"
                              type="text"
                              name="manager_number"
                              onChange={this.handleChange}
                              value={ form.manager_number }
                          />
                  </FormGroup>
                  <FormGroup>
                      <Label for="manager_hours">Manager Hours</Label>
                        <Input
                              id="manager_hours"
                              type="text"
                              name="manager_hours"
                              onChange={this.handleChange}
                              value={ form.manager_hours }
                          />
                  </FormGroup>
              </Form>
              {this.state.success && <Redirect to="/apartments" />}
              <Link to="/apartments" className= "btn btn-primary" onClick={ this.handleEdit }>
              Submit Changes
              </Link>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Edit
