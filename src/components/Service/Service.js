import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
 
        const{id,title,price,description,category,img}= props.services;
        return (
         
        <Col className="card-area">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
            
            <Card.Title>Course Id:{id}</Card.Title>
              <Card.Title>Course Title:{title}</Card.Title>
              <Card.Text>
                 Price:{price}
              </Card.Text>
              <Card.Text>
                Category:{category}
              </Card.Text>
              <Card.Text>
                Description:{description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        );
};

export default Service;