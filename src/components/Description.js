import { useState } from "react";
const Description = function ({ description }) {
  const [expand, setExpand] = useState(true);
  if (!description) {
    return;
  }
  const descArray = description.split(";");

  return (
    <li className={expand ? "has-child expand" : "has-child"}>
      <a
        className="icon-small"
        style={{ cursor: "pointer" }}
        onClick={() => {
          setExpand((prev) => !prev);
        }}
      >
        Description
      </a>
      <div className="content">
        {descArray.map((ele) => {
          return <p>{ele}</p>;
        })}
      </div>
    </li>
  );
};

export default Description;
