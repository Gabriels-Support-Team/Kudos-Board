import React, { useState } from "react";
import "./CreateBoardForm.css";

function CreateBoardForm({ onAddBoard, isOpen, close }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [author, setAuthor] = useState("");

  const categoryOptions = ["Celebration", "Thank you", "Inspiration"];
  const newBoard = () => {
    onAddBoard(); // Trigger re-fetch in parent component
    close(); // Close the form/modal
    setTitle(""); // Reset title state
    setCategory(""); // Reset category state
    setAuthor(""); // Reset author state
    setImageURL(""); // Reset image URL state
  };

  const CreateBoard = async (event) => {
    event.preventDefault();
    const board = { title, category, author };

    try {
      const response = await fetch("http://localhost:3000/kudos/boards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(board),
      });
      if (response.ok) {
        newBoard();
      }
    } catch (error) {}
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <form className="modal-content" onSubmit={CreateBoard}>
        <button className="modalClose" onClick={close}>
          X
        </button>
        <h2>Create a new Board</h2>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e?.target?.value)}
          required
        />
        <label>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e?.target?.value)}
          required
        >
          <option value="">Select a category</option>
          {categoryOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label>Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e?.target?.value)}
        />
        <button className="submit" type="submit">
          Create Board
        </button>
      </form>
    </div>
  );
}

export default CreateBoardForm;
