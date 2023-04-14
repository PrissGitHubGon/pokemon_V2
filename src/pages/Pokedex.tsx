import { useState } from "react";
import { pokemonInterface } from "../entities/pokemon-interface";
import LoaderPokeball from "../components/components/Loader-pokeball";
import ThumbnailCard from "../components/components/Thumbnail";
import usePokemons from "../hooks/use-pokemons";
import useLoadMoreOrLess from "../hooks/use-LoadMoreLess";

function Pokedex() {
  const { data, isLoading } = usePokemons();
  const { startIndex, handleClickLoadMore, handleClickLoadLess, endIndex } =
    useLoadMoreOrLess();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredPokemons = data.filter((pokemon: pokemonInterface) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative">
      <div className="flex justify-center mt-6 mb-4">
        <input
          type="text"
          placeholder="Rechercher un Pokemon"
          className="px-4 py-2 border-2 border-gray-400 rounded-lg w-64"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="flex gap-4 overflow-hidden flex-wrap py-12 mb-16  place-content-center">
        {isLoading ? (
          <LoaderPokeball />
        ) : (
          <>
            {filteredPokemons
              .slice(startIndex, endIndex)
              .map((pokemon: pokemonInterface) => {
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
              {endIndex < filteredPokemons.length && (
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
    </div>
  );
}

export default Pokedex;
