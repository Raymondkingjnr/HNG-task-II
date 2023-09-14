import React, { useState } from "react";
import { MOVIE_URL } from "../constant";
import moment from "moment/moment";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
// const date = moment().format("YYYY");

const Card = ({ movieData }) => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div className="card" data-testid="movie-card">
      <img
        src={
          `${MOVIE_URL}${movieData.poster_path}`
            ? `${MOVIE_URL}${movieData.poster_path}`
            : `${MOVIE_URL}${movieData.backdrop_path}`
        }
        alt="movie-poster"
        data-testid="movie-poster"
      />
      <div className="flex">
        <h4 data-testid="movie-release-date">
          {moment(movieData.release_date).format("YYYY")}
        </h4>
        <Link to={`/card/${movieData.id}`} className="movie-link">
          <p>View</p>
        </Link>
      </div>
      <h5 data-testid="movie-title">
        {movieData.title ? movieData.title : movieData.original_title}
      </h5>
      <div
        onClick={handleLike}
        className={`${like ? "red-icon" : "card-icon"}`}
      >
        <AiFillHeart />
      </div>
    </div>
  );
};

export default Card;
