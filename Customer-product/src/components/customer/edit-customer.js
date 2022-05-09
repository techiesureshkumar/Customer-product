import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditCustomer extends Component {

  constructor(props) {
    super(props)

    this.onChangeCustomerName = this.onChangeCustomerName.bind(this);
    this.onChangeCustomerEmail = this.onChangeCustomerEmail.bind(this);
    this.onChangeCustomerCustomerid = this.onChangeCustomerCustomerid.bind(this);
    this.onChangeCustomerPassword = this.onChangeCustomerPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      c_name: '',
      c_email: '',
      customerid: '',
      c_password: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/Customers/edit-Customer/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          c_name: res.data.c_name,
          c_email: res.data.c_email,
          customerid: res.data.customerid
        });
      })
      .catch((error) => {
        console.log(error);
      })
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

  onSubmit(e) {
    e.preventDefault()

    const CustomerObject = {
      c_name: this.state.c_name,
      c_email: this.state.c_email,
      customerid: this.state.customerid,
      c_password: this.state.c_password
    };

    axios.put('http://localhost:4000/Customers/update-Customer/' + this.props.match.params.id, CustomerObject)
      .then((res) => {
        console.log(res.data)
        console.log('Customer successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Customer List 
    this.props.history.push('/Customer-list')
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
          <Form.Label>Customer Password</Form.Label>
          <Form.Control type="password" value={this.state.c_password} onChange={this.onChangeCustomerPassword} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Customer
        </Button>
      </Form>
    </div>);
  }
}
