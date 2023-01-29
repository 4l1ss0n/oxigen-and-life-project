import React from "react";

import "./Styles.css";
import Search from "../../assets/search.svg";
import Title from "../../components/Title";


export default function CheckOffItems() {
  return (
    <div className="check-off-items">
      <Title content={"Estoque/Dar Baixa em Items de Estoque"} />
      <div className="title-view-and-export">
        <h1 className="title">Nova Aquisição de Itens</h1>
        <button className="button">Exportar Items Baixados em CSV</button>
      </div>
      <div className="information-content">
        <div className="date-input-view">
          <p className="checkoff-date-title">Data de Baixa</p>
          <input type="date" name="checkoff-date-input" id="checkoff-date-input" className="date-input" />
        </div>
        <form className="input-form">
          <table className="materials-table-view">
            {
              [1,2,3].map((index) =>(
                <tr className="materials-table-list">  
                  <td className="materials-list material-code">
                    <input type="text" placeholder="Cód. UA" className="input"/>
                    <img src={Search} alt="" />
                  </td>
                  <td className="materials-list">
                    <input type="text" className="input" placeholder="Cód. Material" />
                  </td>
                  <td className="materials-list">
                    <input type="text" className="input" placeholder="Quantidade"/>
                  </td>
                  <td className="materials-list">
                    <select name="status-select-input" className="input">
                      <option value="Cheio">Cheio</option>
                      <option value="Vazio">Vazio</option>
                      <option value="Com defeito">Com defeito</option>
                    </select>
                  </td>
                </tr>
              ))
            }
          </table>
          <div className="button-view">
          </div>
          <div className="input-textarea">
            <textarea name="cause" id="cause" cols={30} rows={10} placeholder="Motivo da Baixa"/>
          </div>
          <input type="text" placeholder="Responsável pela solicitação" className="responsavel-input" />
          <div className="button-view">
            <button className="form-button">Dar Baixa em Itens</button>
          </div>
        </form>
      </div>
      
    </div>
  );
};