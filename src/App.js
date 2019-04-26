import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Perdita" animal="Dog" breed="Mix" />
      <Pet name="Lume" animal="Dog" breed="Labrador Retriever" />
      <Pet name="Kai" animal="Rabbit" breed="Belier" />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
