import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import learn from "../../images/learning.png";
import logo from "../../images/online.png";
import teach from "../../images/teaching.png";
import './About.css';

const About = () => {
    return (
       
<Container>
<Row>
<Col xs={12}>
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={logo}
      alt="First slide" width="400" height="450"/>
    <Carousel.Caption>
      <h3><span>About Us</span></h3>
      <p>Learning Valley is Bangladesh's largest ed-tech company and the creator of Bangladesh's most loved school learning app. Launched in 2021,Learning Valley offers highly personalised and effective learning programs</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={learn}
      alt="Second slide" width="400" height="450"/>
    <Carousel.Caption>
      <h3><span>What Makes Us Different</span></h3>
      <p><b>Learning Valley</b> - The Learning App brings together the best teachers, technology, content, media for creating a seamless, world class learning experience for each and every student.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={teach}
      alt="Third slide" width="400" height="450"/>
    <Carousel.Caption>
      <h3><span>Why Choose Us</span></h3>
      <p><b>Learning Valley</b>, we encourage students to embrace this fast, changing world and making them ready for tomorrow by being their constant learning partner.
</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


</Col>

</Row>
</Container>
    );
};

export default About;
