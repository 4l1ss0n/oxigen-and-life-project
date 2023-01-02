import React from "react";

import "./Styles.css";

import Home from "../../assets/home.svg";
import Store from "../../assets/store.svg";

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
          <p className="link-text">Estoque</p>
        </div>
        <div className="link-navigation-sub-class">
          <p className="link-text">Cadastrar UA</p>
          <p className="link-text">Movimentação de items</p>
          <p className="link-text">Novas Aquisições</p>
          <p className="link-text">Itens de Estoque</p>
          <p className="link-text">Dar Baixa de Itens</p>
          <p className="link-text">Recargas de Cilíndros</p>
          <p className="link-text">Relatórios de Estoque</p>
        </div>
      </div>
      

    </nav>
  );
};

export default Nav;