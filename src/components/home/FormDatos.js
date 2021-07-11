import React from "react";

export const FormDatos = () => {
  return (
    <div className="formulario">
      {/* Titulo */}
      <div className="formulario-titulo">
        <h1 className="formulario-titulo__text">Déjanos tus datos</h1>
      </div>
      {/* Inputs form */}
      <form>
        <div className="formulario-inputs">
          <div className="formulario-inputs__group">
            <select>
              <option value="DNI">DNI</option>
            </select>
            <input type="text" placeholder="Nro. de doc" />
          </div>
          <div className="formulario-inputs__group">
            <input type="text" placeholder="Celular" />
          </div>
          <div className="formulario-inputs__group">
            <input type="text" placeholder="Placa" />
          </div>
        </div>
        {/* Politicas */}
        <div className="formulario-politicas">
          <input className="formulario-politicas__checkbox" type="checkbox" />
          <p className="formulario-politicas__terminos">
            Acepto la <span>Política de Protecciòn de Datos Personales</span> y
            los <span>Términos y Condiciones.</span>
          </p>
        </div>
        {/* botton */}
        <div className="formulario-botton">
          <button className="btn btn--primary">
            <span className="formulario-botton__texto">COTÍZALO</span>
          </button>
        </div>
      </form>
    </div>
  );
};
