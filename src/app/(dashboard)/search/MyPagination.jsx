import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationPrevious,
  PaginationNext,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";
function PaginationMiddle({ lastPageNum, pageNum }) {
  const pageLink = "./search?page=";
  if (lastPageNum < 10) {
    return listPagination(1, lastPageNum);
  }
  if (pageNum < 8) {
    return (
      <>
        {listPagination(1, 10)}
        <Ellipsis />
        {PaginationItemN(lastPageNum)}
      </>
    );
  }
  if (pageNum >= lastPageNum - 7) {
    return (
      <>
        {PaginationItemN(1)}
        <Ellipsis />
        {listPagination(lastPageNum - 9, 10)}
      </>
    );
  }

  // sliding in the middle
  return (
    <>
      {PaginationItemN(1)}
      <Ellipsis />
      {listPagination(pageNum - 4, 8)}
      <Ellipsis />
      {PaginationItemN(lastPageNum)}
    </>
  );

  function PaginationItemN(pageNum) {
    return (
      <PaginationItem key={pageNum}>
        <PaginationLink href={pageLink + pageNum}>{pageNum}</PaginationLink>
      </PaginationItem>
    );
  }

  function Ellipsis() {
    return (
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
    );
  }

  function listPagination(startNum = 1, length = 10) {
    return [...Array(length)].map((_, i) => (
      <PaginationItem key={i}>
        <PaginationLink
          href={pageLink + (i + startNum).toString()}
          isActive={i + startNum === pageNum}
        >
          {i + startNum}
        </PaginationLink>
      </PaginationItem>
    ));
  }
}

export default function MyPagination({ lastPageNum, pageNum, router }) {
  const nextPage = (e) => {
    e.preventDefault();
    if (pageNum === lastPageNum) {
      return; // if it's the last page, do nothing
    }
    router.push("/search?" + ("page=" + (pageNum + 1)));
  };

  const prevPage = (e) => {
    e.preventDefault();
    if (pageNum === 1) {
      return; // if it's the first page, do nothing
    }
    router.push("/search?" + ("page=" + (pageNum - 1)));
  };
  return (
    <Pagination className="text-2xl">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={prevPage} />
        </PaginationItem>
        <PaginationMiddle lastPageNum={lastPageNum} pageNum={pageNum} />
        <PaginationItem>
          <PaginationNext href="#" onClick={nextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
