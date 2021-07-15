import { types } from "../types/types";

const initialState = {
  precio: 20,
};

export const coberturaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.robo:
      return {
        ...state,
        precio: state.precio + action.payload.precio,
      };
    case types.choque:
      return {
        ...state,
        precio: state.precio + action.payload.precio,
      };
    case types.atropello:
      return {
        ...state,
        precio: state.precio + action.payload.precio,
      };

    default:
      return state;
  }
};
