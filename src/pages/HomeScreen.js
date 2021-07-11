import React from "react";
import { Banner } from "../components/home/Banner";
import { FormDatos } from "../components/home/FormDatos";

export const HomeScreen = () => {
  return (
    <div className="home">
      <div className="home-body">
        <Banner />
        <FormDatos />
      </div>
    </div>
  );
};
