import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
        const{id,title,price,description,category,img}= props.courses;
        return (
           
        <Col>
          <Card>
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

export default Course;