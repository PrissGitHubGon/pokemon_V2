import { useEffect, useState } from "react";
import { pokemonInterface } from "../entities/pokemon-interface";
import axios from "axios";
import { useParams } from "react-router-dom";

const usePokemonId = () => {
  const [data, setData] = useState<pokemonInterface | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const params = useParams<{ pokemonId: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokebuildapi.fr/api/v1/pokemon/${params.pokemonId}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [params.pokemonId]);
  return { data, isLoading, params };
};
export default usePokemonId;
