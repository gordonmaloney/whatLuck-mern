import React, { Component, useState } from "react";
import { useSelector } from "react-redux";
import Potluck from "./Potluck";
import { CircularProgress } from "@material-ui/core";
import ReactPaginate from "react-paginate";

const PotluckList = () => {
  const potlucks = useSelector((state) => state.potlucks);

  const [potlucksDisplay, setPotlucksDisplay] = useState(potlucks.slice(0, 9999));
  const [pageNumber, setPageNumber] = useState(0);

  const potlucksPerPage = 3;
  const pagesVisited = pageNumber * potlucksPerPage;

  const filteredPotlucks = potlucks.filter(potluck => potluck.private !== true).reverse()
  
  const displayPotlucks = filteredPotlucks
  .slice(pagesVisited, pagesVisited + potlucksPerPage)
  .map((potluck) => {
    if (!potluck.private===true){
       return (
        <Potluck potluck={potluck} />
       )
    } else {
      return (<></>)
    }
  })

    const pageCount = Math.ceil(filteredPotlucks.length / potlucksPerPage);

    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };

  return !potlucks.length ? (
    <center><CircularProgress /></center>
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
};

export default PotluckList;
