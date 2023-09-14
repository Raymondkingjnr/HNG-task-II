import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MOVIE_URL, TMDB_BASE_URL } from "../constant";

// import moment from "moment";

const SingleMovie = () => {
  const { id } = useParams();
  const [singleMovie, setSingleMovie] = useState(null);

  const fetchSingleMovie = async () => {
    try {
      const { data } = await axios(
        `${TMDB_BASE_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
      );

      setSingleMovie(data);
    } catch (error) {
      console.log("error getting movie", error);
      throw error;
    }
  };

  // console.log(singleMovie);

  useEffect(() => {
    fetchSingleMovie();
  }, []);

  const releaseDate = singleMovie?.release_date;
  const dateInUTC = new Date(releaseDate).toUTCString();

  return (
    <div className="singleMovie">
      <main>
        <img
          src={`${MOVIE_URL}${singleMovie?.backdrop_path}`}
          alt="movie_poster"
        />
        <div className="details">
          <h4 data-testid="movie-title">
            {singleMovie?.title
              ? singleMovie?.title
              : singleMovie?.original_title}
          </h4>
          <div className="time flex">
            <p data-testid="movie-release-date">{dateInUTC}</p>
            <p data-testid=" movie-runtime">{singleMovie?.runtime} mins</p>
          </div>
          <div className="genres">
            {singleMovie?.genres?.slice(0, 2)?.map((genres, index) => {
              return (
                <p index={index} key={genres.id} className="genre-btn">
                  {genres.name}
                </p>
              );
            })}
          </div>
        </div>
        <p data-testid="movie-overview" className="over-view">
          {singleMovie?.overview}
        </p>
        <Link to={"/"}>
          <button className="btn-back">Going Back?</button>
        </Link>
      </main>
    </div>
  );
};

export default SingleMovie;
