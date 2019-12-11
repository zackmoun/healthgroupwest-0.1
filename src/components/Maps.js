import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import * as parkData from "../data/locations-client.json";
import mapStyles from "../mapStyles";
require('dotenv').config();

function Map() {
  const [selectedPark, setSelectedPark] = useState(null);
  
  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (

    <GoogleMap
      defaultZoom={4.5}
      defaultCenter={{ lat: 41.8875355, lng: -102.378298 }}
      //defaultOptions={{ styles: mapStyles }}
      defaultOptions={{
        styles: mapStyles,
       // these following 7 options turn certain controls off see link below
        streetViewControl: false,
        scaleControl: false,
        mapTypeControl: false,
        panControl: false,
        zoomControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUI: true,
        
      }} 
      //disableDefaultUI     
    >
      {parkData.features.map(location => (
        <Marker
          key={location.properties.PLOCATION_ID}
          position={{
            lat: location.geometry.coordinates[1],
            lng: location.geometry.coordinates[0]
          }}
          onClick={() => {
            setSelectedPark(location);
          }}
          icon={{
            url: `/pin-2.svg`,
            //url: `../assets/icon.svg`,`
            //fill: '#FA8A3B',
            scaledSize: new window.google.maps.Size(25, 25),
            draggable:true,
            position: 'center',
            cursor: 'move',
            
          }}
          
        />
      ))}
      {selectedPark && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedPark(null);
          }}
          position={{
            lat: selectedPark.geometry.coordinates[1],
            lng: selectedPark.geometry.coordinates[0]
          }}
        >
          <div style={{width: '200px', height: 'auto'}}>
            <h4>{selectedPark.properties.Description}</h4>
            <hr className={orangeLine}/>
            <p style={{padding: '2px'}}><span style={{fontWeight: 'bold'}}>Client Type:</span> {selectedPark.properties.ClientType}</p>
            <p style={{padding: '2px'}}><span style={{fontWeight: 'bold'}}>Engagement Type:</span> {selectedPark.properties.Engagement}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function ExtraMaps() {
  return (
    <div style={{ width: '100%', height: "800px", position: 'relative', overflow: 'hidden'}}>
      <div style={{height: '100%', width: '100%', position: 'absolute', top: '0px', left: '0px', backgroundColor: 'rgb(229, 227, 223)'}}>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
      
      

    </div>
  );
}

const orangeLine = {
    //border: '1px solid linear-gradient(to left, transparent, rgba(239, 130, 0, 1), transparent)',
    border: '2px solid',
    borderColor: 'ef8200'
  }