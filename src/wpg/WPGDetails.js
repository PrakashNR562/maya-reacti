import { useState } from "react";
const WPGDetails = function ({ properties }) {
  console.log(typeof properties);

  const data = properties && JSON.parse(properties);
  console.log(properties);
  const [expand, setExpand] = useState(true);
  const dataArr = data && Object.entries(data);
  // console.log(data);
  return (
    <li className={expand ? "has-child expand" : "has-child"}>
      <a
        className="icon-small"
        style={{ cursor: "pointer" }}
        onClick={() => {
          setExpand((prev) => !prev);
        }}
      >
        Information
      </a>
      <ul className="content">
        {dataArr &&
          dataArr.map((ele, i) => {
            return (
              <li key={i}>
                <span>{ele[0]}</span>
                <span>{ele[1]}</span>
              </li>
            );
          })}
      </ul>
    </li>
  );
};

export default WPGDetails;
