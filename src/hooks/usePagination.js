const range = (start, end) => {
  let length = end - start + 1;
};
export const usePagination = ({
  totalCount,
  pageSize = 5,
  siblingCount = 1,
  currentPage,
}) => {
  const paginationRange = useMemo(() => {
    //get total pages
    const totalPageCount = Math.ceil(totalCount / pageSize);
    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;
  }, [totalCount, pageSize, siblingCount, currentPage]);
  return paginationRange;
};
