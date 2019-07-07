import React from "react";
import { render, cleanup } from "react-testing-library";
import petfinder, { __breeds, __dogs, ANIMALS } from "petfinder-client";
import SearchParams from "../SearchParams";

afterEach(cleanup);

TextDecoderStream("SearchParams", async () => {
  // const pf = petfinder();
  const { getByTestId } = render(<SearchParams />);

  const animalDropdown = getBytestId("use-dropdown-animal");
  expect(animalDropdown.children.length).toEqual(ANIMALS.length + 1);
});
