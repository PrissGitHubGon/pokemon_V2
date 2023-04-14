import { Link } from "react-router-dom";
import { pokemonInterface } from "../../entities/pokemon-interface";
import usePokemons from "../../hooks/use-pokemons";
import LoaderPokeball from "./Loader-pokeball";
import useLoadMoreOrLess from "../../hooks/use-LoadMoreLess";

const Sidebar = (props: any) => {
  const { children } = props;
  const { data, isLoading } = usePokemons();
  const { startIndex, handleClickLoadMore, handleClickLoadLess, endIndex } =
    useLoadMoreOrLess();

  // La fonction de tri
  const sortByName = (arr: pokemonInterface[]) => {
    return arr.sort((a, b) => a.name.localeCompare(b.name));
  };

  return (
    <div className="flex flex-col md:flex-row">
      {isLoading ? (
        <LoaderPokeball />
      ) : (
        <>
          <div className="bg-pokemon-sidebar text-white w-full md:w-64 px-4 py-6 flex-shrink-0">
            <h1 className="text-lg font-semibold mb-4">Pokemons</h1>
            <ul className="text-gray-500">
              {sortByName(data) // trier les données avant de les afficher
                .slice(startIndex, endIndex)
                .map((pokemon: pokemonInterface) => {
                  const id = pokemon.id;
                  return (
                    <li className="my-2">
                      <Link to={`/pokemon/${id}`}>{pokemon?.name} </Link>
                    </li>
                  );
                })}
            </ul>
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
          </div>
          <div className="w-full px-4 py-6">{children}</div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
