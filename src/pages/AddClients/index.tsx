import React from "react";

import "./Styles.css";

import Title from "../../components/Title";

export default function AddClients() {
  return (
    <div className="add-clients">
      <Title content={"Clientes/adicionar clientes"} />
      <div className="add-clients-form">
        <form className="form-view">
          <div className="input-view">
            <p className="input-tittle">Numero de identificação</p>
            <input type="text" className="input" id="identification-number-input"/>
          </div>
          <div className="input-view">
            <p className="input-tittle">Classe</p>
            <input type="text" className="input" id="class-input" />
          </div>
          <div className="input-view">
            <p className="input-tittle">Convênio</p>
            <input type="text" className="input" id="convenio-input" />
          </div>
          <div className="input-view">
            <p className="input-tittle">Tipo</p>
            <input type="text" className="input" id="convenio-type-input" />
          </div>
          <div className="input-view">
            <p className="input-tittle">Status</p>
            <input type="text" className="input" id="status-input" />
          </div>
          <div className="input-view">
            <p className="input-tittle">CPF/CNPJ</p>
            <input type="text" className="input" id="cpf-cnpj-input" />
          </div>
          <div className="input-view">
            <p className="input-tittle">Nome</p>
            <input type="text" className="input" id="name-input" />
          </div>
          <div className="input-view">
            <p className="input-tittle">Telefone</p>
            <input type="text" className="input" id="phone-input" />
          </div>
          <div className="input-view">
            <p className="input-tittle">CEP</p>
            <input type="text" className="input" id="cep-input" />
          </div>
          <div className="input-view">
            <p className="input-tittle">Logradouro</p>
            <input type="text" className="input" id="postal-code-input" />
          </div>
          <div className="input-view">
            <p className="input-tittle">Nº</p>
            <input type="text" className="input" id="house-number-input" />
          </div>
          <div className="input-view">
            <p className="input-tittle">Bairro</p>
            <input type="text" className="input" id="neibhor-input" />
          </div>
          <div className="input-view">
            <p className="input-tittle">Cidade</p>
            <input type="text" className="input" id="city-input" />
          </div>
          <div className="input-view">
            <p className="input-tittle">Estado</p>
            <input type="text" className="input" id="state-input" />
          </div>
          <div className="button-view">
            <button type="submit" className="form-button">Cadastrar Cliente</button>
          </div>
        </form>
      </div>
    </div>
  );
};