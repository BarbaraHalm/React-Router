import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './component/Home';
import Contact from './component/Contact';
import Projects from './component/Projects';
import Navy from './component/Navy';
import Details from './component/Details';
import ErrorPage from './component/ErrorPage';
import ContactUs from './component/ContactUs';

function Routing() {
    return ( 
        <>
        <BrowserRouter>
        <Navy/>
        <Routes>
                <Route path="/" element={<Home/>}/>
				<Route path="/contact" element={<Contact />} />
				<Route path="/details" element={<Details />} />
				<Route path="/projects" element={<Projects />} />
                <Route path="/contactus:id" element={<ContactUs/>}/>
                <Route path="*" element={<ErrorPage />} />


        
        </Routes>
        </BrowserRouter>
        </>
     );
}

export default Routing;