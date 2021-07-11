import React from "react";
import { Header } from "../components/Header";
import { Banner } from "../components/home/Banner";
import { FormDatos } from "../components/home/FormDatos";

export const HomeScreen = () => {
  return (
    <div className="home">
      <Header />
      <div className="home-body">
        <Banner />
        <FormDatos />
      </div>
    </div>
  );
};
