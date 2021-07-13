import React from "react";
import { AddorRemove } from "./AddorRemove";
import { Cobertura } from "./Cobertura";

import arrowleftred from "../../img/arrowleftred.svg";
import { useHistory } from "react-router-dom";

export const Left = () => {
  const history = useHistory();

  const back = () => {
    history.goBack();
  };

  return (
    <div className="armaplan-left">
      <div className="armaplan-left-volver">
        <button type="button" onClick={back}>
          <img src={arrowleftred} alt="<" />
        </button>
        <p>volver</p>
      </div>
      <Cobertura />
      <AddorRemove />
    </div>
  );
};
