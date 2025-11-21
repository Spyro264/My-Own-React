import React from "./React";
import { render } from "./react-dom";

const h1 = (
  <h1 className="main" id="app">
    <p className="pin">hiii</p>
    <b>hello</b>
  </h1>
);

function Card() {
  return (
    <div>
      <h1>Im A Component</h1>
    </div>
  );
}

function Arun() {
  return (
    <div>
      <h1>Im A Arun</h1>
    </div>
  );
}

console.log(typeof (<Card />));

// to check mulitple elments
// const h2 = <h2>Nagaraj</h2>;
// render([h1, h2, "Spyro"], document.getElementById("root"));

render(<Arun />, document.getElementById("root"));
