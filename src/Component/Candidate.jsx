import React, { useState } from "react";
import "./Style/Candidate.css";
import { BiSearch } from "react-icons/bi";
import {  BiReset } from "react-icons/bi";
import { TbDownload } from "react-icons/tb";
import { FaFilter } from "react-icons/fa";
import { GrFormNext } from "react-icons/gr";
import { RxDoubleArrowRight } from "react-icons/rx";
import Header from "./Header";
import { useNavigate } from "react-router";
import Sidebar from "./Sidebar";
import { Modal } from "antd";
import { Select } from "antd";

const Candidate = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };

  const { Option } = Select;
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <>
      <Modal
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        className="candidate-export"
      >
        <div className="export-div" title='User Management Created By Vikas'>
          <div className="export-button-div">
            <div className="export-text">
              <p>Export</p>
            </div>
            <div className="cross-button">
              <button className="x-btn" onClick={hideModal}>
                x
              </button>
            </div>
          </div>
          <div className="export-type">
            <span>Export As</span>
            <input type="radio" id="excel" />
            <label htmlFor="excel">Excel</label>
            <input type="radio" id="csv" />
            <label htmlFor="csv">CSV</label>
          </div>
          <div className="checkbox-div">
            <div className="select-label">
              <label>
                <input type="checkbox"></input>Select All
              </label>
            </div>
            <div className="all-checkbox">
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
            </div>
            <div className="all-checkbox">
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
            </div>
            <div className="all-checkbox">
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
            </div>
            <div className="all-checkbox">
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
            </div>
            <div className="all-checkbox">
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
            </div>
            <div className="all-checkbox">
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
            </div>
            <div className="all-checkbox">
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
            </div>
            <div className="all-checkbox">
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
            </div>
            <div className="all-checkbox">
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
            </div>

            <div className="all-checkbox">
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
            </div>
            <div className="all-checkbox">
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
            </div>
            <div className="all-checkbox">
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
            </div>
            <div className="all-checkbox">
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
              <label>
                <input type="checkbox"></input>Username
              </label>
            </div>
          </div>
          <div className="exportbtn">
            <button className="export-button" onClick={hideModal}>
              Export
            </button>
            <button className="cancel-button" onClick={hideModal}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
      <Header />
      <div className="candidate-page" title='User Management Created By Vikas'>
        <div className="candidate-container">
          <nav className="candidate-navbar">
            <div className="search-navbar">
              <div className="search-input">
                <span className="search-icon">
                  <BiSearch style={{ fontSize: "24px" }} />
                </span>
                <input type="text" placeholder="Search any.." />
                <span>
                  <div className="search-btn">
                    <Select
                      defaultValue="Search Any"
                      onChange={handleChange}
                    >
                      <Option value="Job Title">Job Title</Option>
                      <Option value="User">User</Option>
                      <Option value="Contacts" >
                      Contacts
                      </Option>
                      <Option value="Current Location">Current Location</Option>
                    </Select>
                  </div>
                </span>
              </div>
            </div>
            <div className="logotext-div">
              <div className="candidate-logo">Candidates' Listing</div>
            </div>
            <div className="nav-btn">
              <button className="btn-reset">
                <BiReset style={{ fontSize: "16px" }} />
                Reset
              </button>
              <button className="btn-export" onClick={showModal}>
                <TbDownload style={{ fontSize: "16px" }} />
                Export
              </button>
              <button
                className="btn-usermanage"
                onClick={() => navigate("/user-management")}
              >
                User ManageMent
              </button>
            </div>
          </nav>
          <main className="candidate-main">
            <table>
              <thead>
                <tr>
                  <th>
                    ID <FaFilter style={{ fontSize: "11px" }} />
                  </th>
                  <th>
                    Job Title <FaFilter style={{ fontSize: "11px" }} />
                  </th>
                  <th>
                    Candidate's Name <FaFilter style={{ fontSize: "11px" }} />
                  </th>
                  <th>
                    User <FaFilter style={{ fontSize: "11px" }} />
                  </th>
                  <th>
                    Contacts <FaFilter style={{ fontSize: "11px" }} />
                  </th>
                  <th>
                    Profile Source <FaFilter style={{ fontSize: "11px" }} />
                  </th>
                  <th>
                    Available In Job Market{" "}
                    <FaFilter style={{ fontSize: "11px" }} />
                  </th>
                  <th>
                    Current Location <FaFilter style={{ fontSize: "11px" }} />
                  </th>
                  <th>
                    Visa Type <FaFilter style={{ fontSize: "11px" }} />
                  </th>
                  <th>
                    Job Location <FaFilter style={{ fontSize: "11px" }} />
                  </th>
                  <th>
                    Sales Person <FaFilter style={{ fontSize: "11px" }} />
                  </th>
                  <th>
                    Hiring Manager <FaFilter style={{ fontSize: "11px" }} />
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
              <div>
                <Select
                  defaultValue="1-10"
                  style={{ width: 100 }}
                  onChange={handleChange}
                >
                  <Option value="page 1">1-10</Option>
                  <Option value="page 2">11-20</Option>
                  <Option value="page 3">21-30</Option>
                  <Option value="page 4">31-40</Option>
                </Select>
              </div>
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
                <RxDoubleArrowRight style={{ fontSize: "14px" }} />
              </button>
            </div>
          </footer>
        </div>
        <footer className="name-footer">
          <div>Wiseskulls</div>
        </footer>
        <Sidebar />
      </div>
    </>
  );
};

export default Candidate;
