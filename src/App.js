import React from "react";
import "./App.css"


import SideNav from "./components/sidenav";
import Navbar from "./components/navbar";

import Home from "./components/index";
import Travel from "./components/navbar/travel";
import Food from "./components/navbar/food";

// parent
import Planning from "./components/navbar/planning";
// children planning
import PlanningUpdate from "./components/navbar/planning/update";
import PlanningAdd from "./components/navbar/planning/add";
import PlanningCreate from "./components/navbar/planning/create";
// children planning

import {Routes,Route} from "react-router-dom";


function App() {

  const [cityId,setCityId]=React.useState(1);

  const getValueCity=React.useCallback((event)=>{
    setCityId(event.target.value);
  },[]);

  return (
    <div className="main-container d-flex">
        <SideNav onSetCity={getValueCity} />
        <div className="content">
          <Navbar />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="travel" element={<Travel cityDestination={cityId} />} />
            <Route path="food" index element={<Food />} />
            <Route path="planning" index element={<Planning />} />
            <Route path="planning/update" index element={<PlanningUpdate />} />
            <Route path="planning/add" index element={<PlanningAdd />} />
            <Route path="planning/create" index element={<PlanningCreate />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
