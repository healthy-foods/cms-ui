import { useState } from "react";

const Pagination = (props) => {
  const { total, setPage, nextPage, prevPage, page } = props;
  const sum = Math.ceil(total / 10);
  return (
    <div
      className={`flex justify-end pt-2 text-[#918989] ${
        sum > 1 ? "block" : "hidden"
      }`}
    >
      <div
        onClick={prevPage}
        className="p-2 border border-r-0 items-center flex flex-col justify-center border-[#ccc] cursor-pointer"
      >
        <i className="fa-solid fa-chevron-left "></i>
      </div>
      {[...Array(sum)].map((p, i) => (
        <div
          className={`p-2 ${
            page === parseInt(i + 1) ? "bg-[#d46312] text-white" : ""
          } text-xl  border cursor-pointer border-r-0 border-[#ccc]`}
          onClick={() => setPage(i + 1)}
          key={i}
        >
          {i + 1}
        </div>
      ))}
      <div
        onClick={nextPage}
        className="p-2 border items-center flex cursor-pointer flex-col justify-center border-[#ccc]"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  );
};
export default Pagination;
