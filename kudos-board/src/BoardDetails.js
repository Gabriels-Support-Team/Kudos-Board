import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BoardDetails.css";
import KudosCard from "./KudosCard";
import CreateCardForm from "./CreateCardForm";
function BoardDetails() {
  const [board, setBoard] = useState("");
  const [cards, setCards] = useState();
  const [triggerFetch, setTriggerFetch] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/kudos/boards/${id}`)
      .then((response) => response.json())
      .then((response) => setBoard(response));
    fetch(`http://localhost:3000/kudos/boards/${id}/cards`)
      .then((response) => response.json())
      .then((response) => setCards(response));
  }, [id, triggerFetch]);
  const handleBoardChange = () => {
    setTriggerFetch(!triggerFetch); // Set trigger to re-fetch boards
  };
  return (
    <div className="BoardDetails">
      <h3>{board.title}</h3>
      <button onClick={() => setModalOpen(true)}>Create a Card</button>
      <CreateCardForm
        isOpen={modalOpen}
        close={() => {
          setModalOpen(false);
        }}
        className="createForm"
        onAddBoard={handleBoardChange}
        boardId={id}
      />
      <div className="cardContainer">
        {cards?.map((card) => (
          <KudosCard
            card={card}
            cardTitle={card.title}
            cardDescription={card.description}
            cardId={card.id}
            onDeleteCard={handleBoardChange}
            cardOwner={card.owner}
          ></KudosCard>
        ))}
      </div>
    </div>
  );
}
export default BoardDetails;
