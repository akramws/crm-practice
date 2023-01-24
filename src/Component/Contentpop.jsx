import React, { useEffect, useState } from "react";

const Contentpop = ({ thvalue, Tddata, taccesor }) => {
  const [uniqueData, setUniqueData] = useState([]);
  const [value, setValue] = useState();



  const onFunc =  () => {
     Tddata?.map((item) => {
      let arr = uniqueData
      if (!uniqueData?.includes(item[taccesor])) {
        arr.push(item[taccesor])
        return(setUniqueData(arr))
      } else{
        return(
          setUniqueData([...uniqueData])
        )
      }
    });
  };

  useEffect(() => {
    onFunc();
    setValue(uniqueData)
  }, []);

  console.log("uniqueData", uniqueData);
  return (
    <div className="filter-popup">
      <div className="pop-over">Search By{thvalue}</div>
      <div className="filter-search">
        <input type="text" className="pop-search" placeholder="Search" />
      </div>
      <div className="filter-selectall">
        <input type="radio" className="pop-search" placeholder="Search" />
        <label>Select All</label>
      </div>
      <div className="filter-item">
        {
        value?.map((item) => {
          return (
            <>
            <label htmlFor="radio">
              <input
                type="radio"
                className="filter-radio"
                placeholder="Search"
              />
              {item}
            </label>
            </>
          );
        })}
      </div>
      <div className="filter-btn-div">
        <button>Search</button>
        <button>Clear</button>
      </div>
    </div>
  );
};

export default Contentpop;
