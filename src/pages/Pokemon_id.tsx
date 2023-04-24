import { Link } from "react-router-dom";

import LoaderPokeball from "../components/components/Loader-pokeball";
import useThemeTypePokemon from "../hooks/use-Theme-type-pokemon";
import usePokemonId from "../hooks/use-pokemon-id";
import { pokemonInterface } from "../entities/pokemon-interface";
import LittleComponentCenter from "../components/components/Little_Component_center";

const PokemonId = () => {
  const { PokemonType } = useThemeTypePokemon();
  const { data, isLoading, params } = usePokemonId();

  return isLoading ? (
    <LoaderPokeball />
  ) : (
    <>
      <div className="md:flex  justify-center ">
        <div
          className=" pb-16 mt-10  w-full md:w-auto md:mx-10"
          key={params.pokemonId}
        >
          <div className="flex border-8 rounded-md border-yellow-200 sm:justify-center ">
            <div className={`${PokemonType()} w-full h-full md:px-12`}>
              <div className="flex justify-between  mx-auto">
                <p className="font-DynaPuff">{data?.name} </p>
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
                <p className="font-DynaPuff flex justify-center text-md my-2 ">
                  Types :
                </p>
                <div
                  className={
                    data?.apiTypes[1]
                      ? "flex flex-row justify-around space-x-10 my-2"
                      : "flex my-2"
                  }
                >
                  <LittleComponentCenter
                    srcImgTop={data?.apiTypes[0].image}
                    titleBottom={data?.apiTypes[0].name}
                  />

                  {data?.apiTypes[1] ? (
                    <LittleComponentCenter
                      srcImgTop={data?.apiTypes[1].image}
                      titleBottom={data?.apiTypes[1].name}
                    />
                  ) : null}
                </div>
              </div>
              <div className="w-full border-b-2 border-yellow-200"></div>
              <p className="font-DynaPuff flex justify-center text-md my-2 ">
                Attaque :
              </p>
              <div className="flex justify-around py-3">
                <LittleComponentCenter
                  titleTop={"Normal"}
                  titleBottom={data?.stats?.attack}
                />
                <LittleComponentCenter
                  titleTop={"Spéciale"}
                  titleBottom={data?.stats?.special_attack}
                />
              </div>

              <div className="border-b-2 border-yellow-200"></div>
              <p className="font-DynaPuff flex justify-center text-md my-2 ">
                Défense :
              </p>
              <div className="flex justify-around py-3">
                <LittleComponentCenter
                  titleTop={"Normal"}
                  titleBottom={data?.stats?.defense}
                />
                <LittleComponentCenter
                  titleTop={"Spéciale"}
                  titleBottom={data?.stats?.special_defense}
                />
              </div>

              <div className="border-b-2 border-yellow-200"></div>
              <div className="flex justify-around">
                <p className="text-xs py-2 font-DynaPuff">
                  Génération{" "}
                  <span className="text-sm font-sans font-bold ml-1">
                    {data?.apiGeneration}
                  </span>
                </p>
                <p className="text-xs py-2 font-DynaPuff">
                  Id Pokedex
                  <span className="text-sm font-sans font-bold ml-1">
                    {" "}
                    {data?.pokedexId}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* *********************************************************  */}
        <div className=" flex justify-center ">
          {" "}
          <table className="table-auto mt-10 ">
            <thead>
              <tr>
                <th className="text-center px-2 text-sm sm:text-lg md:text-1xl">
                  Résistances
                </th>
                <th className="text-center px-2  text-sm sm:text-lg md:text-1xl">
                  Multiplicateur
                </th>
                <th className="text-center px-2  text-sm sm:text-lg md:text-1xl">
                  Relation
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.apiResistances.map((resistance: pokemonInterface) => {
                return (
                  <tr>
                    <td className="text-center text-xxs-Id sm:text-md md:text-xl">
                      {resistance.name}
                    </td>
                    <td className="text-center text-xxs-Id sm:text-md md:text-xl">
                      {resistance.damage_multiplier}
                    </td>
                    <td className="text-center text-xxs-Id sm:text-md md:text-xl">
                      {resistance.damage_relation}
                    </td>
                  </tr>
                );
              })}{" "}
            </tbody>
          </table>
        </div>
      </div>

      <Link to="/" className="">
        <p className="pt-10 text-center md:text-3xl italic bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700 font-bold">
          Retour
        </p>
      </Link>
    </>
  );
};

export default PokemonId;
