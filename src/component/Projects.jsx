import React from 'react';
import six from '../6.jpeg'
import eight from '../8.jpeg'
import nine from '../9.jpeg'
import ten from '../10.jpeg'
import {Link} from 'react-router-dom'

function Projects() {
    return ( 
        <>
       <h1 style={{textAlign:"center",color:"Purple",fontStyle:"italic",}}>ADVENTURES</h1>
       
       <div className='container'>
        <div className='row'>
        <div class="col-md-3">
        <h3> Ocean Life</h3>
             <img src={six} alt="about pizzalux" style={{height:"60vh"}} className="img-responsive" />
            </div>

            <div class="col-md-3">
                <h3> The Birds</h3>
                <img src={eight} alt="about pizzalux" style={{height:"60vh"}} className="img-responsive"/>
                </div>

                <div class="col-md-3">
                <h3> Field Animals</h3>
                <img src={nine} alt="about pizzalux" style={{height:"60vh"}} className="img-responsive"/>
                </div>

                <div class="col-md-3">
                <h3> Mountainside, Seaside & Forestside Places</h3>
                <img src={ten} alt="about pizzalux" style={{height:"60vh",width:"120%"}} className="img-responsive"/>
                </div>
       </div>
       </div>
       <h4 style={{marginBottom: "35px",textAlign:'center', marginTop:"20px"}}><Link to="/">Home</Link></h4>
        </>
     );
}

export default Projects;