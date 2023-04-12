import NavDesktop from "./components/Nav-desktop";
import NavMobile from "./components/Nav-mobile";

const Header = () => {
  return (
    <div className="  flex items-center justify-between py-4 pl-4 bg-pokemon  bg-cover text-black ">
      <a href="/" className="ml-6  w-36">
        <img
          src="https://res.cloudinary.com/dl6flp50k/image/upload/v1681331502/pokemon/logo_xmn9ed.png"
          alt=""
          className=""
        />
      </a>
      <nav>
        <NavMobile />
        <NavDesktop />
      </nav>
    </div>
  );
};

export default Header;
