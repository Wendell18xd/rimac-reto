import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { consultarPersona } from "../../actions/auth";

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
  placa: yup
    .string()
    .required("La placa es obligatoria")
    .min(7, "El minimo son 7 digitos")
    .length(7),
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

  const dispatch = useDispatch();

  const [flag, setFlag] = useState(true);

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

    if (name === "placa") {
      if (value.length === 0) {
        setFlag(true);
      }
      if (value.length === 3 && flag) {
        setValue("placa", value.toUpperCase() + "-");
        setFlag(false);
      }

      if (value.length >= 7) {
        setValue("placa", value.slice(0, 7).toUpperCase());
        setFlag(false);
      }
    }
  };

  const onSubmit = async ({ numerodoc, celular, placa, politicas }) => {
    if (!politicas) {
      return setError("politicas", {
        type: "aceptar",
        message: "Acepte los terminos primero",
      });
    }

    dispatch(consultarPersona(numerodoc, celular, placa));
    reset();
  };

  return (
    <div className="formulario">
      {/* Titulo */}
      <div className="formulario-titulo">
        <h1 className="formulario-titulo__text">D??janos tus datos</h1>
      </div>
      {/* Inputs form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formulario-inputs">
          <p className="formulario-errores">{errors.selectdoc?.message}</p>
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
            <p className="formulario-errores">{errors.numerodoc?.message}</p>
          </div>
          <div className="formulario-inputs__group">
            <input
              type="number"
              placeholder="Celular"
              {...register("celular")}
              onInput={maxlench}
            />
            <p className="formulario-errores">{errors.celular?.message}</p>
          </div>
          <div className="formulario-inputs__group">
            <input
              type="text"
              placeholder="Placa"
              {...register("placa")}
              onInput={maxlench}
            />
            <p className="formulario-errores">{errors.placa?.message}</p>
          </div>
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
            Acepto la <span>Pol??tica de Protecci??n de Datos Personales</span> y
            los <span>T??rminos y Condiciones.</span>
          </p>
          <p className="formulario-errores-politica">
            {errors.politicas?.message}
          </p>
        </div>

        {/* botton */}
        <div className="formulario-botton">
          <button className="btn btn--primary">
            <span className="formulario-botton__texto">COT??ZALO</span>
          </button>
        </div>
      </form>
    </div>
  );
};
