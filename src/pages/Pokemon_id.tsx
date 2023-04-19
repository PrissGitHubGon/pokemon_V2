import { Link } from "react-router-dom";

import LoaderPokeball from "../components/components/Loader-pokeball";
import useThemeTypePokemon from "../hooks/use-Theme-type-pokemon";
import usePokemonId from "../hooks/use-pokemon-id";

const PokemonId = () => {
  const { PokemonType } = useThemeTypePokemon();
  const { data, isLoading, params } = usePokemonId();

  return isLoading ? (
    <LoaderPokeball />
  ) : (
    <>
      <div
        className=" w-full  flex justify-center  pb-16 mt-10 sm:pb-36 md:mt-10"
        key={params.pokemonId}
      >
        <div className="flex border-8 rounded-md border-yellow-200 sm:justify-center ">
          <div className={`${PokemonType()} w-full`}>
            <div className="flex justify-between w-11/12 mx-auto">
              <p className="font-DynaPuff">{data?.name}</p>
              <div className="flex">
                <p>
                  <span className="text-xs font-DynaPuff ">PV</span>
                  {/* @ts-ignore */}
                  <span className="font-bold">{data?.stats?.HP}</span>
                </p>
                <img
                  src={data?.apiTypes[0].image}
                  alt=""
                  className=" h-5 ml-3 md:ml-1 "
                />
              </div>
            </div>
            <img
              className="mx-auto object-cover h-2/4 sm:h-auto border-4 border-yellow-200 m-1  md:w-56 rounded-lg  md:rounded-lg"
              src={data?.image}
              alt={data?.name}
            />
            <div className="flex flex-col justify-start ">
              <div className=" pb-5 border-b-2 border-yellow-200"></div>
              <p className="font-DynaPuff pt-3">Types :</p>
              <div
                className={
                  data?.apiTypes[1]
                    ? "flex flex-row justify-center space-x-10 pt-3"
                    : "flex my-2"
                }
              >
                <div className="text-white-800 text-2xl md:text-4xl ">
                  <div className="flex justify-center">
                    {" "}
                    <img
                      src={data?.apiTypes[0].image}
                      className=" h-5 ml-3 md:ml-1 "
                      alt=""
                    />
                  </div>

                  <p className="text-center text-sm font-DynaPuff">
                    {data?.apiTypes[0].name}
                  </p>
                </div>

                {data?.apiTypes[1] ? (
                  <div className="text-white-800 text-2xl md:text-4xl">
                    <div className="flex justify-center">
                      {" "}
                      <img
                        src={data?.apiTypes[1].image}
                        className=" h-5 ml-3 md:ml-1 "
                        alt=""
                      ></img>
                    </div>

                    <p className="text-center text-sm font-DynaPuff">
                      {data?.apiTypes[1].name}
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className=" pb-5 border-b-2 border-yellow-200"></div>
            <p className="text-xs py-2 font-DynaPuff">
              Génération{" "}
              <span className="text-sm font-sans font-bold ml-1">
                {" "}
                {data?.apiGeneration}
              </span>
            </p>
          </div>
        </div>
      </div>
      <Link to="/" className="">
        <p className="text-center md:text-3xl italic bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700 font-bold">
          Retour
        </p>
      </Link>
    </>
  );
};

export default PokemonId;
