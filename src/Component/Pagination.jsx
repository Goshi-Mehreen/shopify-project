import React from "react";
import Left from "../assets/left-arrow.png"
import Right from "../assets/rightarrow-img.png"


/* Pagination: [<]  1 of 2 pages  [>] */
function Pagination({ page, totalPages, onChange }) {
    
  const btn =
    "w-8 h-8 flex items-center justify-center rounded-lg border border-gray-300 bg-gray-100 hover:bg-gray-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-gray-100";

  return (
    <div className="flex items-center justify-center gap-4 py-6">
      {/* Previous button */}
      <button
        className={btn}
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        aria-label="Previous page"
      >
        <img src={Left} alt="" />
      </button>

      {/* Text */}
      <span className="text-sm text-gray-800">
         {page} of  {totalPages} pages
      </span>

      {/* Next button */}
      <button
        className={btn}
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        aria-label="Next page"
      >
        <img src={Right} alt="" />
      </button>
    </div>
  );
};

export default Pagination;