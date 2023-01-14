import React from "react";
import { Routes, HashRouter, Route } from "react-router-dom";

import Header from "../../components/Header";
import Nav from "../../components/Nav";
import AddClients from "../AddClients";

import AllocationUnits from "../AllocationUnits";
import Clients from "../Clients";
import Materials from "../Materiais";

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
              <Route path="/materials" caseSensitive element={<Materials/>} />
              <Route path="/clients-add" caseSensitive element={<AddClients/>} />
            </Routes>
        </main>
      </div>
    </HashRouter>
  );
};