const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};
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
