export const generatePagination = (current: number, total: number) => {
  const pages = [];
  const showPages = 3;
  const firstPage = 1;
  const lastPage = total;

  if (total <= 3) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    if (current <= showPages) {
      pages.push(1, 2, 3, "dots-right", lastPage);
    } else if (current >= total - 2) {
      pages.push(firstPage, "dots-left", total - 2, total - 1, total);
    } else {
      pages.push(
        firstPage,
        "dots-left",
        current - 1,
        current,
        current + 1,
        "dots-right",
        lastPage
      );
    }
  }

  return pages;
};

export const prevPageOnChange = (
  currentPage: number,
  setCurrent: React.Dispatch<React.SetStateAction<number>>
) => {
  setCurrent(currentPage - 1);
};

export const nextPageOnChange = (
  currentPage: number,
  setCurrent: React.Dispatch<React.SetStateAction<number>>
) => {
  setCurrent(currentPage + 1);
};

export const firstPageOnChange = (
  setCurrent: React.Dispatch<React.SetStateAction<number>>
) => {
  setCurrent(1);
};

export const LastPageOnChange = (
  totalPage: number,
  setCurrent: React.Dispatch<React.SetStateAction<number>>
) => {
  setCurrent(totalPage);
};

export const changePage = (
  checkPage: number,
  setCurrent: React.Dispatch<React.SetStateAction<number>>
) => {
  setCurrent(checkPage);
};
