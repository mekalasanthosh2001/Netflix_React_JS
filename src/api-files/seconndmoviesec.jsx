import React from "react";
import "../api-files/api.css";

const Secondmoviesection = ({ movies }) => {
  return (
    <>
      <div className="secondsection">
        <h1>Most Popular Movies</h1>
        <marquee
          behavior="rotate"
          style={{ width: "100%", height: "100%" }}
          scrollamount="10"
        >
          <div className="movie-listtwo">
            {movies.map((movie) => (
              <div key={movie.id} className="movie-posters">
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title || movie.name}
                />
                <p style={{ fontSize: "19px" }}>{movie.title || movie.name}</p>
              </div>
            ))}
          </div>
        </marquee>
      </div>
    </>
  );
};

export default Secondmoviesection;
