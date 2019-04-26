import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "brand" }, "Adopt me!"),
    React.createElement(Pet, {
      name: "Perdita",
      animal: "Dog",
      breed: "Mix"
    }),
    React.createElement(Pet, {
      name: "Lume",
      animal: "Dog",
      breed: "Labrador Retriever"
    }),
    React.createElement(Pet, {
      name: "Kai",
      animal: "Rabbit",
      breed: "Belier"
    })
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
