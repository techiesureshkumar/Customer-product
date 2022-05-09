import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import CustomerTableRow from '../customer/CustomerTableRow';
import { connect } from "react-redux";
import { getCustomerList } from "../../redux/actions/customerAction";


 class DayDeliveryCustomerList extends Component {

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
            <th>Date</th>
            <th>Customer Name</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
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