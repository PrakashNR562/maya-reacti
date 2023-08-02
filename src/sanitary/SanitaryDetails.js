import { useState } from "react";
const SanitaryDetails = function ({ properties }) {
  const data = properties && Object.entries(properties);
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

export default SanitaryDetails;
