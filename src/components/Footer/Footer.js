import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <Container fluid className="footer-site">
        <Row>
          <Col xs={12} className="text-center">
            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by Faisal Ahmad
            </p>
          </Col>
        </Row>
      </Container>

    );
};

export default Footer;