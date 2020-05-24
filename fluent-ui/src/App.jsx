import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { PrimaryButton } from "@fluentui/react";
import { Link, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Route path="/about">
          <p>Here I am</p>
        </Route>
        <Route path="/">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Vite + React!</p>
          <p>
            <PrimaryButton onClick={() => setCount(count + 1)}>
              count is: {count}
            </PrimaryButton>
          </p>
          <p>
            Edit <code>App.jsx</code> and save to test HMR updates.
          </p>
        </Route>
        <p>
          <Link to="/">Counter Example</Link>
          <div style={{ width: "20px", display: "inline-block" }}></div>
          <Link to="/about">About</Link>
        </p>
      </header>
    </div>
  );
}

export default App;
