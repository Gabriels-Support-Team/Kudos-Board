import React from "react";
import "./KudosBoard.css";
function KudosBoard() {
  return (
    <div className="KudosBoard">
      <img className="CardImage" src="logo.png" alt=""></img>
      <p className="movieTitle">Title</p>
      <p className="movieRating">Category</p>
      <div className="toggleContainer">
        <div className="checkBoxContainer">
          <input
            className="checkBox"
            type="checkbox"
            // checked={watchedMovies.includes(movieTitle)}
            // onChange={toggleWathchedInternal}
            // onClick={(event) => event.stopPropagation()}
            // id={`watched-${movieTitle}`}
          />
          <label>Watched</label>
        </div>
      </div>
    </div>
  );
}
export default KudosBoard;
