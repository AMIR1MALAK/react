import "./App.css";
import "./theme.css";

import { useState } from "react";

function App() {
  const [Name, changename] = useState("amir malak");
  const [myage, currentage] = useState("30");
  const [state, setstate] = useState("0");
  const [theme, settheme] = useState();

  return (
    <div className={`App ${theme}`}>
      <div>
        <button
          onClick={() => {
            settheme("light");
          }}
          style={{ marginRight: "26px" }}
        >
          light
        </button>
        <button
          onClick={() => {
            settheme("dark");
          }}
          style={{ marginRight: "26px" }}
        >
          dark
        </button>
        <button
          onClick={() => {
            settheme("gray");
          }}
          style={{ marginRight: "26px" }}
        >
          gray
        </button>
        <button
          onClick={() => {
            settheme("pink");
          }}
          style={{ marginRight: "26px" }}
        >
          pink
        </button>
      </div>

      <h1 style={{ marginTop: "100px" }}>my name is {Name}</h1>
      <button
        onClick={() => {
          changename("king kong");
        }}
      >
        change name
      </button>
      <br />
      <br />
      <br />
      <h1>my age is {myage}</h1>
      <button
        onClick={() => {
          currentage("50");
        }}
      >
        change age
      </button>
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          setstate(state + 1);
        }}
      >
        count is {state}
      </button>
    </div>
  );
}
export default App;
