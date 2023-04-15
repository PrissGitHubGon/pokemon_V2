import { Link } from "react-router-dom";
import usePokemons from "../hooks/use-pokemons";
import useLoadMoreOrLessSidebar from "../hooks/use-LoadMoreLessSidebar";
import LoaderPokeball from "../components/components/Loader-pokeball";
import { pokemonInterface } from "../entities/pokemon-interface";

import AccordionMobile from "../components/components/Accordion";

const AbecedaireMobile = () => {
  const { isLoading } = usePokemons();
  const { uniqueLetters, sortedData } = useLoadMoreOrLessSidebar();

  return (
    <div className="flex flex-col md:flex-row md:hidden">
      {isLoading ? (
        <LoaderPokeball />
      ) : (
        <>
          <div className="flex  overflow-hidden flex-wrap  ">
            {uniqueLetters.map((letter) => (
              <div className="  relative  cursor-pointer ">
                <AccordionMobile
                  title={letter}
                  text={sortedData
                    .filter(
                      (pokemon) => pokemon.name[0].toUpperCase() === letter
                    )

                    .map((pokemon: pokemonInterface) => {
                      const id = pokemon.id;
                      return (
                        <div className="">
                          {" "}
                          <li className=" font-DynaPuff " key={id}>
                            <Link to={`/${id}`}>{pokemon?.name}</Link>
                          </li>
                        </div>
                      );
                    })}
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
