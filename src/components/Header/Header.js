import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
    <div>
   <Container fluid className="header-color">
  <Row>
   <Col xs={6}>
       <h1 className="header-color">Learning Valley</h1>
   </Col>
   <Col xs={6}>
   <nav className="nav-details" >
    <NavLink to="/home" style={{ textDecoration: 'none',padding: 20, color: 'white'  }}>Home</NavLink>
    <NavLink to="/about" style={{ textDecoration: 'none',padding: 20,color: 'white' }}>About Us</NavLink>
    <NavLink to="/services" style={{ textDecoration: 'none',padding: 20,color: 'white' }}>Services</NavLink>
    <NavLink to="/scholarships" style={{ textDecoration: 'none',padding: 20,color: 'white'}}>Scholarships</NavLink>
    </nav>
    </Col>
    </Row>
    </Container>
        </div>
    );
};

export default Header;