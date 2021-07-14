import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  selectdoc: yup.string().required("Seleccione un tipo de doc"),
  numerodoc: yup
    .string("Ingrese un numero para continuar")
    .required("El campo es obligatorio")
    .min(8, "El dni tiene 8 caracteres")
    .length(8),
  celular: yup
    .string("Ingrese un numero para continuar")
    .required("El celular es obligatorio")
    .min(9, "Ingrese 9 digitos como minimo")
    .length(9),
  placa: yup.string().required("La placa es obligatoria"),
  politicas: yup.boolean().required(),
});

export const FormDatos = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const maxlench = ({ target }) => {
    const { name, value } = target;
    if (name === "numerodoc") {
      if (value.length >= 8) {
        setValue("numerodoc", value.slice(0, 8));
      }
    }

    if (name === "celular") {
      if (value.length >= 9) {
        setValue("celular", value.slice(0, 9));
      }
    }
  };

  const onSubmit = async (data) => {
    if (!data.politicas) {
      return setError("politicas", {
        type: "aceptar",
        message: "Acepte los terminos primero",
      });
    }

    const resp = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const json = await resp.json();
    console.log(json);
    reset();
  };

  return (
    <div className="formulario">
      {/* Titulo */}
      <div className="formulario-titulo">
        <h1 className="formulario-titulo__text">Déjanos tus datos</h1>
      </div>
      {/* Inputs form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formulario-inputs">
          <p>{errors.selectdoc?.message}</p>
          <div className="formulario-inputs__group">
            <select {...register("selectdoc")}>
              <option value="DNI">DNI</option>
            </select>
            <input
              className="formulario-inputs__group-doc"
              type="number"
              placeholder="Nro. de doc"
              {...register("numerodoc")}
              onInput={maxlench}
            />
          </div>
          <p>{errors.numerodoc?.message}</p>
          <div className="formulario-inputs__group">
            <input
              type="number"
              placeholder="Celular"
              {...register("celular")}
              onInput={maxlench}
            />
          </div>
          <p>{errors.celular?.message}</p>
          <div className="formulario-inputs__group">
            <input type="text" placeholder="Placa" {...register("placa")} />
          </div>
          <p>{errors.placa?.message}</p>
        </div>
        {/* Politicas */}
        <div className="formulario-politicas">
          <input
            className="formulario-politicas__checkbox"
            type="checkbox"
            defaultChecked="true"
            {...register("politicas")}
          />

          <p className="formulario-politicas__terminos">
            Acepto la <span>Política de Protecciòn de Datos Personales</span> y
            los <span>Términos y Condiciones.</span>
          </p>
          <br />
        </div>
        <p>{errors.politicas?.message}</p>
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
