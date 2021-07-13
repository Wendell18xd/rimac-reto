import React from "react";
import { Left } from "../components/armaplan/Left";
import { Right } from "../components/armaplan/Right";

export const ArmaPlanScreen = () => {
  return (
    <div className="armaplan">
      <form>
        <Left />
        <Right />
      </form>
    </div>
  );
};
