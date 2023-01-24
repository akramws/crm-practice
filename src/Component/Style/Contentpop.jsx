import React from "react";

const Contentpop = ({mainTh}) => {
  return (
    <div className="filter-popup">
      <div className="pop-over">Search By {mainTh}</div>
      <div className="filter-search">
        <input type="text" className="pop-search" placeholder="Search" />
      </div>
      <div className="filter-selectall">
        <input type="radio" className="pop-search" placeholder="Search" />
        <label>Select All</label>
      </div>
      <div className="filter-item">
        <label>
          <input type="radio" className="filter-radio" placeholder="Search" />
          125869
        </label>
        <label>
          <input type="radio" className="filter-radio" placeholder="Search" />
          187830
        </label>
        <label>
          <input type="radio" className="filter-radio" placeholder="Search" />
          100869
        </label>
        <label>
          <input type="radio" className="filter-radio" placeholder="Search" />
          187830
        </label>
        <label>
          <input type="radio" className="filter-radio" placeholder="Search" />
          100869
        </label>
        <label>
          <input type="radio" className="filter-radio" placeholder="Search" />
          125869
        </label>
        <label>
          <input type="radio" className="filter-radio" placeholder="Search" />
          100869
        </label>
        <label>
          <input type="radio" className="filter-radio" placeholder="Search" />
          187830
        </label>
        <label>
          <input type="radio" className="filter-radio" placeholder="Search" />
          125869
        </label>
        <label>
          <input type="radio" className="filter-radio" placeholder="Search" />
          100869
        </label>
      </div>
      <div className="filter-btn-div">
        <button>Search</button>
        <button>Clear</button>
      </div>
    </div>
  );
};

export default Contentpop;
