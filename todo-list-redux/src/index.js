import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
function render() {
  root.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>
  );
}

//redux 和 react 建立关联
// subscribe 叫做发布订阅，在仓库的状态发生改变的时候触发

store.subscribe(render);

render();
