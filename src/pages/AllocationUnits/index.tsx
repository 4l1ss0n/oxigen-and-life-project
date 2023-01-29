import React from "react";
import { Filials } from "../../assets/contentExemples";

import "./Styles.css";

import Title from "../../components/Title";

export default function AllocationUnits() {
  const data = Filials;
  return (
    <div className="allocation-units">
      <Title content={"Unidades de Alocação"}/>
      <div className="title-and-buttons">
        <h1 className="title">Unidades de Alocação</h1>
        <div className="button-content">
          <button className="button" >Exportar em CSV</button>
          <button className="button" >Inserir Nova UA</button>
        </div>
      </div>
      <div className="filter-content">
        <p className="divition-bar-text">Filtro</p>
        <div className="filter-selection">
          <select name="filial" id="filial">
            <option value="">Filial Responsável</option>
            <option value="filial1">Filial 1</option>
          </select>
          <select name="unit-type" id="unit-type">
            <option value="">Tipo de UA</option>
            <option value="type1">Tipo 1</option>
          </select>
          <input type="text" name="unit-code" id="unit-code" placeholder="Cód UA"/>
        </div>
      </div>

      <div className="unit-list-content">
          <table className="unit-table">
            <tr className="unit-table-title">
              <th className="unit-table-title-text">Nome</th>
              <th className="unit-table-title-text">Filial</th>
              <th className="unit-table-title-text">Tipo</th>
              <th className="unit-table-title-text">Itens</th>
            </tr>
            {
              data.map(list => (
                <tr className="unit-table-list" key={list.id}>
                  <td className="unit-table-list-text">{list.name}</td>
                  <td className="unit-table-list-text">{list.filial}</td>
                  <td className="unit-table-list-text">{list.type}</td>
                  <td className="unit-table-list-text">{list.items}</td>
                </tr>
              ))
            }
          </table>
      </div>

    </div>
  );
};