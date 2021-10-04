import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Home = () => {
   const [service, setService] = useState([]);
   useEffect(() => {
        
    fetch(`./displayCourse.JSON`)
    .then(res => res.json())
    .then(data => setService(data))

}, [])
    return (

<Container>     
<Row xs={1} md={3} className="g-4">
    {
        service.map(sr => <Service
            key={sr.id}
            services={sr}></Service>)
    }
</Row>
</Container>
   
    );
};

export default Home;