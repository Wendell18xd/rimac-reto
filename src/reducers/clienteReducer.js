import { types } from "../types/types";

const initialState = {
  dni: null,
  agas: null,
  fecha: null,
  marca: null,
  sumaasegurada: null,
};

export const clienteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.datosauto:
      return {
        dni: action.payload.dni,
        agas: action.payload.agas,
        fecha: action.payload.fecha,
        marca: action.payload.marca,
        sumaasegurada: action.payload.sumaasegurada,
      };
    case types.mantenerDatosauto:
      return action.payload.data;
    default:
      return state;
  }
};
