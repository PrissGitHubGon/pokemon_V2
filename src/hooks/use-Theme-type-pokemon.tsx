import usePokemonId from "./use-pokemon-id";

const useThemeTypePokemon = () => {
  const { data } = usePokemonId();
  const noType =
    "flex flex-col  md:max-w-3xl rounded-lg bg-white shadow-lg p-3 ";
  const typePoison =
    "bg-gradient-to-r from-fuchsia-400 shadow  to-pink-100 p-3";
  const typeVol = "bg-gradient-to-r from-blue-400  to-blue-200 p-3";
  const typePsy = "bg-gradient-to-r from-red-200  to-red-500 p-3";
  const typeTenebre = "bg-gradient-to-r from-stone-400  to-stone-200 p-3";
  const typeFeu = "bg-gradient-to-r from-amber-400  to-amber-200 p-3";
  const typeEau = "bg-gradient-to-r from-sky-400  to-sky-200 p-3";

  const PokemonType = () => {
    if (data?.apiTypes[0].name === "Poison") {
      return typePoison;
    } else if (data?.apiTypes[0].name === "Vol") {
      return typeVol;
    } else if (data?.apiTypes[0].name === "Psy") {
      return typePsy;
    } else if (data?.apiTypes[0].name === "Ténèbres" && "Acier" && "Normal") {
      return typeTenebre;
    } else if (data?.apiTypes[0].name === "Feu") {
      return typeFeu;
    } else if (data?.apiTypes[0].name === "Eau") {
      return typeEau;
    } else {
      return noType;
    }
  };

  return { PokemonType };
};
export default useThemeTypePokemon;
