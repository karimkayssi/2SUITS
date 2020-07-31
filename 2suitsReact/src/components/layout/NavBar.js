import React from 'react';
import { Link, NavLLink, withRouter } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import "./NavBar.css";
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import Avatar from '../../avatar.png';


const MainBar = (props) => {
    return (
        // <withRouter>
        // <nav className="text-dark-children" style={{backgroundColor:"rgba(255,255,255, 0.8)", position:"fixed", zIndex: "999" }}>
        //     <div className="container">
        //         <Link to='/' className="brand-logo"><b>2SUITS</b></Link>
        //         <SignedInLinks />
        //         <SignedOutLinks/>
        //     </div>
        // </nav>

        <Navbar variant="light" style={{
            backgroundColor: "rgba(255,255,255, 0.9)",
            position: 'fixed',
            height: "auto",
            lineHeight: 'initial',
            zIndex: 999
        }} expand="lg">

            <Navbar.Brand href="/"><h3>2SUITS</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="ml-auto" >
                    <Nav.Link href="#profile" style={{ color: 'black' }}>Profile</Nav.Link>
                    <Nav.Link href="#dashboard" style={{ color: 'black' }}>Dashboard</Nav.Link>
                    <Nav.Link href="#matches" style={{ color: 'black' }}>My Matches</Nav.Link>
                    <Nav.Link href="#wallet" style={{ color: 'black' }}>Wallet</Nav.Link>
                    <Nav.Link href="#about" style={{ color: 'black' }}>About Us</Nav.Link>
                    <Nav.Link href="#logout" style={{ color: 'black' }}>Log Out</Nav.Link>
                    <Nav.Link><img src={Avatar} height="30" /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>


        // </withRouter>
    )
}

export default MainBar;