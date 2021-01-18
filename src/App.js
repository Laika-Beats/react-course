import React from "react";

function App() {
  function clickBtn() {
    alert("Button clicked.");
  }
  return (
    <div className="box">
      <h1>Hello React</h1>
      <button onClick={clickBtn}>Click Me</button>
    </div>
  );
}

export default App;
