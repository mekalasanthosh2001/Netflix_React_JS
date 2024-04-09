import React, { useEffect, useState } from "react";
import axios from "axios";
import "../api-files/api.css";
import { FaEye, FaSearch } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";

const Apiintegration = () => {
  const [apidata, setApidata] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState(12); // Initial number of movies displayed

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/all/day?api_key=6b2dec73b6697866a50cdaef60ccffcb"
        );
        setApidata(response.data.results);
      } catch (error) {
        console.log("Error fetching data");
      }
    };
    fetchItems();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=6b2dec73b6697866a50cdaef60ccffcb&query=${searchTerm}`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.log("Error searching movies");
    }
  };

  const loadMoreMovies = () => {
    setDisplayedMovies(displayedMovies + 5); // Increase displayed movies by 5
  };

  return (
    <>
      <div className="searchbox-container">
        <div className="moviesearch-box">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="moviepage">
        <h1>ALL MOVIES</h1>

        <div className="movie-list">
          {(searchResults.length > 0 ? searchResults : apidata)
            .slice(0, displayedMovies) // Slice based on displayedMovies
            .map((movie) => (
              <div key={movie.id} className="movie-grid-boxes">
                <div className="movie-boxes">
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title || movie.name}
                  />
                </div>
                <div className="movie-name">{movie.title || movie.name}</div>
                <div className="movie-year">
                  <span>
                    <MdUpdate />
                  </span>
                  {movie.release_date || "2024"}
                </div>
                <div className="popularity">
                  <span>
                    <FaEye />
                  </span>
                  {movie.popularity}
                </div>
              </div>
            ))}
        </div>

      <div className="load-more-container">
      {displayedMovies < (searchResults.length > 0 ? searchResults.length : apidata.length) && (
          <button onClick={loadMoreMovies} className="loardmore">Load More</button>
        )}
      </div>
      </div>


    </>
    
  );
};

export default Apiintegration;
