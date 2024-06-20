import React from "react";
import "./Query.css";
function Query({ setSearchTerm, setCategory }) {
  return (
    <div className="sortAndFilter">
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
        className="searchBar"
      />

      <div className="filters">
        <button
          // onClick={() => submitSearch(searchQuery)}
          className="button-common category-button"
          onClick={() => {
            setCategory("");
          }}
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
          onClick={() => {
            setCategory("Celebration");
          }}
        >
          Celebration
        </button>
        <button
          // onClick={() => submitSearch(searchQuery)}
          className="button-common category-button"
          onClick={() => {
            setCategory("Thank you");
          }}
        >
          Thank you
        </button>
        <button
          // onClick={() => submitSearch(searchQuery)}
          className="button-common category-button"
          onClick={() => {
            setCategory("Inspiration");
          }}
        >
          Inspiration
        </button>
        <div className="center-button-container"></div>
      </div>
    </div>
  );
}
export default Query;
