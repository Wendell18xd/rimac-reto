import React from "react";

export const FormDatos = () => {
  return (
    <div className="formhome">
      <form className="formhome__form" autoComplete="off">
        <div className="form__title">
          <h2>Déjanos tus datos</h2>
        </div>
        <div className="form__group">
          <select className="form__select">
            <option value="dni">DNI</option>
            <option value="ce">CE</option>
          </select>
          <input
            className="form__input"
            type="text"
            placeholder="Nro. de doc"
          />
        </div>
        <div className="form__group">
          <input className="form__input" type="text" placeholder="Celular" />
        </div>
        <div className="form__group">
          <input className="form__input" type="text" placeholder="Placa" />
        </div>
        <div className="form__acepto">
          <input className="form__input" type="checkbox" />
          <p>
            Acepto la Politica de <span>Proteccion de Datos Personales</span> y
            los <span>Terminos y Condiciones</span>
          </p>
        </div>
        <div className="form__group mt-10">
          <button className="btn btn--primary ">COTÍZALO</button>
        </div>
      </form>
    </div>
  );
};
