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
        `${TMDB_BASE_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos,reviews,recommendations,credits`
      );

      setSingleMovie(data);
    } catch (error) {
      console.log("error getting movie", error);
      throw error;
    }
  };

  console.log(singleMovie);

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
        <div className="infos">
          <div>
            <p data-testid="movie-overview" className="over-view">
              {singleMovie?.overview}
            </p>
            <div className="director">
              {singleMovie?.reviews?.results
                ?.slice(0, 1)
                ?.map((item, index) => {
                  return (
                    <h2 index={index} key={item.id}>
                      Director:{" "}
                      <span style={{ color: "tomato", fontWeight: "500" }}>
                        {item.author}
                      </span>
                    </h2>
                  );
                })}
            </div>
          </div>
        </div>
        <Link to={"/"}>
          <button className="btn-back">Going Back?</button>
        </Link>
      </main>
    </div>
  );
};

export default SingleMovie;
