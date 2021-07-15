import { types } from "../types/types";

const initialState = {
  name: null,
  doc: null,
  celular: null,
  placa: null,
  logged: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        name: action.payload.name,
        doc: action.payload.doc,
        celular: action.payload.celular,
        placa: action.payload.placa,
        logged: true,
      };
    case types.verificarCliente:
      return {
        name: action.payload.name,
        doc: action.payload.doc,
        celular: action.payload.celular,
        placa: action.payload.placa,
        logged: action.payload.logged,
      };
    case types.logout:
      return {
        logged: false,
      };
    default:
      return state;
  }
};
