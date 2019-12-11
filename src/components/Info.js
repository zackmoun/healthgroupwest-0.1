import React from 'react';
import { NavLink } from 'react-router-dom';

const Info = () => {
    return(
  <div className="row text-center" style={{backgroundColor: '#ebdbb0'}}>
	  <div className="col-4 box1 pt-4">
        <a href="tel:+123456789"><i className="fa fa-phone fa-3x" style={{color: '#FA8A3B'}}></i>
        <h3 className="d-none d-lg-block d-xl-block" style={{color: '#000000'}}>Phone</h3>
        <p className="d-none d-lg-block d-xl-block" style={{color: '#000000'}}>+123456789</p></a>
      </div>
      <div className="col-4 box2 pt-4">
        <NavLink to=""><i className="fa fa-home fa-3x" style={{color: '#FA8A3B'}}></i>
        <h3 className="d-none d-lg-block d-xl-block" style={{color: '#000000'}}>Address</h3>
        <p className="d-none d-lg-block d-xl-block" style={{color: '#000000'}}>Health Group, 1, 10001 New York US</p></NavLink>
      </div>
      <div className="col-4 box3 pt-4">
        <a href="mailto:test@test.com"><i className="fa fa-envelope fa-3x" style={{color: '#FA8A3B'}}></i>
        <h3 className="d-none d-lg-block d-xl-block" style={{color: '#000000'}}>E-mail</h3>
        <p className="d-none d-lg-block d-xl-block" style={{color: '#000000'}}>test@test.com</p></a>
      </div>
	</div>
    )
}

export default Info