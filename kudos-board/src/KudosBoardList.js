import React, { useState, useEffect } from "react";
import "./KudosBoardList.css";
import KudosBoard from "./KudosBoard";
import CreateBoardForm from "./CreateBoardForm";

function KudosBoardList({ searchTerm, category, recent }) {
  const [boards, setBoards] = useState([]);
  const [error, setError] = useState(null);
  const [triggerFetch, setTriggerFetch] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Create a URL object
    const url = new URL("http://localhost:3000/kudos/boards");

    // Use URLSearchParams to handle query parameters
    const params = new URLSearchParams({
      category: category,
      sortBy: recent,
    });
    url.search = params.toString();

    fetch(url.toString())
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch boards");
        }
        return response.json();
      })
      .then((data) => {
        setTriggerFetch(false);
        setBoards(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error.toString());
      });
  }, [triggerFetch, category, recent]);
  const handleBoardChange = () => {
    setTriggerFetch(true); // Set trigger to re-fetch boards
  };
  const filteredBoards = boards.filter((board) =>
    board.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="KudosBoardList">
      <div style={{ width: "100%" }}>
        <button
          onClick={() => setModalOpen(true)}
          className="button-common category-button"
        >
          Create New Board
        </button>
      </div>
      <CreateBoardForm
        isOpen={modalOpen}
        close={() => {
          setModalOpen(false);
        }}
        className="createForm"
        onAddBoard={handleBoardChange}
      />
      {filteredBoards.map((board) => (
        <KudosBoard
          boardId={board.id}
          boardCategory={board.category}
          boardTitle={board.title}
          boardImageURL={`https://picsum.photos/200/300?random=${board.id}`}
          onDeleteBoard={handleBoardChange}
          boardAuthor={board?.author}
        />
      ))}
    </div>
  );
}
export default KudosBoardList;
