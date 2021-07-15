import React from "react";
import { Provider } from "react-redux";
import { AppRouter } from "./routes/AppRouter";
import { store } from "./store";

export const RimacApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
