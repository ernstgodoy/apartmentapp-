import React from "react"
import { Form, FormGroup, Label, Input, Col, Container } from 'reactstrap'
import { Link } from "react-router-dom"

class AddNew extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      success:false,
      form: {
        user_id: this.props.current_user.id,
        street: '',
        city: '',
        state: '',
        country: '',
        postal_code: '',
        manager_name: '',
        manager_number: '',
        manager_hours: '',
      }
    }
  }
  
  handleChange = (e) => { 
    let { form } = this.state
    form[ e.target.name ] = e.target.value
    this.setState({ form: form })
  }

  handleNewApartment = () =>{
    this.props.onSubmit(this.state.form).then(() => {
      this.setState({ success: true })
    })
    console.log(this.state.form)
  }
  
  render () {
    return (
      <React.Fragment>
        <Container>
          <div>
            <h1 className="text-center">Add New Listing</h1>
          </div>
          <Col md={12} >
            <Form>
              <FormGroup>
                <Label for="street">Street</Label>
                  <Input
                    id="street"
                    type="text"
                    name="street"
                    onChange={this.handleChange}
                    value={this.state.form.street}
                    placeholder="Apartments street"
                  />
              </FormGroup>
              <FormGroup>
                <Label for="city">City</Label>
                  <Input
                    id="city"
                    type="text"
                    name="city"
                    onChange={this.handleChange}
                    value={this.state.form.city}
                    placeholder="Aparments city"
                />
              </FormGroup>
              <FormGroup>
                <Label for="state">State</Label>
                  <Input
                    id="state"
                    type="text"
                    name="state"
                    onChange={this.handleChange}
                    value={this.state.form.state}
                    placeholder="Apartments state"
                  />
              </FormGroup>
              <FormGroup>
                <Label for="postal_code">Postal Code</Label>
                  <Input
                    id="postal_code"
                    type="text"
                    name="postal_code"
                    onChange={this.handleChange}
                    value={this.state.form.postal_code}
                    placeholder="Apartments postal code"
                  />
              </FormGroup>
              <FormGroup>
                <Label for="country">Country</Label>
                  <Input
                    id="country"
                    type="text"
                    name="country"
                    onChange={this.handleChange}
                    value={this.state.form.country}
                    placeholder="Aparments country"
                  />
              </FormGroup>
              <FormGroup>
                <Label for="manager_name">Manager Name</Label>
                  <Input
                    id="manager_name"
                    type="text"
                    name="manager_name"
                    onChange={this.handleChange}
                    value={this.state.form.manager_name}
                    placeholder="Apartments manager name"
                  />
              </FormGroup>
              <FormGroup>
                <Label for="manager_number">Manager Number</Label>
                  <Input
                    id="manager_number"
                    type="text"
                    name="manager_number"
                    onChange={this.handleChange}
                    value={this.state.form.manager_number}
                    placeholder="Apartments manager number"
                  />
              </FormGroup>
              <FormGroup>
                <Label for="manager_hours">Manager Hours</Label>
                  <Input
                    id="manager_hours"
                    type="text"
                    name="manager_hours"
                    onChange={this.handleChange}
                    value={this.state.form.manager_hours}
                    placeholder="Aparments Manager Hours"
                  />
              </FormGroup>
            </Form>
            { this.state.success && <Redirect to="/apartments" /> }
            <Link to="/apartments" className= "btn btn-primary" onClick={ this.handleNewApartment }>Add Listing</Link>
            </Col>
        </Container>
    </React.Fragment>
    );
  }
}

export default AddNew
