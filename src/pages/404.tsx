import Iframe from "react-iframe";

const Error404 = () => {
  return (
    <>
      <div className="w-full md:w-full lg:w-full flex justify-center  ">
        <Iframe
          url="https://embed.lottiefiles.com/animation/67858"
          id="myId"
          className="lottie"
          display="initial"
          position="relative"
        />
      </div>
      <a
        href="/"
        className="font-DynaPuff w-full md:w-full lg:w-full flex justify-center "
      >
        <p>
          Ooops cette page n'existe pas
          <br />
          <p className="font-DynaPuff w-full md:w-full lg:w-full flex justify-center animate-pulse  bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 font-bold">
            Retour
          </p>
        </p>
      </a>
    </>
  );
};

export default Error404;
