import { Link } from "react-router-dom";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="text-center bg-pokemon  text-black">
      <div className="pt-6 md:py-10">
        <div className="flex justify-center mb-4">
          <a
            href="https://www.linkedin.com/in/priscillia-gon%C3%A7alves-098285217/"
            className="mr-9 text-white-800 text-2xl md:text-4xl"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/PrissGitHubGon/pokemon_V2"
            className="text-white-800 text-2xl md:text-4xl"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>

      <div className="text-center text-white-700 py-5">
        © {getCurrentYear()} Made by :
        <Link to="text-white-800">
          <span> </span> Priscillia Gonçalves
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
