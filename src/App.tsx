import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="App">
      <h1 className="count"> Count : {count}</h1>

      <button
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        {showMenu ? "Hide Menu" : "Show Menu"}
      </button>

      {showMenu ? (
        <>
          <button
            className="button button-down "
            onClick={() => {
              setCount(count - 1);
            }}
          >
            -
          </button>
          <button
            className="button button-up "
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
          <button
            className="button "
            onClick={() => {
              setCount(0);
            }}
          >
            RESET
          </button>
        </>
      ) : null}
    </div>
  );
}

export default App;
