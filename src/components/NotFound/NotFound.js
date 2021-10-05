import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import page from "../../images/404.png";
import './NotFound.css';

const NotFound = () => {
  
    return (
        <Container>
          <Row>
          <Col xs={12}>
           <h3>Page Not Found</h3>
           <img src={page} alt="404" width="400" height="450"/>
            </Col>

         </Row>
        </Container>
    );
};

export default NotFound;