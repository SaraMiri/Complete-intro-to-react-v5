import React, { useState } from "react";
import ANIMALS from "petfinder-client";
const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("dog");

  return (
    <div>
      <form>
        <label htmlFor={"location"}>
          Location
          <input
            onChange={event => setLocation(event.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
          <button>Submit</button>
        </label>
        <label htmlFor="animal">
          <select
            onChange={event => setLocation(event.target.value)}
            onBlur={event => setLocation(event.target.value)}
            id="animal"
            value={animal}
            placeholder="Animal"
          />
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
