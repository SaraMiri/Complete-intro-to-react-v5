import React, { FunctionComponent } from "react";
import { Pet as IPet } from "petfinder-client";
import Pet from "./Pet";

interface IProps {
  pets: IPet[];
}

const Results: FunctionComponent<IProps> = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets to show </h1>
      ) : (
        pets.map(pet => {
          let hero;
          if (Array.isArray(pet.breeds.breed)) {
            hero = pet.breeds.breed.join(",");
          } else {
            hero = pet.breeds.breed;
          }
          return (
            <Pet
              animal={pet.animal}
              key={pet.id}
              name={pet.name}
              breed={pet.breeds}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
              id={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
