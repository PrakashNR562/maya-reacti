import { useState } from "react";
const Details = function ({ properties }) {
  const data = properties && Object.entries(JSON.parse(properties));
  console.log(data);
  const [expand, setExpand] = useState(true);

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
        {data &&
          data.map((ele) => {
            return (
              <li>
                <span>{ele[0]}</span>
                <span>{ele[1]}</span>
              </li>
            );
          })}
      </ul>
    </li>
  );
};

export default Details;
