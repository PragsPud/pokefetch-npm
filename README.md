# poke-fetch

Simple Pokémon data client for JavaScript and Node.js.

Fetch Pokémon, species, and type information with a clean and easy-to-use API.

## Features

* Get Pokémon by name or ID
* Get species information
* Get type information
* Search Pokémon with pagination
* Promise-based API
* No dependencies
* ES Module support

## Quick Start

```js
import { getPokemon } from "poke-fetch";

const pokemon = await getPokemon("pikachu");

console.log(pokemon);
```

Output:

```js
{
  id: 25,
  name: "pikachu",
  height: 4,
  weight: 60,
  types: ["electric"],
  abilities: ["static", "lightning-rod"],
  sprite: "https://..."
}
```

## API

### getPokemon(nameOrId)

Get Pokémon information by name or Pokédex ID.

```js
import { getPokemon } from "poke-fetch";

const charizard = await getPokemon("charizard");
const pikachu = await getPokemon(25);
```

### getSpecies(nameOrId)

Get species information.

```js
import { getSpecies } from "poke-fetch";

const species = await getSpecies("charizard");

console.log(species);
```

Returns:

```js
{
  id: 6,
  name: "charizard",
  habitat: "mountain",
  legendary: false,
  mythical: false,
  generation: "generation-i"
}
```

### getType(typeName)

Get Pokémon type information.

```js
import { getType } from "poke-fetch";

const fire = await getType("fire");

console.log(fire);
```

### search(limit, offset)

Search Pokémon with pagination.

```js
import { search } from "poke-fetch";

const pokemon = await search(10, 0);

console.log(pokemon);
```

## Error Handling

```js
try {
  const pokemon = await getPokemon("not-a-real-pokemon");
} catch (error) {
  console.error(error.message);
}
```

## Requirements

* Node.js 18 or newer

## Example

```js
import { getPokemon } from "poke-fetch";

const pokemon = await getPokemon("bulbasaur");

console.log(`${pokemon.name} is a ${pokemon.types.join(", ")} type Pokémon.`);
```

## License

MIT
