import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux2/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
function render() {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}

render();
