type LittleComponentCenterProps = {
  titleTop?: string;
  titleBottom: any;
  srcImgTop?: string;
};
const LittleComponentCenter = (props: LittleComponentCenterProps) => {
  const { titleTop, titleBottom, srcImgTop } = props;
  return (
    <div className="text-white-800 text-2xl md:text-4xl">
      <div className="flex justify-center">
        {titleTop ? (
          <p className="text-xs sm:text-sm  font-DynaPuff">{titleTop}</p>
        ) : null}

        {srcImgTop ? (
          <img src={srcImgTop} className=" h-5 ml-3 md:ml-1 " alt=""></img>
        ) : null}
      </div>

      {titleBottom ? (
        <p className="text-center text-xs sm:text-sm font-DynaPuff">
          {titleBottom}
        </p>
      ) : null}
    </div>
  );
};
export default LittleComponentCenter;
