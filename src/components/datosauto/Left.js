import React from "react";

import line from "../../img/Line.svg";
import mass from "../../img/mass.svg";
import arrow from "../../img/arrow.svg";
import raya from "../../img/raya.png";
import rayita from "../../img/rayita.svg";
import { Right } from "./Right";
import { Footer } from "../Footer";
import { logout } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { datosauto, mantenerDatosauto } from "../../actions/cliente";
import { useHistory } from "react-router-dom";
import { fecha, marcas } from "../../helpers/datos";

const schema = yup.object().shape({
  fecha: yup.string().required("El campo es obligatorio"),
  marca: yup.string().required("El campo es obligatorio"),
  agas: yup.string().required("El campo es obligatorio"),
});

export const Left = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { name, doc } = useSelector((state) => state.auth);
  const submit = JSON.parse(localStorage.getItem("datosauto"));
  const lastname = name?.split(" ");

  const { register, handleSubmit, setValue, getValues } = useForm({
    resolver: yupResolver(schema),
  });

  const back = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (submit) {
      dispatch(mantenerDatosauto());
    }
  }, [dispatch, submit]);

  const onSubmit = (data) => {
    dispatch(datosauto(doc, data));
    history.replace("/auth/armaplan");
  };

  useEffect(() => {
    setValue("sumaasegurada", 14300);
  }, [setValue]);

  const aumentar = () => {
    if (getValues("sumaasegurada") < 16500) {
      setValue("sumaasegurada", getValues("sumaasegurada") + 100);
    }
  };

  const menos = () => {
    if (getValues("sumaasegurada") > 12500) {
      setValue("sumaasegurada", getValues("sumaasegurada") - 100);
    }
  };

  return (
    <>
      <div className="datosauto-left">
        <div className="datosauto-left-volver">
          <button onClick={back}> {"<"} </button>
          <p>VOLVER</p>
        </div>
        <div className="datosauto-left-titulo">
          <h1>
            ¡Hola, <span>{lastname?.[0]}!</span>
          </h1>
          <p>Completa los datos de tu auto</p>
        </div>
        <div className="datosauto-left-formulario">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="datosauto-left-formulario-content">
              <div>
                <div className="datosauto-left-formulario__group">
                  <label>Año</label>
                  <select {...register("fecha")}>
                    {fecha.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="datosauto-left-formulario__group">
                  <label>Marca</label>
                  <select {...register("marca")}>
                    {marcas.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <Right />
            </div>
            <div className="datosauto-left-formulario-sino">
              <span>¿Tu auto es a gas?</span>
              <div className="datosauto-left-formulario-sino__group">
                <div className="datosauto-left-formulario-sino__radio">
                  <input
                    type="radio"
                    id="si"
                    {...register("agas")}
                    defaultValue="si"
                  />
                  <label htmlFor="si">Sí</label>
                </div>
                <div className="datosauto-left-formulario-sino__radio">
                  <input
                    type="radio"
                    id="no"
                    {...register("agas")}
                    defaultChecked="true"
                    defaultValue="no"
                  />
                  <label htmlFor="no">No</label>
                </div>
              </div>
            </div>
            <div className="datosauto-left-formulario-raya">
              <img src={raya} alt="raya" />
            </div>
            <div className="datosauto-left-formulario-suma">
              <div className="datosauto-left-formulario-suma__text">
                <p>Indica la suma asegurada</p>
                <p>
                  <span className="datosauto-left-formulario-suma__min">
                    MIN $12,500
                  </span>
                  <img src={rayita} alt="|" />
                  <span className="datosauto-left-formulario-suma__max">
                    MAX $16,500
                  </span>
                </p>
              </div>
              {/* SUMAS Y RESTAR -- Inicio */}
              <div className="datosauto-left-formulario-suma-accion">
                <button
                  className="datosauto-left-formulario-suma-accion__menos"
                  type="button"
                  onClick={menos}
                >
                  <img src={line} alt="-" />
                </button>
                <span>
                  ${" "}
                  <input
                    type="number"
                    readOnly
                    {...register("sumaasegurada")}
                  />
                </span>
                <button
                  className="datosauto-left-formulario-suma-accion__mas"
                  type="button"
                  onClick={aumentar}
                >
                  <img src={mass} alt="+" />
                </button>
              </div>
              {/* SUMAS Y RESTAR -- End */}
            </div>
            <div className="datosauto-left-formulario-continuarbtn">
              <button
                type="submit"
                className="btn btn--primary datosauto-left-formulario-continuarbtn__next"
              >
                <span>CONTINUAR</span> <img src={arrow} alt="arrow" />{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
