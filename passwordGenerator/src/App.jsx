import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");


  const passRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%&*"

    for (let i = 1; i < length ; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])

  const copyPass = () => {
    window.navigator.clipboard.writeText(password)
    passRef.current.select()
  }


  return (
    <>
      <div class="main-div">
        <h1 class="page-heading"> GetPass Password Generator </h1>
        <h2 class="page-heading page-h2">
          You can generate and copy the password according to your preferences.
        </h2>

        <div class="password-box">
          <input
            class="passcontainer"
            type="text"
            value={password}
            placeholder="Password will generate here"
            readOnly
            ref={passRef}
          />
          <button onClick={copyPass}
          class="passcontainer copy-btn"> Copy </button>
        </div>
        <div className="pass-elements">
          <div class="other-things">
            <input
              type="range"
              min={8}
              max={30}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="Length">Length : {length} </label>
          </div>
          <div class="other-things">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
             
              name=""
              id=""
            />

            <label htmlFor="includeNumbers">Include Numbers </label>
          </div>
          <div class="other-things">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              name=""
              id=""
            />

            <label htmlFor="includeChar">Include Characters </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
