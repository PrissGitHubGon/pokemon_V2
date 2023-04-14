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
          <div className="flex gap-4 overflow-hidden flex-wrap py-12 mb-16  place-content-center">
            {uniqueLetters.map((letter) => (
              <div className=" text-center relative lg:w-52 lg:h-52 md:w-40 md:h-40  w-24 h-24 cursor-pointer ">
                <AccordionMobile
                  title={letter}
                  text={sortedData
                    .filter(
                      (pokemon) => pokemon.name[0].toUpperCase() === letter
                    )

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
