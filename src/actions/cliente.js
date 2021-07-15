import { types } from "../types/types";

export const datosauto = (dni, data) => {
  localStorage.setItem("datosauto", JSON.stringify({ dni, ...data }));
  return {
    type: types.datosauto,
    payload: {
      dni,
      ...data,
    },
  };
};

export const mantenerDatosauto = () => {
  if (localStorage.getItem("datosauto")) {
    const data = JSON.parse(localStorage.getItem("datosauto"));
    return {
      type: types.mantenerDatosauto,
      payload: {
        data,
      },
    };
  }
};
