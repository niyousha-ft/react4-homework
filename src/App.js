import React from "react";

import Search from "./Search";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search defaultCity="Tehran" />
      </div>
    </div>
  );
}

export default App;
