import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { connect } from "react-redux";
import { createCustomer } from "../../redux/actions/customerAction";
import { useState, getState } from "react";

class CreateCustomer extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    //name,email,password
    this.onChangeCustomerName = this.onChangeCustomerName.bind(this);
    this.onChangeCustomerEmail = this.onChangeCustomerEmail.bind(this);
    this.onChangeCustomerCustomerid = this.onChangeCustomerCustomerid.bind(this);
    this.onChangeCustomerPassword = this.onChangeCustomerPassword.bind(this);
    this.onChangeCustomerPhone = this.onChangeCustomerPhone.bind(this);
    this.onChangeCustomerArea = this.onChangeCustomerArea.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      c_name: '',
      c_email: '',
      customerid: '',
      c_password: '',
      c_phonne: '',
      c_area: ''
    }
  }

  onChangeCustomerName(e) {
    this.setState({ c_name: e.target.value })
  }

  onChangeCustomerEmail(e) {
    this.setState({ c_email: e.target.value })
  }

  onChangeCustomerPassword(e) {
    this.setState({ c_password: e.target.value })

  }

  onChangeCustomerCustomerid(e) {
    this.setState({ customerid: e.target.value })
  }

  onChangeCustomerPhone(e) {
    this.setState({ c_phone: e.target.value })
  }

  onChangeCustomerArea(e) {
    this.setState({ c_area: e.target.value })
  }
  

  onSubmit(e) {
    e.preventDefault()

    const CustomerObject = {
      c_name: this.state.c_name,
      c_email: this.state.c_email,
      customerid: this.state.customerid,
      c_password: this.state.c_password,
      c_phone: this.state.c_phone,
      c_area: this.state.c_area

    };

    axios.post('http://localhost:4000/Customers/create-Customer', CustomerObject)
      .then(res => {
        console.log(res.data);
        this.props.createCustomer(res.data);
      });
    this.setState({ c_name: '', c_email: '', customerid: '', c_password:'', c_phone: '', c_area: '' });
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Customer Name</Form.Label>
          <Form.Control type="text" value={this.state.c_name} onChange={this.onChangeCustomerName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Customer Email</Form.Label>
          <Form.Control type="email" value={this.state.c_email} onChange={this.onChangeCustomerEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Customer Id</Form.Label>
          <Form.Control type="text" value={this.state.customerid} onChange={this.onChangeCustomerCustomerid} />
        </Form.Group>
        <Form.Group controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={this.state.c_password} onChange={this.onChangeCustomerPassword} />
        </Form.Group>
        <Form.Group controlId="Phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="phone" value={this.state.c_phone} onChange={this.onChangeCustomerPhone} />
        </Form.Group>
        <Form.Group controlId="Area">
          <Form.Label>Area</Form.Label>
          <Form.Control type="text" value={this.state.c_area} onChange={this.onChangeCustomerArea} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Customer
        </Button>
      </Form>
    </div>);
  }
}


const mapStateToProps = (state) => ({
  ...state.states
})

const mapDispatchToProps = (dispatch) => ({
  createCustomer: (params) => dispatch(createCustomer(params))
})
export default connect(mapStateToProps, mapDispatchToProps)(CreateCustomer);