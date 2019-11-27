import React from 'react';
import { Navbar, Nav  } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/maps.css'

const ExtraNav = () => {
    
    return(

        <Navbar className="shadow-box-example z-depth-5" style={{backgroundColor: '#dfdfdf'}} variant="dark">
            <Navbar.Brand>
                <NavLink to="/">HEALTHGROUP</NavLink>
            </Navbar.Brand>
            <Nav className="justify-content-center" style={{marginLeft: '25%'}}>
                <Nav.Link>
                    <NavLink to="/" style={{color: '#000000', fontSize: '1.2rem'}}>Home</NavLink>
                </Nav.Link>
                <Nav.Link>
                    <NavLink to="/" style={{color: '#000000', fontSize: '1.2rem'}}>Map Clients</NavLink>
                </Nav.Link>
                <Nav.Link>
                    <NavLink to="/contact" style={{color: '#000000', fontSize: '1.2rem'}}>Contact</NavLink>
                </Nav.Link>
                <Nav.Link>
                    <NavLink to="/about" style={{color: '#000000', fontSize: '1.2rem'}}>About Us</NavLink>  
                </Nav.Link>               
            </Nav>          
        </Navbar>
    )
}

export default ExtraNav