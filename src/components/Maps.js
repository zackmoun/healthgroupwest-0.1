import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import * as parkData from "../data/data-clients.json";
import mapStyles from "../mapStyles";

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
      defaultOptions={{ styles: mapStyles }}
    >
      {parkData.features.map(park => (
        <Marker
          key={park.properties.PARK_ID}
          position={{
            lat: park.geometry.coordinates[1],
            lng: park.geometry.coordinates[0]
          }}
          onClick={() => {
            setSelectedPark(park);
          }}
          icon={{
            url: `/hospital-building.svg`,
            //url: `../assets/icon.svg`,
            scaledSize: new window.google.maps.Size(25, 25)
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
 const REACT_APP_GOOGLE_KEY = "AIzaSyAz1EdMGRGBuTyxJf2erpHt88SB9kneGBs"
  return (
    <div style={{ width: "100vw", height: "800px", position: 'relative', textAlign: 'center' }}>
      <h1 style={{ 
         backgroundColor: 'rgb(229, 227, 223)',
         padding: '15px',
          margin: 0,
          
          }}> Map of our Clients</h1>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          REACT_APP_GOOGLE_KEY  
        //process.env.REACT_APP_GOOGLE_KEY
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `800px` }} />}
        mapElement={<div style={{ height: '800px' }} />}
      />
    </div>
  );
}

const orangeLine = {
    //border: '1px solid linear-gradient(to left, transparent, rgba(239, 130, 0, 1), transparent)',
    border: '2px solid',
    borderColor: 'ef8200'
  }