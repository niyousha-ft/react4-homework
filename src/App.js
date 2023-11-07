import React from "react";

import Search from "./Search";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search defaultCity="Tehran" />
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
  );
}

export default App;
