import React from "react";

import "./Styles.css";
import Foward from "../../assets/undo.svg";
import Information from "../../assets/information.svg";
import AddNote from "../../assets/add-note.svg";


export default function AddAllocationUnit() {
  return (
    <div className="add-allocation-unit">
      <div className="content-header">
        <p className="path">
          <img src={Foward} alt="foward" />
          Unidades de Alocação/Cadastrar Unidade de Alocação</p>
        <div className="content-header-title">
          <h1 className="title">Cadastrar Unidade de Alocação</h1>
        </div>
      </div>
      <div className="add-allocation-unit-form">
        <form className="form-view">
          <div className="horizontal-view">
            <input type="text" className="input" placeholder="Nome" />
            <div className="input-block">
              <input type="text" className="input" placeholder="Código" />
              <img src={Information} alt="information" /> 
            </div>
          </div>
          <div className="input-block">
            <select name="filial" id="filial" className="input">
              <option value="filial">Filial</option>
              <option value="filial1">Filial 1</option>
            </select>
            <img src={AddNote} alt="add-note" /> 
          </div>
          <div className="allocation-type">
            <p className="title">Tipo de alocação</p>
            <div className="allocation-type-input">
              <div className="input-radio-view">
                <input type="radio" name="allocation-type-input" id="client" />
                <label htmlFor="client">Cliente</label>
              </div>
              <div className="input-radio-view">
                <input type="radio" name="allocation-type-input" id="CD" />
                <label htmlFor="CD">Centro de distribuição</label>
              </div>
              <div className="input-radio-view">
                <input type="radio" name="allocation-type-input" id="vehicle" />
                <label htmlFor="vehicle">Veículo</label>
              </div>
              <div className="input-radio-view">
                <input type="radio" name="allocation-type-input" id="refill-center" />
                <label htmlFor="refill-center">Centro de Recarga</label>
              </div>

            </div>
          </div>
          <div className="horizontal-view">
            <input type="text" className="input" placeholder="Cidade" />
            <input type="text" className="input" placeholder="Estado" />
          </div>
          <div className="details-textview">
            <p className="title">Detalhes</p>
            <textarea name="details-textarea" className="details-input" ></textarea>
          </div>
          <div className="button-view">
            <button>Cadastrar UA</button>
          </div>
        </form>
      </div>
    </div>
  );
};