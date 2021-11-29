import React from "react";
import { Link } from "react-router-dom";

export const Names = ({ swCaracters }) => {
  return (
    <ul>
      {swCaracters.map((e) => (
        <li key={e.name}>
          {" "}
          <Link to={`/swapi-15/${encodeURI(e.name)}`}>{e.name}</Link>
        </li>
      ))}
    </ul>
  );
};
