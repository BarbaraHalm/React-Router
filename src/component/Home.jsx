import React from 'react';
import { Button } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import three from '../3.jpeg'
import four from '../4.jpeg'
import five from '../5.jpeg'


function Home() {
    let navigate = useNavigate()
    return ( 
        <>
       <h1 style={{textAlign:"center",color:"Purple",fontStyle:"italic",}}> Home Page </h1>
   <div className="containerFluid">

    <div className='row'>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={three}
          alt="First slide"
          style={{height:"70vh", width:"100%", marginBottom:"10px",marginTop:"10px"}}
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={four}
          alt="Second slide"
          style={{height:"70vh", width:"100%", marginBottom:"10px",marginTop:"10px"}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={five}
          alt="Third slide"
          style={{height:"70vh", width:"100%", marginBottom:"10px",marginTop:"10px"}}
        />
      </Carousel.Item>
    </Carousel>
		
			<div style={{textAlign:"center"}}>
			<Link to="/contact" style={{marginBottom: "35px"}}>Contact</Link>
			
			<Button onClick={() => {navigate("/projects")}} style={{marginLeft: "15px", marginBottom: "10px", padding:"2px 2px"}}> Projects </Button>
			<br/>
			
			</div>
            </div>
            </div>
    
        </>
     );
}

export default Home;