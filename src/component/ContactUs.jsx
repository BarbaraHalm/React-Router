import React from 'react';
import {useParams,useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import one from '../1.jpeg'

function ContactUs() {
    let {id} = useParams()
    let navigate = useNavigate()
    return (  
        <>
        <h2 style={{marginLeft: "15px", marginBottom: "10px",marginTop:'10px',padding:"2px 2px",
        color:"Purple",fontStyle:"italic"}}>Contact Details of{id}</h2>
    <Card style={{ width: '18rem',marginLeft: "50px" }}>
      <Card.Img variant="top" src={one} />
      <Card.Body>
        <Card.Title style={{textAlign:"center",fontStyle:"italic",fontSize:"25px",color:"turquoise"}}>THE CEO OF BARBS EXOTIC NATURE</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={() => {navigate("/projects")}}variant="primary">Go To Adventure</Button>
      </Card.Body>
    </Card>
    </>

    );
}

export default ContactUs;