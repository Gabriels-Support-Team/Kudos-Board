import "./HomePage.css";
import Header from "./header";
import Query from "./Query";
import KudosBoardlist from "./KudosBoardList";
import React, { useState } from "react";
function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="App">
      <Query setSearchTerm={setSearchTerm} setCategory={setCategory} />
      <KudosBoardlist searchTerm={searchTerm} category={category} />
    </div>
  );
}

export default HomePage;
