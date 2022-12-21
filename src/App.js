import React, { useState } from "react";
import "./styles.css";

const movieDb = {
  Comics: [
    { name: "The Avengers", time: "Time: 2h 23m", rating: "rating: 4.8/5" },
    { name: "Justice League", time: "Time: 2h 5m", rating: "rating: 4.8/5" },
    {
      name: "Avengers: End Game",
      time: "Time: 2h 50m",
      rating: "rating: 4.9/5"
    }
  ],
  Romance: [
    { name: "Titanic", time: "Time: 3h 15m", rating: "rating: 4.8/5" },
    { name: "Forrest Gump", time: "Time: 2h 22m", rating: "rating: 4.6/5" },
    { name: "Romieo & juliet", time: "Time: 2h 29m", rating: "rating: 4.4/5" }
  ],
  Comedy: [
    { name: "Men In Black", time: "Time: 1h 46m", rating: "rating: 4.8/5" },
    { name: "Dolittle", time: "Time: 1h 41m", rating: "rating: 4.8/5" },
    { name: "Mr.Bean", time: "Time: 2h 41m", rating: "rating: 4.2/5" }
  ]
};

var mostFavMovie = Object.keys(movieDb);

export default function App() {
  const [selectedGenre, setGenre] = useState("Comedy");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1 style={{ fontSize: "60px" }}>Hollywood Movies</h1>
      <h3 style={{ fontSize: "20px" }}>
        Here is some Hollywood movies which I recommend!.
      </h3>
      {mostFavMovie.map((movie) => (
        <button
          key={movie}
          style={{
            cursor: "pointer",
            background: "#fca5a5",
            borderRadius: "0.5rem",
            padding: "0.5rem  1rem",
            border: "1px solid black",
            margin: "1rem 0.3rem"
          }}
          onClick={() => genreClickHandler(movie)}
        >
          {movie}
        </button>
      ))}

      <br />
      <br />
      <hr />
      <div>
        <ul>
          {movieDb[selectedGenre].map((movie) => (
            <li
              key={movie}
              style={{
                display: "block",
                alignItems: "center",
                listStyle: "none",
                padding: "3rem",
                border: "1px solid #be123c",
                width: "60%",
                margin: "2rem auto",
                borderRadius: "0.5rem",
                backgroundColor: "#fb7185"
              }}
            >
              {""}
              <div
                style={{
                  fontSize: "1.6rem",
                  color: "black",
                  fontWeight: "bold"
                }}
              >
                {" "}
                {movie.name}{" "}
              </div>
              <br />
              <hr />
              <div
                style={{
                  fontSize: "1.1rem",
                  color: "black",
                  fontWeight: "bold"
                }}
              >
                {" "}
                {movie.time}{" "}
              </div>
              <div
                style={{ fontSize: "1rem", color: "black", fontWeight: "bold" }}
              >
                {" "}
                {movie.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
