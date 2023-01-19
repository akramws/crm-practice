import React from "react";
import "./Style/Candidate.css";
import text from "../assets/images/Wiseskulls_Text.png";

const Candidate = () => {
  return (
    <div className="candidate-page">
      <div className="header"></div>
      <div className="candidate-container">
        <nav className="candidate-navbar">
          <div className="search-navbar">
            <div className="search-input">
              <span>search logo</span>
              <input type="text" placeholder="Search any.." />
              <span></span>
            </div>
          </div>
          <div className="candidate-logo">Candidates' Listing</div>
          <div className="nav-btn">
            <button>Reset</button>
            <button>Export</button>
            <button>User ManageMent</button>
          </div>
        </nav>
        <main className="candidate-main"></main>
        <footer className="candidate-footer"></footer>
      </div>
      <footer className="name-footer">
        <img src={text} alt="Wiseskulls" />
      </footer>
    </div>
  );
};

export default Candidate;
