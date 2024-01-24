import React, { useEffect, useState } from "react";
import classes from "./Pagination.module.less";
import IconChevronRight from "../Icons/IconChevronRight";
import IconChevronLeft from "../Icons/IconChevronLeft";

interface PaginationProps {
  itemsPerPage: number;
  total: number;
  onPageChange: (num: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  total,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = Array.from(
    { length: Math.ceil(total / itemsPerPage) },
    (_, i) => i + 1
  );

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage]);

  return (
    <nav className={classes.pagination}>
      <ul>
        <button
          className={`${classes.pagination__button} ${classes["pagination__button--arrow"]}`}
          disabled={currentPage <= 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          <IconChevronLeft />
        </button>
        {pageNumbers.map((num) => {
          if (currentPage + 4 < num || num < currentPage) return;
          return (
            <button
              className={`${classes.pagination__button} ${
                num === currentPage ? classes["pagination__button--active"] : ""
              }`}
              onClick={() => setCurrentPage(num)}
              key={num}
            >
              {num}
            </button>
          );
        })}
        <button
          className={`${classes.pagination__button} ${classes["pagination__button--arrow"]}`}
          disabled={currentPage === pageNumbers.length}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          <IconChevronRight />
        </button>
      </ul>
    </nav>
  );
};

export default Pagination;
