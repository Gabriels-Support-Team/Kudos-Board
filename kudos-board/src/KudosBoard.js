import React, { useState, useEffect } from "react";
import "./KudosBoard.css";
import { Link } from "react-router-dom";

function KudosBoard({
  boardId,
  boardCategory,
  boardTitle,
  boardImageURL,
  onDeleteBoard,
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
        console.log("Board deleted successfully");
        onDeleteBoard(); // Trigger re-fetch in parent component
      }
    } catch (error) {
      console.error("Failed to delete board:", error);
    }
  };

  return (
    <div className="KudosBoard">
      <img className="CardImage" src={boardImageURL}></img>
      <h3>{boardTitle}</h3>
      <p>{boardCategory}</p>
      <button onClick={deleteBoard}>delete</button>
      <Link to={`/boards/${boardId}`}>
        <button>View Details</button>
      </Link>{" "}
    </div>
  );
}

export default KudosBoard;
