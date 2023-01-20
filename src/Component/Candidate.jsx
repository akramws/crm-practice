import React from "react";
import "./Style/Candidate.css";
import text from "../assets/images/Wiseskulls_Text.png";
import { BiSearch } from "react-icons/bi";
import { BiChevronDown, BiReset } from "react-icons/bi";
import { TbDownload } from "react-icons/tb";
import { FaFilter } from "react-icons/fa";
import { GrFormNext } from "react-icons/gr";
import { RxDoubleArrowRight } from "react-icons/rx";

const Candidate = () => {
  return (
    <div className="candidate-page">
      <div className="candidate-container">
        <nav className="candidate-navbar">
          <div className="search-navbar">
            <div className="search-input">
              <span className="search-icon">
                <BiSearch style={{ fontSize: "24px" }} />
              </span>
              <input type="text" placeholder="Search any.." />
              <span>
                <button className="search-btn">
                  Search Any
                  <BiChevronDown style={{ fontSize: "21px" }} />
                </button>
              </span>
            </div>
          </div>
          <div className="logotext-div">
          <div className="candidate-logo">Candidates' Listing</div></div>
          <div className="nav-btn">
            <button className="btn-reset">
              <BiReset style={{ fontSize: "16px" }} />
              Reset
            </button>
            <button className="btn-export">
              <TbDownload style={{ fontSize: "16px" }} />
              Export
            </button>
            <button className="btn-usermanage">User ManageMent</button>
          </div>
        </nav>
        <main className="candidate-main">
          <table>
            <thead>
              <tr>
                <th>
                  ID <FaFilter />
                </th>
                <th>
                  Job Title <FaFilter />
                </th>
                <th>
                  Candidate's Name <FaFilter />
                </th>
                <th>
                  User <FaFilter />
                </th>
                <th>
                  Contacts <FaFilter />
                </th>
                <th>
                  Profile Source <FaFilter />
                </th>
                <th>
                  Available In Job Market <FaFilter />
                </th>
                <th>
                  Current Location <FaFilter />
                </th>
                <th>
                  Visa Type
                  <FaFilter />
                </th>
                <th>
                  Job Location
                  <FaFilter />
                </th>
                <th>
                  Sales Person
                  <FaFilter />
                </th>
                <th>
                  Hiring Manager
                  <FaFilter />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>125869</td>
                <td>Java Developer</td>
                <td>Vinay Sharma</td>
                <td>Amaan</td>
                <td>9101267898</td>
                <td>Linkedin</td>
                <td>Yes</td>
                <td>New York</td>
                <td>H1 N1</td>
                <td>New york city</td>
                <td>DigVijay</td>
                <td>Parth</td>
              </tr>
              <tr>
                <td>187830</td>
                <td>Android Developer</td>
                <td>Path Patel</td>
                <td>Amaan</td>
                <td>9664853392</td>
                <td>Monster</td>
                <td>Yes</td>
                <td>Seattle</td>
                <td>Green Card</td>
                <td>Missouri</td>
                <td>Jaimin</td>
                <td>Milli</td>
              </tr>
              <tr>
                <td>100869</td>
                <td>IOS Developer</td>
                <td>Vikas Kapoor</td>
                <td>Shoeb</td>
                <td>8101267898</td>
                <td>Linkedin</td>
                <td>Yes</td>
                <td>New Jersey</td>
                <td>H1 N1</td>
                <td>New Orleans</td>
                <td>Mili</td>
                <td>Anjali</td>
              </tr>
              <tr>
                <td>187830</td>
                <td>Android Developer</td>
                <td>Path Patel</td>
                <td>Amaan</td>
                <td>9664853392</td>
                <td>Monster</td>
                <td>Yes</td>
                <td>Seattle</td>
                <td>Green Card</td>
                <td>Missouri</td>
                <td>Jaimin</td>
                <td>Milli</td>
              </tr>
              <tr>
                <td>100869</td>
                <td>IOS Developer</td>
                <td>Vikas Kapoor</td>
                <td>Shoeb</td>
                <td>8101267898</td>
                <td>Linkedin</td>
                <td>Yes</td>
                <td>New Jersey</td>
                <td>H1 N1</td>
                <td>New Orleans</td>
                <td>Mili</td>
                <td>Anjali</td>
              </tr>
              <tr>
                <td>125869</td>
                <td>Java Developer</td>
                <td>Vinay Sharma</td>
                <td>Amaan</td>
                <td>9101267898</td>
                <td>Linkedin</td>
                <td>Yes</td>
                <td>New York</td>
                <td>H1 N1</td>
                <td>New york city</td>
                <td>DigVijay</td>
                <td>Parth</td>
              </tr>
              <tr>
                <td>100869</td>
                <td>IOS Developer</td>
                <td>Vikas Kapoor</td>
                <td>Shoeb</td>
                <td>8101267898</td>
                <td>Linkedin</td>
                <td>Yes</td>
                <td>New Jersey</td>
                <td>H1 N1</td>
                <td>New Orleans</td>
                <td>Mili</td>
                <td>Anjali</td>
              </tr>
              <tr>
                <td>187830</td>
                <td>Android Developer</td>
                <td>Path Patel</td>
                <td>Amaan</td>
                <td>9664853392</td>
                <td>Monster</td>
                <td>Yes</td>
                <td>Seattle</td>
                <td>Green Card</td>
                <td>Missouri</td>
                <td>Jaimin</td>
                <td>Milli</td>
              </tr>
              <tr>
                <td>125869</td>
                <td>Java Developer</td>
                <td>Vinay Sharma</td>
                <td>Amaan</td>
                <td>9101267898</td>
                <td>Linkedin</td>
                <td>Yes</td>
                <td>New York</td>
                <td>H1 N1</td>
                <td>New york city</td>
                <td>DigVijay</td>
                <td>Parth</td>
              </tr>
              <tr>
                <td>100869</td>
                <td>IOS Developer</td>
                <td>Vikas Kapoor</td>
                <td>Shoeb</td>
                <td>8101267898</td>
                <td>Linkedin</td>
                <td>Yes</td>
                <td>New Jersey</td>
                <td>H1 N1</td>
                <td>New Orleans</td>
                <td>Mili</td>
                <td>Anjali</td>
              </tr>
            </tbody>
          </table>
        </main>
        <footer className="candidate-footer">
          <div className="entries">Showing 1 to 10 of 5545 entries</div>
          <div className="footer-pageresult">
            <div className="per-page">Result per page</div>
            <input type="number" placeholder="10" disabled></input>
            <button>
              <BiChevronDown style={{ fontSize: "21px" }} />
            </button>
          </div>
          <div className="pagination-div">
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>
              <GrFormNext style={{ fontSize: "14px" }} />
            </button>
            <button>
              <RxDoubleArrowRight style={{ fontSize: "14px" }}  />
            </button>
          </div>
        </footer>
      </div>
      <footer className="name-footer">
        <img src={text} alt="Wiseskulls" />
      </footer>
    </div>
  );
};

export default Candidate;
