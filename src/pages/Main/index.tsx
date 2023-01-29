import React from "react";
import { Routes, HashRouter, Route } from "react-router-dom";

import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Acquisition from "../Acquisition";
import AddAllocationUnit from "../AddAllocationUnit";
import AddClients from "../AddClients";

import AllocationUnits from "../AllocationUnits";
import CheckOffItems from "../CheckOffItems";
import Clients from "../Clients";
import Materials from "../Items";

import "./Styles.css";

export default function Main() {
  return (
    <HashRouter basename="/">
      <div className="main-page">
        <Header/>
        <main className="main-content">
          <Nav/>
            <Routes>
              <Route path="/" caseSensitive element={<Clients/>} />
              <Route path="/alocation-unit" caseSensitive element={<AllocationUnits/>} />
              <Route path="/allocation-unit-add" caseSensitive element={<AddAllocationUnit/>} />
              
              <Route path="/stock-items" caseSensitive element={<Materials/>} />
              <Route path="/acquisition" caseSensitive element={<Acquisition/>} />
              <Route path="/check-off-items" caseSensitive element={<CheckOffItems/>} />


              <Route path="/clients" caseSensitive element={<Clients/>} />
              <Route path="/clients-add" caseSensitive element={<AddClients/>} />
            </Routes>
        </main>
      </div>
    </HashRouter>
  );
};