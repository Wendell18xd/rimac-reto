import { fetchapidni } from "../helpers/fetch";
import { types } from "../types/types";

export const consultarPersona = (dni, celular, placa) => {
  return async (dispatch) => {
    const data = await fetchapidni(dni);

    if (!data) {
      return alert("El dni no existe");
    }
    dispatch(login(data.nombres, dni, celular, placa));
  };
};

export const login = (name, dni, celular, placa) => {
  localStorage.setItem(
    "cliente",
    JSON.stringify({ name, dni, celular, placa, logged: true })
  );

  return {
    type: types.login,
    payload: {
      name,
      doc: dni,
      celular,
      placa,
    },
  };
};

export const verificarCliente = () => {
  if (localStorage.getItem("cliente")) {
    const { name, dni, celular, placa, logged } = JSON.parse(
      localStorage.getItem("cliente")
    );
    return {
      type: types.verificarCliente,
      payload: {
        name,
        doc: dni,
        celular,
        placa,
        logged,
      },
    };
  }

  if (!localStorage.getItem("cliente")) {
    return {
      type: types.verificarCliente,
      payload: {
        logged: false,
      },
    };
  }
};

export const logout = () => {
  localStorage.removeItem("cliente");
  localStorage.removeItem("datosauto");
  return {
    type: types.logout,
  };
};
