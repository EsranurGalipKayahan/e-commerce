import React from "react";
import "../../styles/list.css";

export const List = ({ list }) => {
  console.log(list);
  return (
    <div className="list">
      {list.map((item) => {
        const keys = Object.keys(item);
        console.log(keys);
        return (
          <div className="list-item">
            {keys.map((k) => (
              <p key={k}>
                {typeof item[k] === "boolean" ? `${item[k]}` : item[k]}
              </p>
            ))}
          </div>
        );
      })}
    </div>
  );
};
