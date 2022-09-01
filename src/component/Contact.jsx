import React from 'react';
import {Link} from 'react-router-dom'
import seven from "../7.jpeg"

function Contact() {
    return ( 
        <>
       <h1 style={{textAlign:"center",color:"Purple",fontStyle:"italic",}}>Contact Page</h1>
       <img
          className="d-block w-100"
          src={seven}
          alt="First slide"
          style={{height:"68vh", width:"100%", marginBottom:"10px",marginTop:"10px",fontSize:"15px"}}
        />
        <div style={{marginLeft: "15px", marginBottom: "35px", padding:"2px 2px",textAlign:"center"}}>
       <Link to="/contactus: MS.HALM-ACQUAH">Contact The CEO </Link>
       </div>
        </>
     );
}
 
export default Contact;