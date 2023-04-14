/** eslint-disable-file */
import { Route, Routes } from "react-router-dom";
import "./assets/scss/App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";

import Pokedex from "./pages/Pokedex";
import PokemonId from "./pages/Pokemon_id";
import Notfound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Notfound />} />
        <Route path="/pokemon" element={<Pokedex />} />
        <Route path="/pokemon/:pokemonId" element={<PokemonId />} />
      </Routes>{" "}
    </>
  );
}

export default App;
