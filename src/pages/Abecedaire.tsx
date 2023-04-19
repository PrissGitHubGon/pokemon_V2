import { Link } from "react-router-dom";
import { pokemonInterface } from "../entities/pokemon-interface";
import useLoadMoreOrLessSidebar from "../hooks/use-LoadMoreLessSidebar";

import Accordionn from "../components/components/Accordion";

const Abecedaire = (props: any) => {
  const { letter } = props;

  const {
    startIndexSidebar,
    handleClickLoadMoreSidebar,
    handleClickLoadLessSidebar,
    sortedData,
    endIndex,
    uniqueLetters,
  } = useLoadMoreOrLessSidebar();
  return (
    <div className="">
      <div className=" relative  cursor-pointer flex  ">
        <Accordionn
          title={letter}
          text={sortedData
            .filter((pokemon) => pokemon.name[0].toUpperCase() === letter)
            .slice(startIndexSidebar, endIndex)
            .map((pokemon: pokemonInterface) => {
              const id = pokemon.id;
              return (
                <div className="">
                  {" "}
                  <li
                    className=" font-DynaPuff cursor-pointer text-md"
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
                  className="text-xs font-semibold rounded-lg px-4 py-2"
                >
                  Afficher moins
                </button>
              )}
              {endIndex < uniqueLetters.length && (
                <button
                  onClick={handleClickLoadMoreSidebar}
                  className="text-xs font-semibold rounded-lg px-4 py-2"
                >
                  Afficher plus
                </button>
              )}
            </div>
          }
        />
      </div>
    </div>
  );
};
export default Abecedaire;
