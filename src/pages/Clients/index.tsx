import React from "react";


import "./Styles.css";
import Foward from "../../assets/undo.svg";
import { clients } from "../../assets/contentExemples";

export default function Clients() {
  const data = clients;
  return (
    <div className="clients">
      <div className="content-header">
        <p className="path">
          <img src={Foward} alt="foward" />
          Estoque/Unidates de Alocação</p>
        <div className="content-header-title-and-buttons">
          <h1 className="title">Clientes</h1>
          <div className="button-content">
            <button className="button" >Exportar em CSV</button>
            <button className="button" >Novo Cliente</button>
          </div>
        </div>
      </div>
      <div className="filter-content">
        <p className="divition-bar-text">Filtro</p>
        <div className="filter-selection">
          <div className="input-view">
            <label htmlFor="item-id-input">Número de identificação</label>
            <input type="text" name="item-id-input" id="item-id-input"/>
          </div>
          <div className="input-view">
            <label htmlFor="item-name-input">Nome</label>
            <input type="text" name="item-name-input" id="item-name-input"/>
          </div>
          <div className="input-view">
            <label htmlFor="item-cnpj-cpf-input">CNPJ/CPF</label>
            <input type="text" name="item-cnpj-cpf-input" id="item-cnpj-cpf-input"/>
          </div>
          <div className="input-inline-and-button">
            <div className="input-inline">
              <div className="input-view">
                <label htmlFor="item-name-input">Tipo</label>
                <input type="text" name="item-code-input" id="item-code-input"/>
              </div>
              <div className="input-view">
                <label htmlFor="item-name-input">Classe</label>
                <input type="text" name="item-code-input" id="item-code-input"/>
              </div>
            </div>
            <div className="inline-button">
              <button className="button" >Pesquisar</button>
            </div>         
          </div>
        </div>
      </div>

      <div className="unit-list-content">
          <table className="unit-table">
            <tr className="unit-table-title">
              <th className="unit-table-title-text">Nome</th>
              <th className="unit-table-title-text">Documento(CPF/CNPJ)</th>
              <th className="unit-table-title-text">Cidade</th>
              <th className="unit-table-title-text">Classe</th>
              <th className="unit-table-title-text">Número de Identificação</th>
            </tr>
            {
              data.map(list => (
                <tr className="unit-table-list" key={list.id}>
                  <td className="unit-table-list-text">{list.name}</td>
                  <td className="unit-table-list-text">{list.document}</td>
                  <td className="unit-table-list-text">{list.city}</td>
                  <td className="unit-table-list-text">{list.class}</td>
                  <td className="unit-table-list-text">{list.identificationNumber}</td>
                </tr>
              ))
            }
          </table>
      </div>
    </div>
  );
}