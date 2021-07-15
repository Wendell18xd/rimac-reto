import { types } from "../types/types";

export const robo = (active) => {
  if (active) {
    return {
      type: types.robo,
      payload: {
        precio: +15,
      },
    };
  }
  if (!active) {
    return {
      type: types.robo,
      payload: {
        precio: -15,
      },
    };
  }
};

export const choque = (active) => {
  if (active) {
    return {
      type: types.choque,
      payload: {
        precio: +20,
      },
    };
  }
  if (!active) {
    return {
      type: types.choque,
      payload: {
        precio: -20,
      },
    };
  }
};

export const atropello = (active) => {
  if (active) {
    return {
      type: types.atropello,
      payload: {
        precio: +50,
      },
    };
  }
  if (!active) {
    return {
      type: types.atropello,
      payload: {
        precio: -50,
      },
    };
  }
};
