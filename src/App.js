import React from "react";
import Router from "./navigation/Router";
import ExtraNav from "./components/Nav";

export default function App() {
 
  return (
    <React.Fragment>
      <ExtraNav/>
      <Router/>
    </React.Fragment>
    
  );
}
