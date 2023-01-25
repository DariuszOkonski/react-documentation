import React from "react";
import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </header>
    </div>
  );
}

export default App;
