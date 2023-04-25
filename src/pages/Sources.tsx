import { Link } from "react-router-dom";
import data from "../assets/data/sources.json";
const Sources = () => {
  return (
    <div>
      <p className="text-xl md:text-5xl text-center pt-10 pb-3 font-DynaPuff">
        Sources et Stack technique
      </p>
      <p className="text-xl md:text-5xl text-center pb-16 font-DynaPuff">
        utilisées pour ce projet Pokedex
      </p>
      <div className=" md:text-xl text-center pb-6">
        <p className="font-bold text-xl md:text-3xl font-DynaPuff uppercase">
          API :
        </p>
        <Link
          to="https://pokebuildapi.fr/api/v1 "
          className="mx-6"
          target="_blank"
          rel="noreferrer"
        >
          Pokebuild{" "}
          <i
            className="fa-solid fa-computer-mouse"
            style={{ color: "#cda823" }}
          ></i>
        </Link>
      </div>
      <div className="md:text-xl">
        <p className="font-bold text-center text-xl md:text-3xl font-DynaPuff uppercase">
          Stack technique :
        </p>
        <ul className="text-center">
          {data.stacks.map((stack) => {
            return (
              <li className="leading-loose">
                {stack.title}
                {/* @ts-ignore */}
                <Link
                  to={stack.path}
                  className="mx-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="fa-solid fa-computer-mouse"
                    style={{ color: "#3B71A8" }}
                  ></i>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Sources;
