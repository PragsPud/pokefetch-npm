import { describe, test, expect } from "vitest";

import {
  getPokemon,
  getSpecies,
  getType,
  search
} from "../src/index.js";


describe("pokefetch package", () => {

  test("exports all public functions", () => {
    expect(getPokemon).toBeTypeOf("function");
    expect(getSpecies).toBeTypeOf("function");
    expect(getType).toBeTypeOf("function");
    expect(search).toBeTypeOf("function");
  });


  test("getPokemon returns valid pokemon data", async () => {
    const pokemon = await getPokemon("pikachu");


    expect(pokemon).toHaveProperty("id");
    expect(pokemon).toHaveProperty("name");
    expect(pokemon).toHaveProperty("types");
    expect(pokemon).toHaveProperty("abilities");
    expect(pokemon).toHaveProperty("sprite");


    expect(pokemon.id).toBe(25);
    expect(pokemon.name).toBe("pikachu");


    expect(Array.isArray(pokemon.types))
      .toBe(true);

    expect(Array.isArray(pokemon.abilities))
      .toBe(true);
  });



  test("getPokemon works with numeric ID", async () => {

    const pokemon = await getPokemon(1);

    expect(pokemon.name)
      .toBe("bulbasaur");

  });



  test("getPokemon normalizes uppercase input", async () => {

    const pokemon =
      await getPokemon("PIKACHU");


    expect(pokemon.name)
      .toBe("pikachu");

  });



  test("invalid pokemon throws error", async () => {

    await expect(
      getPokemon("this-pokemon-does-not-exist")
    )
    .rejects
    .toThrow();

  });



  test("getSpecies returns species data", async () => {

    const species =
      await getSpecies("pikachu");


    expect(species)
      .toHaveProperty("name");


    expect(species.name)
      .toBe("pikachu");


    expect(species)
      .toHaveProperty("legendary");


  });



  test("getType returns type data", async () => {

    const type =
      await getType("fire");


    expect(type.name)
      .toBe("fire");


    expect(type)
      .toHaveProperty(
        "damageRelations"
      );

  });



  test("search returns pokemon list", async () => {

    const result =
      await search(5);


    expect(Array.isArray(result))
      .toBe(true);


    expect(result.length)
      .toBe(5);


    expect(result[0])
      .toHaveProperty("name");

  });


});
