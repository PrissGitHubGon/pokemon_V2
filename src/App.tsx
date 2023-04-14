/** eslint-disable-file */
import { Route, Routes } from "react-router-dom";
import "./assets/scss/App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";

import Pokedex from "./pages/Pokedex";
import PokemonId from "./pages/Pokemon_id";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<Pokedex />} />
        <Route path="/pokemon/:pokemonId" element={<PokemonId />} />
      </Routes>{" "}
    </>
  );
}

export default App;
