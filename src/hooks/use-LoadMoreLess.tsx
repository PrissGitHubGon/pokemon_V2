import { useState } from "react";

const useLoadMoreOrLess = () => {
  const chunkSize = 30;
  const [startIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(chunkSize);

  const handleClickLoadMore = () => {
    setEndIndex(endIndex + chunkSize);
  };

  const handleClickLoadLess = () => {
    setEndIndex(endIndex - chunkSize);
  };
  return { startIndex, handleClickLoadMore, handleClickLoadLess, endIndex };
};
export default useLoadMoreOrLess;
