import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import BoardDetails from "./BoardDetails";
import "./App.css";
import Header from "./header";

function App() {
  return (
    <div>
      <header className="App-header">
        <Header></Header>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/boards/:id" element={<BoardDetails />} />
        </Routes>
      </Router>
      <footer className="footer">© 2024 Gabriel Alvarado</footer>
    </div>
  );
}

export default App;
