import React from "react";
import "./Query.css";
function Query() {
  return (
    <div className="Searchbar">
      <input
        type="text"
        value="{searchQuery}"
        onChange="{handleSearchChange}"
        placeholder="Search"
        className="searchBar"
      />
      <button
        // onClick={() => submitSearch(searchQuery)}
        className="button-common category-button"
      >
        Search🔍
      </button>
      <div className="filters">
        <button
          // onClick={() => submitSearch(searchQuery)}
          className="button-common category-button"
        >
          All
        </button>
        <button
          // onClick={() => submitSearch(searchQuery)}
          className="button-common category-button"
        >
          Recent
        </button>
        <button
          // onClick={() => submitSearch(searchQuery)}
          className="button-common category-button"
        >
          Celebration
        </button>
        <button
          // onClick={() => submitSearch(searchQuery)}
          className="button-common category-button"
        >
          Thank you
        </button>
        <button
          // onClick={() => submitSearch(searchQuery)}
          className="button-common category-button"
        >
          Celebration
        </button>
        <div className="center-button-container">
          <button
            // onClick={() => submitSearch(searchQuery)}
            className="button-common category-button"
          >
            Create New Board
          </button>
        </div>
      </div>
    </div>
  );
}
export default Query;
