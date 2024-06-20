import "./App.css";
import Header from "./header";
import Query from "./Query";
import KudosBoardlist from "./KudosBoardList";
import React, { useState } from "react";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <Query setSearchTerm={setSearchTerm} setCategory={setCategory} />
      <KudosBoardlist searchTerm={searchTerm} category={category} />
      <footer className="footer">© 2024 Gabriel Alvarado</footer>
    </div>
  );
}

export default App;
