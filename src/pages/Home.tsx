import axios from "axios";
import { useEffect, useState } from "react";

interface pokemonInterface {
  image: string;
  name: string;
  apiTypes: any;
}
const Home = () => {
  const [data, setData]: any = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");

  // @ts-ignore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokebuildapi.fr/api/v1/pokemon`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("console log error =>", error);
      }
    };
    fetchData();
  }, [page]);
  return isLoading === true ? (
    <span className="loader" style={{ marginBottom: "430px" }}>
      Loading
    </span>
  ) : (
    <div className="flex flex-wrap">
      {data.slice(0, 99)?.map((pokemon: pokemonInterface) => {
        return (
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
              <img className="rounded-t-lg" src={pokemon.image} alt="" />
            </a>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {pokemon.name}
              </h5>
              <div className="">
                <img
                  src={pokemon.apiTypes[0].image}
                  alt=""
                  className="h-20 w-20 flex justify-center "
                />
                <p className="text-center text-sm">
                  <p>{pokemon.apiTypes[0].name} </p>
                </p>
              </div>
              {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                type :
                <div className="flex">
                  <div>
                    <img
                      src={pokemon.apiTypes[0].image}
                      alt=""
                      className="h-20 w-20"
                    />
                    <p>{pokemon.apiTypes[0].name} </p>
                  </div>
                </div>
              </p> */}
              <a
                href="/"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
