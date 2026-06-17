const BASE_URL = "https://pokeapi.co/api/v2";

async function request(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(
      `PokeAPI Error: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

export async function getPokemon(nameOrId) {
  const pokemon = await request(
    `/pokemon/${String(nameOrId).toLowerCase()}`
  );

  return {
    id: pokemon.id,
    name: pokemon.name,
    height: pokemon.height,
    weight: pokemon.weight,
    types: pokemon.types.map(t => t.type.name),
    abilities: pokemon.abilities.map(a => a.ability.name),
    sprite: pokemon.sprites.front_default
  };
}

export async function getSpecies(nameOrId) {
  const species = await request(
    `/pokemon-species/${String(nameOrId).toLowerCase()}`
  );

  return {
    id: species.id,
    name: species.name,
    habitat: species.habitat?.name ?? null,
    legendary: species.is_legendary,
    mythical: species.is_mythical,
    generation: species.generation.name
  };
}

export async function getType(typeName) {
  const type = await request(
    `/type/${String(typeName).toLowerCase()}`
  );

  return {
    id: type.id,
    name: type.name,
    damageRelations: type.damage_relations
  };
}

export async function search(limit = 20, offset = 0) {
  const data = await request(
    `/pokemon?limit=${limit}&offset=${offset}`
  );

  return data.results;
}

export default {
  getPokemon,
  getSpecies,
  getType,
  search
};
