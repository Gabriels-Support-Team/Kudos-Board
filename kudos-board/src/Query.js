import React from "react";
import "./Query.css";
function Query({ setSearchTerm, setCategory, setRecent }) {
  return (
    <div className="sortAndFilter">
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Boards..."
        className="searchBar"
      />

      <div className="filters">
        <button
          className="button-common category-button"
          onClick={() => {
            setCategory("");
            setRecent("asc");
          }}
        >
          All
        </button>
        <button
          className="button-common category-button"
          onClick={() => {
            setCategory("");
            setRecent("desc");
          }}
        >
          Recent
        </button>
        <button
          className="button-common category-button"
          onClick={() => {
            setCategory("Celebration");
          }}
        >
          Celebration
        </button>
        <button
          className="button-common category-button"
          onClick={() => {
            setCategory("Thank you");
          }}
        >
          Thank you
        </button>
        <button
          className="button-common category-button"
          onClick={() => {
            setCategory("Inspiration");
          }}
        >
          Inspiration
        </button>
      </div>
    </div>
  );
}
export default Query;
