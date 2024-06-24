import React, { useState, useEffect } from "react";
import "./KudosBoard.css";
import { Link } from "react-router-dom";

function KudosBoard({
  boardId,
  boardCategory,
  boardTitle,
  boardImageURL,
  onDeleteBoard,
  boardAuthor,
}) {
  const deleteBoard = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3000/kudos/boards/${boardId}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        onDeleteBoard(); // Trigger re-fetch in parent component
      }
    } catch (error) {}
  };

  return (
    <div className="KudosBoard">
      <img className="CardImage" src={boardImageURL}></img>
      <h3>{boardTitle}</h3>
      <p>{boardCategory}</p>
      <p>{boardAuthor}</p>
      <div className="buttonContainer">
        <Link to={`/boards/${boardId}`}>
          <button className="button-common view-board">View Board</button>
        </Link>{" "}
        <button className="button-common delete-board" onClick={deleteBoard}>
          Delete Board
        </button>
      </div>
    </div>
  );
}

export default KudosBoard;
