import React, { Component, useState } from "react";
import { useSelector } from "react-redux";
import Potluck from "./Potluck";
import { CircularProgress } from "@material-ui/core";
import ReactPaginate from "react-paginate";

const PotluckList = () => {
  const potlucks = useSelector((state) => state.potlucks);

  const [potlucksDisplay, setPotlucksDisplay] = useState(potlucks.slice());
  const [pageNumber, setPageNumber] = useState(0);

  const potlucksPerPage = 3;
  const pagesVisited = pageNumber * potlucksPerPage;

  const displayPotlucks = potlucks.reverse()
  .slice(pagesVisited, pagesVisited + potlucksPerPage)
  .map((potluck) => {
    return (
      <Potluck potluck={potluck} />
    )
    })

    const pageCount = Math.ceil(potlucks.length / potlucksPerPage);

    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };

  return !potlucks.length ? (
    <CircularProgress />
  ) : (
    <>
  {displayPotlucks}
  <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        breakLabel={'...'}
        breakClassName={'break-me'}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
      />
    </>
  );

  return <></>;
};

export default PotluckList;
