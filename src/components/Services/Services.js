import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';


const Services = () => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
       
   fetch(`./course.JSON`)
   .then(res => res.json())
   .then(data => setCourse(data))

}, [])
   return (

<Container>  
<Row xs={1} md={3} className="g-4">
   {
       course.map(cr => <Course
          key={cr.id}
          courses={cr}></Course>)
   }
</Row>
</Container>   
   
   );
};

export default Services;