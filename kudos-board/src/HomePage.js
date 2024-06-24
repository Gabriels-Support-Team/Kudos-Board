import "./HomePage.css";
import Query from "./Query";
import KudosBoardlist from "./KudosBoardList";
import React, { useState } from "react";
function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [recent, setRecent] = useState("asc");

  return (
    <div className="App">
      <Query
        setSearchTerm={setSearchTerm}
        setCategory={setCategory}
        setRecent={setRecent}
      />
      <KudosBoardlist
        searchTerm={searchTerm}
        category={category}
        recent={recent}
      />
    </div>
  );
}

export default HomePage;
