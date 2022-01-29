import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "uno.css";
import "@arco-design/web-react/dist/css/arco.css";
import "styles/reset.css";
import "styles/global.less";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
