import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginAPI from '../services/LoginAPI';

export default class AdminDashboard extends Component {
    /*componentDidMount() {
        if (sessionStorage.getItem("role") == null) {
            window.location = "/"
        }
    }*/

    logout() {
        LoginAPI.logoutAdmin()
    }

    render() {
        return (
            <>
                <h1 className='text-light'>adminDashboard</h1>
                <div className="justify-content-end">
                    <Nav.Link as={Link} onClick={this.logout} className="btn btn-link btn-danger text-light offset-10 text-uppercase text-decoration-none " to="/home">Logout</Nav.Link>
                </div>
                <div><Navbar expand="lg">
                    <Container> <Navbar.Brand className="text-light" href="#home">Online PetShop</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link className="text-light" as={Link} to="/allregisteredusers">registered Users</Nav.Link>

                            </Nav>
                        </Navbar.Collapse></Container>

                </Navbar></div>

            </>
        );
    }
}