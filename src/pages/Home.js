import React from 'react'
import ExtraMaps from '../components/Maps'
import Info from '../components/Info'
import Footer from '../components/Footer'

const Home = () => {
    return (
      <React.Fragment>
          <div className="container-fluid" style={{backgroundColor: '#ebdbb0'}}>
            <h1 className="text-center" style={{ 
                      backgroundColor: '#ebdbb0',
                      margin: 0,
                      padding: 16,                     
              }}> Map of our Clients</h1>
            <div className="row">
                <ExtraMaps/>
            </div>
            
            <Info/> 
        </div>
      <Footer/>
      </React.Fragment>
          
         
    )
}

export default Home;