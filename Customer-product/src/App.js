import React, {Component} from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css"; 
import { connect } from "react-redux";

import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";

//USER RELATED SCREENS
import CreateUser from "./components/user/create-user";
import EditUser from "./components/user/edit-user";
import userList from "./components/user/user-list";
import signIn from "./components/sign-in.component";
import { signOutSuccessAction } from "./redux/actions/userAction";
//import { signOutSuccessAction } from "./redux/actions/customerAction";

//CUSTOMER RELATED SCREENS 
import CreateCustomer from "./components/customer/create-customer";
import EditCustomer from "./components/customer/edit-customer";
import CustomerList from "./components/customer/customer-list";

class App extends Component {
  
  constructor(props) {
    super(props)
    this.onSignOut = this.onSignOut.bind(this);
  }
  
  onSignOut() {
    this.props.signOutSuccess();
  }

  render() {
    return (<Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>

              <Navbar.Brand>
                <Link to={"/sign-in"} className="nav-link">
                  Joy Dairy
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                {
                  !this.props.isSignedIn &&
                  <Nav>
                    <Link to={"/sign-in"} className="nav-link">
                      Sign In
                    </Link>
                  </Nav>
                }
                {
                  !this.props.isSignedIn &&
                  <Nav>
                    <Link to={"/create-user"} className="nav-link">
                      Sign Up
                    </Link>
                  </Nav>
                }

                {/*<Nav>
                  <Link to={"/edit-user/:id"} className="nav-link">
                    Edit User
                  </Link>
                </Nav> */}
                {
                  this.props.isSignedIn &&
                  <Nav>
                    <Link to={"/user-list"} className="nav-link">
                      User List
                    </Link>
                  </Nav>
                }
                {
                  this.props.isSignedIn &&
                  <Nav>
                    <Link to={"/customer-list"} className="nav-link">
                      Customer List
                    </Link>
                  </Nav>
                }
                {
                  this.props.isSignedIn &&
                  <Nav>
                    <Link to={"/create-customer"} className="nav-link">
                      Create Customer
                    </Link>
                  </Nav>
                }
                {
                  this.props.isSignedIn &&
                  <Nav>
                    <Link to={"/sign-out"} className="nav-link" onClick={this.onSignOut}>
                      Sign Out
                    </Link>
                  </Nav>
                }
              </Nav>

            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path='/' component={signIn} />
                  <Route path="/create-user" component={CreateUser} />
                  <Route path="/edit-user/:id" component={EditUser} />
                  <Route path="/user-list" component={userList} />
                  <Route path="/create-customer" component={CreateCustomer} />
                  <Route path="/edit-customer/:id" component={EditCustomer} />
                  <Route path="/customer-list" component={CustomerList} />
                  <Route path="/sign-in" component={signIn} />
                  <Route path="/sign-out" component={signIn} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>);
  }
}

const mapStateToProps = state =>{
  return {isSignedIn : state.userReducer.isSignedIn}
};

const mapDispatchToProps = (dispatch) => ({
  signOutSuccess: () => dispatch(signOutSuccessAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
