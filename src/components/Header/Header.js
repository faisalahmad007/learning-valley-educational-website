import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from "../../images/logo.png";
import './Header.css';

const Header = () => {
    return (
        <div className="header-details">
   <Container fluid>
 
  <Row>
   <Col xs={6}>
       <h1><img src={logo} alt="" width="80" height="80"/>Learning Valley</h1>
   </Col>
   <Col xs={6}>
   <nav className="nav-details" >
    <NavLink to="/home" style={{ textDecoration: 'none',padding: 20, color: 'darkCyan' ,fontWeight:'bold'  }}>Home</NavLink>
    <NavLink to="/about" style={{ textDecoration: 'none',padding: 20,color: 'darkCyan',fontWeight:'bold' }}>About Us</NavLink>
    <NavLink to="/services" style={{ textDecoration: 'none',padding: 20,color: 'darkCyan',fontWeight:'bold' }}>Services</NavLink>
    <NavLink to="/scholarships" style={{ textDecoration: 'none',padding: 20,color: 'darkCyan',fontWeight:'bold'}}>Scholarships</NavLink>
    </nav>
    </Col>
 </Row>
    </Container>
        </div>
    );
};

export default Header;