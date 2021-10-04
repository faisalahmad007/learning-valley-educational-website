import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './NotFound.css';

const NotFound = () => {
    return (
        <Container>
          <Row>
          <Col xs={12}>
           
            <h3> <span className="span-color">404</span>
            Page Not Found</h3>
            </Col>
         </Row>
        </Container>
    );
};

export default NotFound;