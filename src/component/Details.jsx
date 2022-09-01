import React from 'react';
import two from '../2.jpeg'
 import {Link} from 'react-router-dom'


function Details() {
    return ( 
        <>
       <h1 style={{textAlign:"center",color:"Purple",fontStyle:"italic",}}>Details</h1>
       <img src={two} alt="a homescreen on a laptop" style={{height:"70vh", width:"100%", marginBottom:"10px",marginTop:"10px"}}/>
<div style={{marginBottom: "35px",textAlign:'center'}}><Link to="/">Home</Link></div>
        </>
     );
}

export default Details;