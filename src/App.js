import React from "react";

import "./App.css";
import { Navigation } from "./components/Navigation";
import { QueryVehicleTypes } from "./components/QueryVehicleTypes";
import { VehicleSpace } from "./components/VehicleSpace";
import { Home } from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        
        {/* 1 */}
        <h3 className="m-3 justify-content-right"> Parking lot application!!</h3>
        {/* 2 */}
        <Navigation />
        {/* 3 */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/vehicle" component={QueryVehicleTypes} />
          <Route path="/slots" component={VehicleSpace} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
