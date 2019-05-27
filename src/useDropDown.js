import React, { useState } from "react";

const useDropDown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace("", "").toLowerCase()}`;

  const DropDown = () => {
    return (
      <label htmlFor="id">
        {label}
        <select
          id={id}
          value={state}
          onChange={event => setState(event.target.value)}
          onBlur={event => setState(event.target.value)}
          disabled={!options.length}
        >
          <option />
          {options.map(selectOption => (
            <option key={selectOption} value={selectOption}>
              {selectOption}
            </option>
          ))}
        </select>
      </label>
    );
  };
  return [state, DropDown, setState];
};

export default useDropDown;
