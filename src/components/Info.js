import React from 'react';
import { NavLink } from 'react-router-dom';

const Info = () => {
    return(
  <div className="row text-center" style={{backgroundColor: '#ebdbb0'}}>
	  <div className="col-4 box1 pt-4">
        <a href="tel: (888) 459-2692"><i className="fa fa-phone fa-3x" style={{color: '#FA8A3B'}}></i>
        <h3 className="d-none d-lg-block d-xl-block" style={{color: '#000000'}}>Phone</h3>
        <p className="d-none d-lg-block d-xl-block" style={{color: '#000000'}}>(888) 459-2692</p></a>
      </div>
      <div className="col-4 box2 pt-4">
            <a href="https://www.facebook.com/pages/Healthgroup-West-LLC/104528122947989" target="_blank" className="p-3"><i className="fa fa-facebook fa-3x" style={{color: '#FA8A3B'}}></i></a>       
            <h3 className="d-none d-lg-block d-xl-block" style={{color: '#000000'}}>Follow Us</h3>
            <p className="d-none d-lg-block d-xl-block" style={{color: '#000000'}}>@HealthGroupWest</p>     
      </div>
      <div className="col-4 box3 pt-4">
        <a href="mailto:test@test.com"><i className="fa fa-envelope fa-3x" style={{color: '#FA8A3B'}}></i>
        <h3 className="d-none d-lg-block d-xl-block" style={{color: '#000000'}}>E-mail</h3>
        <p className="d-none d-lg-block d-xl-block" style={{color: '#000000'}}> info2@healthgroupwest.com</p></a>
      </div>
	</div>
    )
}

export default Info