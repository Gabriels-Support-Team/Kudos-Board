import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import BoardDetails from "./BoardDetails";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
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
