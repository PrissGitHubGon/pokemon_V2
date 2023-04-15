import { Link } from "react-router-dom";
import usePokemons from "../hooks/use-pokemons";
import useLoadMoreOrLessSidebar from "../hooks/use-LoadMoreLessSidebar";
import LoaderPokeball from "../components/components/Loader-pokeball";
import { pokemonInterface } from "../entities/pokemon-interface";

import AccordionMobile from "../components/components/Accordion";

const AbecedaireMobile = () => {
  const { isLoading } = usePokemons();
  const {
    startIndexSidebar,
    handleClickLoadMoreSidebar,
    handleClickLoadLessSidebar,
    sortedData,
    endIndex,
    uniqueLetters,
  } = useLoadMoreOrLessSidebar();

  return (
    <div className="flex md:hidden  ">
      {isLoading ? (
        <LoaderPokeball />
      ) : (
        <>
          <div className="flex  flex-wrap  ">
            {uniqueLetters.map((letter) => (
              <div className="  relative  cursor-pointer ">
                <AccordionMobile
                  title={letter}
                  text={sortedData
                    .filter(
                      (pokemon) => pokemon.name[0].toUpperCase() === letter
                    )
                    .slice(startIndexSidebar, endIndex)
                    .map((pokemon: pokemonInterface) => {
                      const id = pokemon.id;
                      return (
                        <div className="">
                          {" "}
                          <li
                            className=" font-DynaPuff cursor-pointer"
                            key={id}
                          >
                            <Link to={`/${id}`}>{pokemon?.name}</Link>
                          </li>
                        </div>
                      );
                    })}
                  moreLessButton={
                    <div className="flex justify-center w-full my-4">
                      {startIndexSidebar > 0 && (
                        <button
                          onClick={handleClickLoadLessSidebar}
                          className="text-base font-semibold rounded-lg px-4 py-2 bg-white text-gray-700 hover:bg-gray-200"
                        >
                          Afficher moins
                        </button>
                      )}
                      {endIndex < uniqueLetters.length && (
                        <button
                          onClick={handleClickLoadMoreSidebar}
                          className="text-base font-semibold rounded-lg px-4 py-2 bg-white text-gray-700 hover:bg-gray-200"
                        >
                          Afficher plus
                        </button>
                      )}
                    </div>
                  }
                />
              </div>
            ))}{" "}
          </div>
        </>
      )}
    </div>
  );
};

export default AbecedaireMobile;
