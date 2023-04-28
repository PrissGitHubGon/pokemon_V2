import { useState } from "react";
import { pokemonInterface } from "../entities/pokemon-interface";
import LoaderPokeball from "../components/components/Loader-pokeball";
import ThumbnailCard from "../components/components/Thumbnail";
import usePokemons from "../hooks/use-pokemons";
import useLoadMoreOrLess from "../hooks/use-LoadMoreLess";
import Error404 from "./404";
import ErrorBoundary from "../components/components/ErrorBoundary";
import { Link } from "react-router-dom";

const Pokedex = () => {
  const { startIndex, handleClickLoadMore, handleClickLoadLess, endIndex } =
    useLoadMoreOrLess();

  const { data, isLoading } = usePokemons();

  const [searchTerm, setSearchTerm] = useState<string>("");
  // Fonction qui permet de rechercher le nom, le type ou la génération d'un Pokémon, en minuscules ou en majuscules
  const filteredPokemons = data.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pokemon.apiTypes.some((type: any) =>
        type.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      pokemon.apiGeneration.toString().includes(searchTerm)
  );

  return (
    <div className="relative">
      <div className=" flex justify-center mt-6 mb-4">
        <div>
          <div className="text-center text-sm sm:text-lg ">
            {" "}
            <p className="font-DynaPuff">
              Il est possible d'effectuer une recherche de Pokémon
            </p>
            <p className="font-DynaPuff">
              en utilisant leur nom, leur type ou leur génération
            </p>
          </div>
          <div className="flex justify-center mt-3">
            <input
              type="text"
              placeholder="Rechercher"
              className="px-4 py-2 border-2 border-gray-400 rounded-lg  md:w-64"
              value={searchTerm.trimStart()}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 overflow-hidden flex-wrap py-12 mb-16  place-content-center">
        {isLoading ? (
          <LoaderPokeball />
        ) : (
          <>
            {filteredPokemons
              .slice(startIndex, endIndex)
              .map((pokemon: pokemonInterface) => {
                return (
                  <ErrorBoundary fallback={<Error404 />}>
                    <ThumbnailCard
                      link={`/${pokemon.id}/${pokemon.slug}`}
                      key={pokemon.id}
                      imageUrl={pokemon.image}
                      imageUrlBis={pokemon.image}
                      imageUrlTitleAlt={pokemon.name}
                      children={
                        <p className="my-2 font-DynaPuff " key={pokemon.id}>
                          <Link to={`/${pokemon.id}/${pokemon.slug}`}>
                            {pokemon?.name}{" "}
                          </Link>
                        </p>
                      }
                    />
                  </ErrorBoundary>
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
};

export default Pokedex;
