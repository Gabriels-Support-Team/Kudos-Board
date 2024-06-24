import React, { useState } from "react";

function CommentForm({ cardId, setComments, onDeleteCard }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `http://localhost:3000/kudos/cards/${cardId}/comments`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setComment(""); // Clear the input after successful submission
        onDeleteCard();
      })
      .catch((error) => {});
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment..."
        required
      />
      <button type="submit">Add Comment</button>
    </form>
  );
}

export default CommentForm;
