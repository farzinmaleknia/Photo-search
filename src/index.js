import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";

import App from "./components/App";

const root = createRoot(document.querySelector("#root"));
const store = createStore(reducers);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
