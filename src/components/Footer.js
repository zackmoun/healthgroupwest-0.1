import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => {
    return(
        <div className="row text-center text-white" id="author" style={{backgroundColor: '#dfdfdf'}}>
            
            <div className="col-12 my-3">
        
            <a href="https://www.facebook.com/pages/Healthgroup-West-LLC/104528122947989" target="_blank" className="p-3"><i className="fa fa-facebook fa-2x" style={{color: '#FA8A3B'}}></i></a>
           
            </div>
            <div className="col-12 mt-4 p-3">
            <NavLink to="/" style={{color: '#000000'}}>© 2019 - Health Group West</NavLink>
            </div>
     </div>
    )
}

export default Footer