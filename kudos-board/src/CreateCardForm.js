import React, { useState } from "react";
// import "./CreateBoardForm.css";
function CreateCardForm({ onAddBoard, isOpen, close, boardId }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [owner, setOwner] = useState("");
  const [gifURL, setGifURL] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const card = {
      title,
      description,
      owner,
      boardId: parseInt(boardId, 10),
      gifURL,
    };

    try {
      const response = await fetch("http://localhost:3000/kudos/cards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(card),
      });
      if (response.ok) {
        console.log("Board created successfully");
        onAddBoard(); // Trigger re-fetch in parent component
        close();
        setTitle("");
        setOwner("");
        setDescription("");
        setGifURL("");
      }
    } catch (error) {
      console.error("Failed to create board:", error);
    }
  };
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <form className="modal-content" onSubmit={handleSubmit}>
        <button className="modalClose" onClick={close}>
          X
        </button>
        <h2>Create a new Card</h2>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label>owner</label>
        <input
          type="text"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />
        <label>gifURL</label>
        <input
          type="text"
          value={gifURL}
          onChange={(e) => setGifURL(e.target.value)}
        />
        <button className="submit" type="submit">
          Create Card
        </button>
      </form>
    </div>
  );
}

export default CreateCardForm;
