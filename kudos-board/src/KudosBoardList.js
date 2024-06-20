import React, { useState, useEffect } from "react";
import "./KudosBoardList.css";
import KudosBoard from "./KudosBoard";
import CreateBoardForm from "./CreateBoardForm";

function KudosBoardList({ searchTerm, category }) {
  const [boards, setBoards] = useState([]);
  const [error, setError] = useState(null);
  const [triggerFetch, setTriggerFetch] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch(
      `http://localhost:3000/kudos/boards?category=${encodeURIComponent(
        category
      )}`
    )
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
  }, [triggerFetch, category]);
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
        />
      ))}
    </div>
  );
}
export default KudosBoardList;
