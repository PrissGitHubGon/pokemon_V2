// import { Link } from "react-router-dom";
import { pokemonInterface } from "../entities/pokemon-interface";
import useLoadMoreOrLessSidebar from "../hooks/use-LoadMoreLessSidebar";
import ThumbnailCard from "../components/components/Thumbnail";

const AbecedaireDesktop = (props: any) => {
  const { keyLetter, letter } = props;
  const {
    startIndexSidebar,
    handleClickLoadMoreSidebar,
    handleClickLoadLessSidebar,
    sortedData,
    endIndex,
  } = useLoadMoreOrLessSidebar();
  return (
    <div className=" ">
      <li className="my-2" key={keyLetter}>
        <h2 className="text-lg  md:text-2xl font-semibold mb-2 text-center font-DynaPuff">
          {letter}
        </h2>
        <ul>
          {sortedData
            .filter((pokemon) => pokemon.name[0].toUpperCase() === letter)
            .slice(startIndexSidebar, endIndex)
            .map((pokemon: pokemonInterface) => {
              //   const id = pokemon.id;
              return (
                <>
                  {" "}
                  {/* <li className="my-2 font-DynaPuff " key={id}>
                    <Link to={`/${id}`}>{pokemon?.name}</Link>
                  </li> */}
                  <ThumbnailCard
                    link={`/${pokemon.id}`}
                    key={pokemon.id}
                    imageUrl={pokemon.image}
                    imageUrlBis={pokemon.image}
                    imageUrlTitleAlt={pokemon.name}
                    imageUrlTitle={pokemon.name}
                  />
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
                (pokemon) => pokemon.name[0].toUpperCase() === letter
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
    </div>
  );
};
export default AbecedaireDesktop;
