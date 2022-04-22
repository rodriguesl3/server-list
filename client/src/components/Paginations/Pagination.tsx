import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  currentPageAtom,
  paginationSelectors,
} from "../../store/servers/server";
import { PaginationContainer, PaginationItem } from "./Pagination.style";

export function Pagination() {
  const totalPages = useRecoilValue(paginationSelectors);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);

  const renderItems = () => {
    const pagination: JSX.Element[] = [];
    const startIndex = currentPage > 3 ? currentPage - 3 : 1;
    const maxItem =
      totalPages > 3 && totalPages - currentPage > 3
        ? currentPage + 3
        : totalPages;

    for (let index = startIndex; index <= maxItem; index++) {
      pagination.push(
        <PaginationItem
          onClick={() => setCurrentPage(index)}
          className={currentPage === index ? "active" : ""}
        >
          {index}
        </PaginationItem>
      );
    }

    if (totalPages > maxItem) {
      pagination.push(
        <PaginationItem
          onClick={() => setCurrentPage(totalPages)}
          className={currentPage === totalPages ? "active" : ""}
        >
          {totalPages}
        </PaginationItem>
      );
    }

    return pagination;
  };

  return totalPages > 1 ? (
    <PaginationContainer>{renderItems()}</PaginationContainer>
  ) : null;
}
