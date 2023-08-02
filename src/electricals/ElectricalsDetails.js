import { useState } from "react";
const ElectricalDetails = function ({
  properties,

  warranty,
}) {
  let data = properties && JSON.parse(properties);
  data = {
    warranty,
    ...data,
  };

  const [expand, setExpand] = useState(true);
  const dataArr = data && Object.entries(data);

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

export default ElectricalDetails;
