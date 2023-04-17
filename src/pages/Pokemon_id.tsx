import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import { pokemonInterface } from "../entities/pokemon-interface";
import LoaderPokeball from "../components/components/Loader-pokeball";

const PokemonId = () => {
  const [data, setData] = useState<pokemonInterface | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const params = useParams<{ pokemonId: string }>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokebuildapi.fr/api/v1/pokemon/${params.pokemonId}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [params.pokemonId]);

  return isLoading ? (
    <LoaderPokeball />
  ) : (
    <>
      <div
        className="w-full md:w-full lg:w-full flex justify-center pb-16 mt-10 sm:pb-36 md:mt-10"
        key={params.pokemonId}
      >
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-lg">
            <img
              className=" w-full h-96 md:h-auto object-cover md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={data?.image}
              alt={data?.name}
            />
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-4xl font-medium mb-4 text-center font-DynaPuff">
                {data?.name}
              </h5>

              <div className=" pb-5 border-b-2"></div>
              <div className="flex flex-row justify-center space-x-14 pt-3">
                <div className="text-white-800 text-2xl md:text-4xl">
                  <img
                    src={data?.apiTypes[0].image}
                    className=" h-10 ml-3 md:ml-1 "
                    alt=""
                  ></img>
                  <p className="text-center text-sm font-DynaPuff">
                    {data?.apiTypes[0].name}
                  </p>
                </div>

                {data?.apiTypes[1] ? (
                  <div className="text-white-800 text-2xl md:text-4xl">
                    <img
                      src={data?.apiTypes[1].image}
                      className=" h-10 ml-3 md:ml-1 "
                      alt=""
                    ></img>
                    <p className="text-center text-sm font-DynaPuff">
                      {data?.apiTypes[1].name}
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/" className="hidden md:block">
        <p className="text-center text-3xl pl-4 italic bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700 font-bold">
          Retour
        </p>
      </Link>
      <Link to="/abecedaire" className="md:hidden">
        <p className="text-center text-3xl pl-4 italic bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700 font-bold">
          Retour
        </p>
      </Link>
    </>
  );
};

export default PokemonId;
