import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Counters from "./components/counter/counters";
import "bootstrap/dist/css/bootstrap.css";
import Converter from "./components/converter/converter";
import { Provider } from "react-redux";
import store from "./redux/store";



ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <div className="m-5">
      <App />
      <Counters />
      <br />
      <Converter />
    </div>
  </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
