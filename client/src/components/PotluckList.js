import React, { Component, useState } from "react";
import { useSelector } from "react-redux";
import Potluck from "./Potluck";
import { CircularProgress, FormControl, TextField } from "@material-ui/core";
import ReactPaginate from "react-paginate";
import { Card, CardBody, Form } from "reactstrap";

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import TitleIcon from '@material-ui/icons/Title';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import CancelIcon from '@material-ui/icons/Cancel';


const PotluckList = () => {
  const [themeSearch, setThemeSearch] = useState("");
  
  const [showSearch, setShowSearch] = useState("search-card-hide")
  const [searchFilter, setSearchFilter] = useState("potluckHost");

  const potlucks = useSelector((state) => state.potlucks);

  const [potlucksDisplay, setPotlucksDisplay] = useState(
    potlucks.slice(0, 9999)
  );
  const [pageNumber, setPageNumber] = useState(0);

  const potlucksPerPage = 3;
  const pagesVisited = pageNumber * potlucksPerPage;

  //filter out private
  const filteredPotlucks = potlucks
    .filter((potluck) => potluck.private !== true)
    .reverse();

  //filter for search
  let searchedPotlucks;

  themeSearch === ""
    ? (searchedPotlucks = filteredPotlucks)
    : (searchedPotlucks = filteredPotlucks.filter(
        (potluck) => potluck[searchFilter].toLowerCase().includes(themeSearch.toLowerCase())
      ));

   
  const displayPotlucks = searchedPotlucks
    .slice(pagesVisited, pagesVisited + potlucksPerPage)
    .map((potluck) => {
      if (!potluck.private === true) {
        return <Potluck potluck={potluck} />;
      } else {
        return <></>;
      }
    });

  const pageCount = Math.ceil(searchedPotlucks.length / potlucksPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };


  //speeddial
  const speedDialActions = [
    { icon: <MovieFilterIcon />, name: 'Search by theme', filter: "potluckTheme" },
    { icon: <PersonIcon />, name: 'Search by host', filter: "potluckHost" },
    { icon: <TitleIcon />, name: 'Search by title', filter: "potluckTitle" },
  ];

  function SpeedDials() {
    const [open, setOpen] = React.useState(false);
  
  const handleClose = () => {
      setOpen(false);
    };

  const handleCloseAction = (filter) => {
    setOpen(false);
    setShowSearch("search-card-show") 
    setSearchFilter(filter)
    console.log("filter = ", filter)
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div >

      <div >
        <SpeedDial
          ariaLabel="SpeedDial example"
          icon={<SearchIcon className="speeddial"/>}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction="left"
          transitionDuration={0}
        >
          {speedDialActions.map((action) => (
            <SpeedDialAction
            className="speeddialBtns"
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipPlacement="bottom"
              onClick={() => handleCloseAction(action.filter)}
            />
          ))}
        </SpeedDial>
      </div>
      
    </div>
  );
}

const handleCloseSearch = () => {
  setShowSearch("search-card-hide");
  setThemeSearch("")
}

    //speeddial end 


  return !potlucks.length ? (
    <center>
      <CircularProgress />
    </center>
  ) : (
    <>

<SpeedDials />

<div style={{minHeight: "60px"}} >
<Card className={showSearch} >
  <CardBody>
    <div className="searchClose" onClick={() => handleCloseSearch()}>
    <CancelIcon />
    </div>
        <TextField
          name="themeSearch"
          label={searchFilter === "potluckTheme" ? "Search by theme" : searchFilter === "potluckTitle" ? "Search by title" : "Search by host"}
          margin="small"
          className="formInput behindClose"
          value={themeSearch}
          onChange={(e) => setThemeSearch(e.target.value)}
        />
  </CardBody>
</Card>
</div>


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
        breakLabel={"..."}
        breakClassName={"break-me"}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
      />
    </>
  );
};


export default PotluckList;
