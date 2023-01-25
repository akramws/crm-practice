import React, { useState } from "react";
import { theadData, Tddata } from "./Thead";
import Contentpop from "./Contentpop";
import { Popover } from "antd";
import { FaFilter } from "react-icons/fa";

const Tablehead = ({thdata}) => {
  const [openContent, setopenContent] = useState(false);

  const searchPopfunction = () => {
    setopenContent(false);
    console.log("eee", openContent);
  };
  const hide = () => {
    setopenContent(false);
  };
  const handleOpenChange = (newOpen) => {
    setopenContent(newOpen);
  };
  return (
    <>
      <th id={thdata.accessor}>
        {thdata.Header}
        <Popover
          placement="leftBottom"
          content={
            <div className="pop-content">
              <Contentpop
                thvalue={thdata.Header}
                taccesor={thdata.accessor}
                Tddata={Tddata}
                searchPopfunction={searchPopfunction}
              />
              <div className="filter-btn-div">
                <button onClick={hide}>Search</button>
                <button>Clear</button>
              </div>
            </div>
          }
          trigger="click"
          open={openContent}
          onOpenChange={handleOpenChange}
        >
          <FaFilter style={{ fontSize: "11px" }} />
        </Popover>
      </th>
    </>
  );
};

export default Tablehead;
