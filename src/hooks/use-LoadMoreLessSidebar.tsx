import { useState } from "react";
import usePokemons from "./use-pokemons";
import { pokemonInterface } from "../entities/pokemon-interface";

const useLoadMoreOrLessSidebar = () => {
  const { data } = usePokemons();
  const chunkSize = 5;
  const [startIndexSidebar] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(chunkSize);

  const handleClickLoadMoreSidebar = () => {
    setEndIndex(endIndex + chunkSize);
  };

  const handleClickLoadLessSidebar = () => {
    setEndIndex(endIndex - chunkSize);
  };

  const sortedData = sortByName(data);

  function sortByName(arr: pokemonInterface[]) {
    return arr.sort((a, b) => a.name.localeCompare(b.name));
  }

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
