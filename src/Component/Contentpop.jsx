import React, { useEffect, useState } from "react";

const Contentpop = ({ thvalue, Tddata, taccesor }) => {
  const [uniqueData, setUniqueData] = useState([]);
  const [radioData, setradioData] = useState([]);
  const [value, setValue] = useState();

  const onFunc = () => {
    Tddata?.map((item) => {
      let arr = uniqueData;
      if (!uniqueData?.includes(item[taccesor])) {
        arr.push(item[taccesor]);
        return setUniqueData(arr);
      } else {
        return setUniqueData([...uniqueData]);
      }
    });
  };

  useEffect(() => {
    onFunc();
    setValue(uniqueData);
  }, []);

  console.log("radioval", radioData);

  const radioInputHandle = (e) => {
    let array = radioData;
    let arrayValue = e.target.value;

    if (e.target.checked === true) {
      array.push(arrayValue);

      return setradioData(array);
    } else if (e.target.checked === false) {
      let array = radioData.filter((a) => {
        return a !== arrayValue;
      });

      return setradioData(array);
    }
  };
 
  return (
    <div className="filter-popup">
      <div className="pop-over">Search By{thvalue}</div>
      <div className="filter-search">
        <input type="text" className="pop-search" placeholder="Search" />
      </div>
      <div className="filter-selectall">
        <input type="checkbox" className="pop-search" placeholder="Search" />
        <label htmlFor="checkbox"></label>
        <p>Select All</p>
      </div>
      <div className="filter-item">
        {value?.map((item) => {
          return (
            <>
              <label htmlFor="radio">
                <input
                  type="checkbox"
                  className="filter-radio"
                  placeholder="Search"
                  onClick={radioInputHandle}
                  value={item}
                />
                {item}
              </label>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Contentpop;
