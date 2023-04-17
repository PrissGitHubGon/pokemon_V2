import usePokemons from "../../hooks/use-pokemons";
import LoaderPokeball from "./Loader-pokeball";
import useLoadMoreOrLessSidebar from "../../hooks/use-LoadMoreLessSidebar";
import AbecedaireDesktop from "../../pages/Abecedaire-desktop";

const Sidebar = (props: any) => {
  const { children } = props;
  const { isLoading } = usePokemons();
  const { uniqueLetters } = useLoadMoreOrLessSidebar();

  return (
    <div className="flex flex-col md:flex-row  ">
      {isLoading ? (
        <LoaderPokeball />
      ) : (
        <>
          <div className=" bg-pokemon-sidebar text-white w-32 md:w-36 px-4 py-6 flex-shrink-0 hidden sm:block ">
            {/* <h1 className="text-xl  md:text-2xl font-semibold mb-4 font-DynaPuff text-center">
              Abécédaire
            </h1> */}
            <ul className="text-gray-500 ">
              {uniqueLetters.map((letter) => (
                <>
                  <AbecedaireDesktop
                    keyLetter={letter}
                    letter={letter}
                    idProps
                  />
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
