import React, { useEffect, useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Names } from "./Names";
import { Details } from "./Details";
function App() {
  const [swCaracters, setSwCaracters] = useState([]);
  useEffect(() => {
    const promises = [
      fetch("https://swapi.dev/api/people/")
        .then((response) => response.json())
        .then((data) => {
          return data.results;
        }),

      fetch("https://swapi.dev/api/people/?page=2")
        .then((response) => response.json())
        .then((data) => data.results),
    ];
    Promise.all(promises).then((dta) => {
      setSwCaracters([...dta[0], ...dta[1].splice(0, 5)]);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Names swCaracters={swCaracters} />} />
        {swCaracters.map((e) => (
          <Route
            key={e.name}
            path={`/${encodeURI(e.name)}`}
            element={<Details {...e} />}
          />
        ))}
        <Route path="*" element={<h1>Not yet :c</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
