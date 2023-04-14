import { useState, useEffect } from "react";
import axios from "axios";
import { pokemonInterface } from "../entities/pokemon-interface";
import LoaderPokeball from "../components/components/Loader-pokeball";
import ThumbnailCard from "../components/components/Thumbnail";

function Pokedex() {
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
  const [startIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(chunkSize);

  const handleClickLoadMore = () => {
    setEndIndex(endIndex + chunkSize);
  };

  const handleClickLoadLess = () => {
    setEndIndex(endIndex - chunkSize);
  };

  return (
    <div className="relative flex gap-4 overflow-hidden flex-wrap py-12 mb-16  place-content-center">
      {isLoading ? (
        <LoaderPokeball />
      ) : (
        <>
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
            {startIndex > 0 && (
              <button
                onClick={handleClickLoadLess}
                className="text-base font-semibold rounded-lg px-4 py-2 bg-white text-gray-700 hover:bg-gray-200"
              >
                Afficher moins
              </button>
            )}
            {endIndex < data.length && (
              <button
                onClick={handleClickLoadMore}
                className="text-base font-semibold rounded-lg px-4 py-2 bg-white text-gray-700 hover:bg-gray-200"
              >
                Afficher plus
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Pokedex;
