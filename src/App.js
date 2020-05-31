import React from "react";

import "./App.css";
import { Navigation } from "./components/Navigation";
import { Vehicle } from "./components/Vehicle";
import { VehicleSpace } from "./components/VehicleSpace";
import { Home } from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="d-flex justify-content-centre"> Parking lot application!! Hey ash_k,</h3>
      
        <Navigation />
       
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/vehicle" component={Vehicle} />
          <Route path="/slots" component={VehicleSpace} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
