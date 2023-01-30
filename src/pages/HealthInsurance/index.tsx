import React from "react";
import { Convenio } from "../../assets/contentExemples";
import Title from "../../components/Title";

import "./Styles.css";

export default function HealthInsurance() {
  const data = Convenio;
  return (
    <div className="health-insurance">
      <Title content="Clientes/Convênio"/>
      <div className="title-and-buttons">
        <h1 className="title">Convênio</h1>
        <div className="button-content">
          <button className="action-button" >Exportar em CSV</button>
          <button className="action-button" >Adicionar Convênio</button>
        </div>
      </div>
      <div className="filter-content">
        <p className="divition-bar-text">Filtro</p>
        <div className="filter-selection">
          <select name="filial" id="filial" className="input">
            <option value="hospital1">Hospital 1</option>
            <option value="hospital2">Hospital 2</option>
            <option value="hospital3">Hospital 3</option>
            <option value="hospital4">Hospital 4</option>
          </select>
          <button className="action-button" >Pesquisar Conveniados</button>
        </div>
      </div>
      <div className="unit-list-content">
          <table className="unit-table">
            <tr className="unit-table-title">
              <th className="unit-table-title-text">Nome</th>
              <th className="unit-table-title-text">Documento(CPF/CNPJ)</th>
              <th className="unit-table-title-text">Cidade</th>
              <th className="unit-table-title-text">Numero de Identificação</th>
              <th className="unit-table-title-text">Ação</th>
            </tr>
            {
              data.map((list, index) => (
                <tr className="unit-table-list" key={index}>
                  <td className="unit-table-list-text">{list.name}</td>
                  <td className="unit-table-list-text">{list.document}</td>
                  <td className="unit-table-list-text">{list.city}</td>
                  <td className="unit-table-list-text">{list.identificationNumber}</td>
                  <td className="unit-table-list-text">Editar | Excluir</td>
                </tr>
              ))
            }
          </table>
      </div>
    </div>
  );
};