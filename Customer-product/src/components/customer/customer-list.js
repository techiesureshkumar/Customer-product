import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import CustomerTableRow from './CustomerTableRow';
import { connect } from "react-redux";
import { getCustomerList } from "../../redux/actions/customerAction";


 class CustomerList extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getCustomerList();
      
  }

  DataTable() {
    return this.props.customerList ? this.props.customerList.map((res, i) => {
      return <CustomerTableRow obj={res} key={i} />;
    }): '';
  }

  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Customer Id</th>
            <th>Customer Password</th>
            <th>Customer Email</th>
            <th>Customer Phone</th>
            <th>Customer Area</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Phone</th>
             </tr>
        </thead>
        <tbody>
          
        </tbody>
       
      </Table>
    </div>);
  }
}

const mapStateToProps = state =>{
  return {customerList : state.customerReducer.customerList};
};

const mapDispatchToProps = (dispatch) => ({
  getCustomerList: (params) => dispatch(getCustomerList(params))
})
export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);