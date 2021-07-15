import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import { clienteReducer } from "./reducers/clienteReducer";
import { coberturaReducer } from "./reducers/coberturaReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  cliente: clienteReducer,
  cobertura: coberturaReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
