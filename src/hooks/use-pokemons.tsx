import { useEffect, useState } from "react";
import { pokemonInterface } from "../entities/pokemon-interface";
import axios from "axios";

const usePokemons = () => {
  const [data, setData] = useState<pokemonInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokebuildapi.fr/api/v1/pokemon"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("console log error =>", error);
      }
    };
    fetchData();
  }, []);
  return { data, isLoading };
};
export default usePokemons;
