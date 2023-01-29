import React from "react";
import { NavLink } from "react-router-dom";

import "./Styles.css";

import Home from "../../assets/home.svg";
import Store from "../../assets/store.svg";
import User from "../../assets/user.svg";

const Nav = () => {
  return (
    <nav className="navigation">
      <div className="link-navigation-view">
        <div className="link-navigation-header">
          <img src={Home} alt="Home" className="link-img" />
          <p className="link-text">Home</p>
        </div>
      </div>
      <div className="link-navigation-view">
        <div className="link-navigation-header">
          <img src={Store} alt="Store" className="link-img" />
          <p className="link-text">Unidades de Alocação</p>
        </div>
        <div className="link-navigation-sub-class">
          <NavLink to="/alocation-unit" className="link-text">Unidades de Alocação</NavLink>
          <NavLink to="/allocation-unit-add" className="link-text">Cadastrar UA</NavLink>
        </div>
      </div>
      <div className="link-navigation-view">
        <div className="link-navigation-header">
          <img src={Store} alt="Store" className="link-img" />
          <p className="link-text">Estoque</p>
        </div>
        <div className="link-navigation-sub-class">
          <NavLink to="/stock-items" className="link-text">Itens de Estoque</NavLink>
          <NavLink to="/acquisition" className="link-text">Novas Aquisições</NavLink>
          <NavLink to="/check-off-items" className="link-text">Dar Baixa de Itens</NavLink>
        </div>
      </div>
      <div className="link-navigation-view">
        <div className="link-navigation-header">
          <img src={User} alt="Store" className="link-img" />
          <p className="link-text">Clientes</p>
        </div>
        <div className="link-navigation-sub-class">
          <NavLink to="/clients" className="link-text">Clientes</NavLink>
          <NavLink to="/clients-add" className="link-text">Cadastrar Clientes</NavLink>
          <NavLink to="/agreements" className="link-text">Convênio</NavLink>
        </div>
      </div>
      <div className="link-navigation-view">
        <div className="link-navigation-header">
          <img src={User} alt="Store" className="link-img" />
          <p className="link-text">Materiais</p>
        </div>
        <div className="link-navigation-sub-class">
          <NavLink to="/materials" className="link-text">Materiais</NavLink>
          <NavLink to="/materials-add" className="link-text">Cadastrar Materiais</NavLink>
          <NavLink to="/provider-add" className="link-text">Cadastrar Fornecedor</NavLink>
        </div>
      </div>
      <div className="link-navigation-view">
        <div className="link-navigation-header">
          <img src={User} alt="Store" className="link-img" />
          <p className="link-text">Movimentações</p>
        </div>
        <div className="link-navigation-sub-class">
          <NavLink to="/items-movimentation" className="link-text">Movimentação de items</NavLink>
          <NavLink to="/cylinder-refill" className="link-text">Recargas de Cilíndros</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;