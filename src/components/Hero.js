import React, { useEffect, useState } from "react";
import { TMDB_BASE_URL, MOVIE_URL } from "../constant";
import { BsFillPlayCircleFill } from "react-icons/bs";
// import imbd from "../images/imbd.png";
// import tomato from "../images/tomatos.png";
import axios from "axios";
import Navbar from "./Navbar";
import CardSection from "./CardSection";

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchMovies = async (search) => {
    setLoading(true);
    const type = search ? "search" : "discover";
    try {
      const {
        data: { results },
      } = await axios.get(
        `${TMDB_BASE_URL}/${type}/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${search}`
      );

      setMovies(results);
    } catch (error) {
      alert("error fetching movie", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(search);
  };

  // console.log(movies);
  const singleMovie = movies[0];
  return (
    <div>
      <div className="hero">
        <Navbar
          search={search}
          setSearch={setSearch}
          searchMovies={searchMovies}
        />
        <div
          className="hero_img"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${MOVIE_URL}${singleMovie?.backdrop_path})`,
            backgroundPosition: "center",
          }}
        >
          <div className="hero-body">
            <h4>
              {singleMovie?.title
                ? singleMovie?.title
                : singleMovie?.original_title}
            </h4>

            <p>{singleMovie?.overview}</p>
            <button>
              {" "}
              <div className="icon-play">
                <BsFillPlayCircleFill />
              </div>{" "}
              <span>play Trailer</span>
            </button>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="loading"></div>
      ) : (
        <CardSection data={movies} />
      )}
    </div>
  );
};

export default Hero;
