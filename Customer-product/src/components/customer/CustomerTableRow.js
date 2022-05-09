import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class CustomerTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    deleteCustomer() {
        axios.delete('http://localhost:4000/Customers/delete-Customer/' + this.props.obj._id)
            .then((res) => {
                console.log('Customer successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.c_name}</td>
                <td>{this.props.obj.customerid}</td>
                <td>{this.props.obj.c_password}</td>
                <td>{this.props.obj.c_email}</td>
                <td>{this.props.obj.c_phone}</td>
                <td>{this.props.obj.c_area}</td>
                <td>
                    <Link className="edit-link" to={"/edit-Customer/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteCustomer} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}