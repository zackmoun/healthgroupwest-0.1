import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => {
    return(
        <div className="row text-center text-white" id="author" style={{backgroundColor: '#dfdfdf'}}>

            <div className="col-12 mt-4 p-3">
            <NavLink to="/" style={{color: '#000000'}}>© 2019 - Health Group West</NavLink>
            </div>
     </div>
    )
}

export default Footer