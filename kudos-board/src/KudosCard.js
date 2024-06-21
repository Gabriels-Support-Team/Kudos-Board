import React, { useState, useEffect } from "react";
import "./KudosCard.css";

function KudosCard({
  card,
  cardId,
  cardOwner,
  cardTitle,
  cardGifURL,
  onDeleteBoard,
  cardDescription,
  onDeleteCard,
}) {
  const deleteCard = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3000/kudos/cards/${cardId}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        console.log("Card deleted successfully");
        onDeleteCard();
      }
    } catch (error) {
      console.error("Failed to delete Card:", error);
    }
  };
  const handleUpvote = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/kudos/cards/${cardId}/upvote`,
        {
          method: "POST",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to upvote");
      }
      console.log("Upvoted successfully!");
      onDeleteCard();
    } catch (error) {
      console.error("Error upvoting:", error);
    }
  };

  return (
    <div className="kudosCard">
      {/* <img className="CardImage" src={boardImageURL}></img> */}
      <h3>{cardTitle}</h3>
      <p>{cardDescription}</p>
      <p>{cardOwner}</p>
      <button onClick={deleteCard}>delete</button>
      <button onClick={handleUpvote}>Upvote</button>
      <p>Upvotes: {card.upvotes}</p>
    </div>
  );
}

export default KudosCard;
