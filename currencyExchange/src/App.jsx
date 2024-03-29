import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="heading">Currency Converter</h1>

      <div className="main-container">
        <div className="curr-box">
          <div className="from-to">
            <p className="convert-heading">In USD</p>
            <p className="amount">10</p>
          </div>
          <div className="curr-name">
            <p className="convert-heading">Currency Type</p>
            <p className="amount">USD</p>
          </div>
        </div>

        <button className="swap">SWAP</button>

        <div className="curr-box">
          <div className="from-to">
            <p className="convert-heading">In NPR</p>
            <p className="amount"> 832</p>
          </div>
          <div className="curr-name">
            <p className="convert-heading">Currency Type</p>
            <p className="amount">NPR</p>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
