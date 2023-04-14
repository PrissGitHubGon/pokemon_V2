import axios from "axios";
import { useEffect, useState } from "react";
import { pokemonInterface } from "../entities/pokemon-interface";
import ThumbnailCard from "../components/components/Thumbnail";
import LoaderPokeball from "../components/components/Loader-pokeball";

const Pokedex = () => {
  const [data, setData] = useState<pokemonInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const chunkSize = 18;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(chunkSize);

  const handleClickLoadMore = () => {
    setStartIndex(startIndex + chunkSize);
    setEndIndex(endIndex + chunkSize);
  };
  const handleClickLoadLess = () => {
    setStartIndex(startIndex - chunkSize);
    setEndIndex(endIndex - chunkSize);
  };
  return isLoading === true ? (
    <LoaderPokeball />
  ) : (
    <div className="relative flex gap-4 overflow-hidden flex-wrap py-12 mb-16  place-content-center">
      {data.slice(startIndex, endIndex).map((pokemon: pokemonInterface) => {
        const id = pokemon.id;
        return (
          <ThumbnailCard
            link={`/pokemon/${id}`}
            key={id}
            imageUrl={pokemon.image}
            imageUrlBis={pokemon.image}
            imageUrlTitleAlt={pokemon.name}
            imageUrlTitle={pokemon.name}
          />
        );
      })}

      <div className="flex justify-center w-full my-4">
        {data.length > endIndex && (
          <button
            onClick={handleClickLoadLess}
            className="text-base font-semibold rounded-lg px-4 py-2 bg-white text-gray-700 hover:bg-gray-200"
          >
            Voir moins
          </button>
        )}
        {endIndex < data.length && (
          <button
            onClick={handleClickLoadMore}
            className="text-base font-semibold rounded-lg px-4 py-2 bg-white text-gray-700 hover:bg-gray-200"
          >
            Voir plus
          </button>
        )}
      </div>
    </div>
  );
};

export default Pokedex;
