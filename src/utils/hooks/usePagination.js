import { useState, useEffect } from "react";

export const usePagination = (data, elemRefs) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardToFocus, setCardToFocus] = useState(null);
  const pageCount = data.total_pages;

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setCurrentPage(selectedPage + 1);
    setCardToFocus(data.results[0].id);
  };

  useEffect(() => {
    if (cardToFocus && elemRefs) {
      const filtered = elemRefs.current.filter((item) =>
        item?.href?.includes(cardToFocus.toString())
      );
      filtered[0].focus();
    }
  }, [currentPage, cardToFocus]);

  return { currentPage, pageCount, cardToFocus, handlePageClick, setCardToFocus }
}