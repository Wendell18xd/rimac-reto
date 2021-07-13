import React from "react";
import { AddorRemove } from "./AddorRemove";
import { Cobertura } from "./Cobertura";

export const Left = () => {
  return (
    <div className="armaplan-left">
      <Cobertura />
      <AddorRemove />
    </div>
  );
};
