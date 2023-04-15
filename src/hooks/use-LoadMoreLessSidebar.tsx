import { useState } from "react";
import usePokemons from "./use-pokemons";
import { pokemonInterface } from "../entities/pokemon-interface";

const useLoadMoreOrLessSidebar = () => {
  const { data } = usePokemons();
  const chunkSize = 5;
  const [startIndexSidebar] = useState(0);
  const [endIndex, setEndIndex] = useState(chunkSize);

  const handleClickLoadMoreSidebar = () => {
    setEndIndex(endIndex + chunkSize);
  };

  const handleClickLoadLessSidebar = () => {
    setEndIndex(endIndex - chunkSize);
  };

  //************************************* */
  // Tri des Pokémons
  const sortedData = sortByName(data);
  // Déclaration de la fonction de tri
  function sortByName(arr: pokemonInterface[]) {
    return arr.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Obtenir les lettres uniques des noms de Pokemons
  const uniqueLetters = [
    //@ts-ignore
    ...new Set(data.map((pokemon) => pokemon.name[0].toUpperCase())),
  ];
  return {
    startIndexSidebar,
    handleClickLoadMoreSidebar,
    handleClickLoadLessSidebar,
    uniqueLetters,
    sortedData,
    endIndex,
  };
};
export default useLoadMoreOrLessSidebar;
