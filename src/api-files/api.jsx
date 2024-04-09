import React, { useEffect, useState } from "react";
import axios from "axios";
import "../api-files/api.css";
import { FaEye, FaSearch } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import Dashboardsecondpage from "./dashboardthirdpage";
// icons
import { FaRegEye } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import { IoIosCloseCircleOutline } from "react-icons/io";


const Apiintegration = () => {
  const [apidata, setApidata] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState(12); // Initial number of movies displayed

  const [selectedMovie, setSelectedMovie] = useState(null);


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



  const openMovieModel = (movie) => {
    setSelectedMovie(movie);
  };

  const closeMovieModel = () => {
    setSelectedMovie(null);
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
              <>
              <div key={movie.id} className="movie-grid-boxes" onClick={()=>openMovieModel(movie)}>


                
                <div className="movie-boxes"  >
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

              {/* movie model popo */}
              
           {selectedMovie && (
          <div className="movie-model">
            <div className="movie-poster">
              <img
                src={`https://image.tmdb.org/t/p/w200${selectedMovie.poster_path}`}
                alt={selectedMovie.title || selectedMovie.name}
              />
            
            <div className="movie-details">
              <h2 style={{color:'skyblue'}}>{selectedMovie.title || selectedMovie.name}</h2>
              <p>{selectedMovie.overview}</p>
              <div className="movie-details-pera">
                <span>Release Date: {selectedMovie.release_date || 2024-11-20}</span>
                <span> <BiSolidCameraMovie />{selectedMovie.media_type}  &nbsp;</span>
                <span> <MdLanguage /> {selectedMovie.original_language} </span>
              </div>
                <p style={{color:'orange'}}><FaRegEye /> {selectedMovie.popularity}</p>
            </div> 
            
            <div className="close-movie-poster" onClick={closeMovieModel}>
            <IoIosCloseCircleOutline  size={30} style={{cursor:'pointer'}}/>

              </div>
          </div>
          </div>
        )}

              </>
            ))}
        </div>

      <div className="load-more-container">
      {displayedMovies < (searchResults.length > 0 ? searchResults.length : apidata.length) && (
          <button onClick={loadMoreMovies} className="loardmore">Load More</button>
        )}
      </div>
      </div>

<div> 
  <Dashboardsecondpage movies={searchResults.length > 0 ? searchResults : apidata}></Dashboardsecondpage>
</div>

       
    </>
    
  );
};

export default Apiintegration;
