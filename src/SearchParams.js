import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");

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
      </form>
    </div>
  );
};

export default SearchParams;
