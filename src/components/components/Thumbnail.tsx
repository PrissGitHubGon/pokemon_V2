import { Link } from "react-router-dom";
import { thumbnailCardPropsInterface } from "../../entities/props-interface/thumbnailCardProps-interface";

const ThumbnailCard = (props: thumbnailCardPropsInterface) => {
  const {
    key,
    link,
    imageUrl,
    imageUrlBis,
    imageUrlTitleAlt,
    imageUrlTitle,
    children,
  } = props;
  return (
    <div className="">
      <div
        className=" text-center relative lg:w-52 lg:h-52 md:w-40 md:h-40  w-24 h-24 cursor-pointer border border-emerald-500 rounded-lg"
        key={key}
      >
        <Link
          to={link}
          className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 "
          style={{ backgroundImage: `url(${imageUrl || ""})` }}
        >
          <img
            src={imageUrlBis || ""}
            alt={imageUrlTitleAlt}
            className="w-full aspect-square hidden"
          />
          <div className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-80 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% z-10 rounded-lg">
            <h3 className="text-white py-8 lg:py-20 px-3 mx-auto lg:text-3xl text-md">
              {imageUrlTitle}
            </h3>
          </div>{" "}
        </Link>
      </div>{" "}
      <h3 className="text-black text-center md:hidden font-DynaPuff  mx-auto lg:text-3xl text-md">
        {children}
      </h3>
    </div>
  );
};

export default ThumbnailCard;
