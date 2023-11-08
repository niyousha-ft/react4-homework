import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";

const currentTime = new Date().getHours();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div
      className={`weather-app ${
        currentTime >= 20 ? "dark-bg" : currentTime <= 6 ? "light-bg" : "med-bg"
      }`}
    >
      <div className="container">
        <App />
        <footer>
          This is open-source in{" "}
          <a
            href="https://github.com/niyousha-ft/react4-homework"
            target="_blank"
          >
            <strong>Github</strong>
          </a>{" "}
          by <strong> Niyousha Eftekhari</strong>
        </footer>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
