import React from "react";
import "./KudosBoardList.css";
import KudosBoard from "./KudosBoard";
function KudosBoardList() {
  return (
    <div className="KudosBoardList">
      <KudosBoard></KudosBoard>
      <KudosBoard></KudosBoard>
      <KudosBoard></KudosBoard>
      <KudosBoard></KudosBoard>
    </div>
  );
}
export default KudosBoardList;
