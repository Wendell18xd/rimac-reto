import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../actions/auth";
import { Left } from "../components/armaplan/Left";
import { Right } from "../components/armaplan/Right";

export const ArmaPlanScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onsubmit = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.replace("/gracias");
  };

  return (
    <div className="armaplan">
      <form className="armaplan-from" onSubmit={onsubmit}>
        <Left />
        <Right />
      </form>
    </div>
  );
};
