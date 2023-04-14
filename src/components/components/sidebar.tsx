import { Link } from "react-router-dom";
import { pokemonInterface } from "../../entities/pokemon-interface";
import usePokemons from "../../hooks/use-pokemons";
import LoaderPokeball from "./Loader-pokeball";
import useLoadMoreOrLessSidebar from "../../hooks/use-LoadMoreLessSidebar";

const Sidebar = (props: any) => {
  const { children } = props;
  const { isLoading } = usePokemons();
  const {
    startIndexSidebar,
    handleClickLoadMoreSidebar,
    handleClickLoadLessSidebar,
    uniqueLetters,
    sortedData,
    endIndex,
  } = useLoadMoreOrLessSidebar();

  return (
    <div className="flex flex-col md:flex-row ">
      {isLoading ? (
        <LoaderPokeball />
      ) : (
        <>
          <div className="bg-pokemon-sidebar text-white w-32 md:w-64 px-4 py-6 flex-shrink-0 hidden sm:block">
            <h1 className="text-xl  md:text-3xl font-semibold mb-4 font-DynaPuff text-center">
              Abécédaire
            </h1>
            <ul className="text-gray-500">
              {uniqueLetters.map((letter) => (
                <>
                  <li className="my-2" key={letter}>
                    <h2 className="text-lg  md:text-2xl font-semibold mb-2 text-center font-DynaPuff">
                      {letter}
                    </h2>
                    <ul>
                      {sortedData
                        .filter(
                          (pokemon) => pokemon.name[0].toUpperCase() === letter
                        )
                        .slice(startIndexSidebar, endIndex)
                        .map((pokemon: pokemonInterface) => {
                          const id = pokemon.id;
                          return (
                            <>
                              {" "}
                              <li className="my-2 font-DynaPuff " key={id}>
                                <Link to={`/${id}`}>{pokemon?.name}</Link>
                              </li>
                            </>
                          );
                        })}
                      <div className="flex  w-full my-4 ">
                        {startIndexSidebar > 0 && (
                          <button
                            onClick={handleClickLoadLessSidebar}
                            className="text-xs font-semibold "
                          >
                            Afficher moins
                          </button>
                        )}
                        {endIndex <
                          sortedData.filter(
                            (pokemon) =>
                              pokemon.name[0].toUpperCase() === letter
                          ).length && (
                          <button
                            onClick={handleClickLoadMoreSidebar}
                            className="text-xs font-semibold "
                          >
                            Afficher plus
                          </button>
                        )}
                      </div>
                    </ul>
                  </li>
                </>
              ))}{" "}
            </ul>
          </div>
          <div className="w-full px-4 py-6">{children}</div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
