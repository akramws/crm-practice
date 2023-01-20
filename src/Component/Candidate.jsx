import React from "react";
import "./Style/Candidate.css";
import text from "../assets/images/Wiseskulls_Text.png";
import { BiSearch } from "react-icons/bi";
import { BiChevronDown, BiReset } from "react-icons/bi";
import { TbDownload } from "react-icons/tb";
import { RiFilter2Fill } from "react-icons/ri";
import { GrFormNext } from "react-icons/gr";
import { RxDoubleArrowRight } from "react-icons/rx";

const Candidate = () => {
  return (
    <div className="candidate-page">
      <div className="header"></div>
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
          <div className="candidate-logo">Candidates' Listing</div>
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
                  ID <RiFilter2Fill />
                </th>
                <th>
                  Job Title <RiFilter2Fill />
                </th>
                <th>
                  Candidate's Name <RiFilter2Fill />
                </th>
                <th>
                  User <RiFilter2Fill />
                </th>
                <th>
                  Contacts <RiFilter2Fill />
                </th>
                <th>
                  Profile Source <RiFilter2Fill />
                </th>
                <th>
                  Available In Job Market <RiFilter2Fill />
                </th>
                <th>
                  Current Location <RiFilter2Fill />
                </th>
                <th>
                  Visa Type
                  <RiFilter2Fill />
                </th>
                <th>
                  Job Location
                  <RiFilter2Fill />
                </th>
                <th>
                  Sales Person
                  <RiFilter2Fill />
                </th>
                <th>
                  Hiring Manager
                  <RiFilter2Fill />
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
