import React, { useState, useEffect } from "react";
import "./KudosCard.css";
import CommentForm from "./CommentForm";
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
        onDeleteCard();
      }
    } catch (error) {}
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
      <h3>{cardTitle}</h3>
      <p>{cardDescription}</p>
      <img className="gifURL" src={cardGifURL}></img>
      <p>{cardOwner}</p>
      <button onClick={deleteCard}>Delete</button>
      <button onClick={handleUpvote}>Upvote</button>
      <p>Upvotes: {card.upvotes}</p>
      <CommentForm cardId={cardId} onDeleteCard={onDeleteCard} />
      <div>
        <h4>Comments:</h4>
        {card.comments.length > 0 ? (
          <ul>
            {card.comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
}

export default KudosCard;
