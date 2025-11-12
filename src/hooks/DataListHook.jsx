import { useState } from "react";

const DataListHook = (currentPage,setCurrentPage,totalPages) => {
     const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    return {handlePageClick,handlePrev,handleNext,pages};
}
export default DataListHook;