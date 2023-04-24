export type pokemonInterface = {
  damage_multiplier: number;
  damage_relation: number;
  image: string;
  name: string;
  apiTypes: string | any;
  pokemon: any;
  id: number;
  stats: {
    attack: number;
    special_attack: number;
    HP: number;
    special_defense: number;
    defense: number;
    speed: number;
  };
  apiGeneration: number;
  pokedexId: number;
  data: string;
  type: string;
  slug: string;
  pokemonType: string;
  apiResistances: {
    map: string | any;
    name: string;
  };
  resistance: string;
};
