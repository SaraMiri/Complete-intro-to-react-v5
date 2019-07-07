import React from "react";
import { render, cleanup } from "@testing-library/react";
import petfinder, { _breeds, _dogs, ANIMALS } from "petfinder-client";
import SearchParams from "../SearchParams";

afterEach(cleanup);

test("SearchParams", async () => {
  const pf = petfinder();
  const { getByTestId } = render(<SearchParams />);

  const animalDropdown = getByTestId("use-dropdown-animal");
  expect(animalDropdown.children.length).toEqual(ANIMALS.length + 1);

  expect(pf.breed.list).toHaveBeenCalled();
  const breedDropdown = getByTestId("use-dropdown-breed");
  expect(breedDropdown.children.lenght).toEqual(_breeds.length + 1);
});
