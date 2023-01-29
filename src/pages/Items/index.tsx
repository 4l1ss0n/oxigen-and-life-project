import React from "react";

import "./Styles.css";
import { items } from "../../assets/contentExemples";
import Title from "../../components/Title";


export default function Materials() {
  const data: any[]= items;
  return (
    <div className="materials">
      <Title content={"Estoque/Itens de Estoque"}/>
      <div className="title-and-buttons">
          <h1 className="title">Itens de Estoque</h1>
          <div className="button-content">
            <button className="button" >Exportar em CSV</button>
            <button className="button" >Novas Aquisições</button>
          </div>
        </div>
      <div className="filter-content">
        <p className="divition-bar-text">Filtro</p>
        <div className="filter-selection">
          <div className="input-view">
            <label htmlFor="item-name-input">Nome</label>
            <input type="text" name="item-name-input" id="item-name-input"/>
          </div>
          <p className="filter-selection-text-middle">OU</p>
          <div className="input-view">
            <label htmlFor="item-name-input">Cod</label>
            <input type="text" name="item-code-input" id="item-code-input"/>
          </div>
        </div>
      </div>

      <div className="unit-list-content">
          <table className="unit-table">
            <tr className="unit-table-title">
              <th className="unit-table-title-text">Nome</th>
              <th className="unit-table-title-text">Tamanho</th>
              <th className="unit-table-title-text">Unidade</th>
              <th className="unit-table-title-text">Cor</th>
              <th className="unit-table-title-text">Preço de custo</th>
              <th className="unit-table-title-text">Ação</th>
            </tr>
            {
              data.map(list => (
                <tr className="unit-table-list" key={list.id}>
                  <td className="unit-table-list-text">{list.name}</td>
                  <td className="unit-table-list-text">{list.size}</td>
                  <td className="unit-table-list-text">{list.unit}</td>
                  <td className="unit-table-list-text">{list.color}</td>
                  <td className="unit-table-list-text">{list.price}</td>
                  <td className="unit-table-list-text">Editar | Excluir</td>
                </tr>
              ))
            }
          </table>
      </div>
    </div>
  );
};