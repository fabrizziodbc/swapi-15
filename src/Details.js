import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Details = ({ name, height, eye_color, films, vehicles }) => {
  const [vehicleList, setVehicleList] = useState([]);
  const [filmList, setFilmList] = useState([]);
  useEffect(() => {
    const filmsPromises = films.map((e) =>
      fetch(e)
        .then((response) => response.json())
        .then((data) => data)
    );
    Promise.all(filmsPromises).then((dta) => setFilmList(dta));

    const vehiclesPromises = vehicles.map((e) =>
      fetch(e)
        .then((response) => response.json())
        
    );
    Promise.all(vehiclesPromises).then((dta) => setVehicleList(dta));
  }, []);
  console.log(filmList);
  return (
    <ul>
      {name.length > 0 && <li>{`Nombre: ${name}`}</li>}
      {height.length > 0 && <li>{`Estatura: ${height}`}</li>}
      {eye_color.length > 0 && <li>{`Estatura: ${eye_color}`}</li>}
      {films.length > 0 && (
        <li>
          <ul>
            Películas:
            {filmList.map((e) => (
              <li>
                <Link to={`/swapi-15/${encodeURI(e.title)}`}>{e.title}</Link>
              </li>
            ))}
          </ul>
        </li>
      )}
      {vehicles.length > 0 && (
        <li>
          <ul>
            Vehículos:
            {vehicleList.map((e) => (
              <li>
                <Link to={`/${encodeURI(e.name)}`}>{e.name}</Link>
              </li>
            ))}
          </ul>
        </li>
      )}
    </ul>
  );
};
