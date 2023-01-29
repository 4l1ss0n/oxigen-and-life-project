import React from "react";

import "./Styles.css";
import AddNote from "../../assets/add-note.svg";
import Search from "../../assets/search.svg";

import Title from "../../components/Title";


export default function Acquisition() {
  return (
    <div className="acquisition">
      <Title content={"Estoque/Novas Aquisições"} />
      <div className="information-content">
        <h1 className="title">Nova Aquisição de Itens</h1>
        <label className="acquisition-date-label" htmlFor="acquisition-date">Data de aquisição</label><br />
        <input type="date" name="acquisition-date-input" id="acquisition-date-input" className="date-input" />
        <div className="horizontal-view">
          <input type="text" className="code-input" placeholder="Cód. Lote (Não editavél)"/>
          <img src={AddNote} alt="AddNote" />
        </div>
      </div>

      <div className="materials-content">
        <h2 className="sub-title">Materiais Adiquiridos</h2>
        <table className="materials-table-view">
          <tr className="materials-table-title">
            <th className="materials-title">Cód. Material</th>
            <th className="materials-title">Quantidade</th>
            <th className="materials-title">Preço unitário</th>
            <th className="materials-title">UA</th>
            <th className="materials-title">Status</th>
          </tr>
          {
              [1,2,3].map((index) =>(
                <tr className="materials-table-list">  
                  <td className="materials-list material-code">
                    <p className="code">2342</p>
                    <img src={Search} alt="" />
                  </td>
                  <td className="materials-list">20</td>
                  <td className="materials-list">365,00</td>
                  <td className="materials-list">UA-SAJ-Centro</td>
                  <td className="materials-list">Cheio</td>
                </tr>
              ))
            }
        </table>
        <div className="button-view">
          <button className="form-button">Cadastar Nova Aquisição</button>
        </div>
      </div>
    </div>
  );
};