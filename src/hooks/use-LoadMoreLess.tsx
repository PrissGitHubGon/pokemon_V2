import { useState } from "react";

const useLoadMoreOrLess = () => {
  const chunkSize = 16;
  const [startIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(chunkSize);

  const handleClickLoadMore = () => {
    setEndIndex(endIndex + chunkSize);
  };

  const handleClickLoadLess = () => {
    setEndIndex(endIndex - chunkSize);
  };
  return { startIndex, handleClickLoadMore, handleClickLoadLess, endIndex };
};
export default useLoadMoreOrLess;
