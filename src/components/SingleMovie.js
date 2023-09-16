import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MOVIE_URL, TMDB_BASE_URL } from "../constant";
import logo from "../images/tv.png";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { LiaHomeSolid } from "react-icons/lia";
import { BiCameraMovie } from "react-icons/bi";
import { IoCalendarOutline, IoLogOutOutline } from "react-icons/io5";
import { CiPlay1 } from "react-icons/ci";

// import moment from "moment";

const SingleMovie = () => {
  const { id } = useParams();
  const [singleMovie, setSingleMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchSingleMovie = async () => {
    setLoading(true);
    try {
      const { data } = await axios(
        `${TMDB_BASE_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos,reviews,recommendations,credits`
      );

      setSingleMovie(data);
    } catch (error) {
      alert(error.message);
      // console.log(error);
    } finally {
      setLoading(false);
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
      <aside>
        <div className="top-nav">
          <img src={logo} alt="" />
          <h3>MovieBox</h3>
        </div>

        <li>
          <LiaHomeSolid /> <p>Home</p>
        </li>

        <p className="li-movies">
          <BiCameraMovie /> <p>Movies</p>
        </p>

        <li>
          <PiTelevisionSimpleLight />
          <p>Tv Series</p>
        </li>

        <li>
          <IoCalendarOutline /> <p>Up Coming</p>
        </li>

        <div className="down-notes">
          <h3>
            Play movie quizes <br /> and earn <br /> free tickets
          </h3>
          <p>50k people are playing now</p>
          <button className="start_playing">Start Playing</button>
        </div>
        <div className="logout">
          <IoLogOutOutline /> <h3>Log Out</h3>
        </div>
      </aside>
      {loading ? (
        <div className="loading"></div>
      ) : (
        <main>
          <div className="movie-card">
            <img
              src={`${MOVIE_URL}${singleMovie?.backdrop_path}`}
              alt="movie_poster"
              data-testid="movie-poster"
            />
            <div className="play-icon">
              <CiPlay1 />
            </div>
          </div>
          <div className="details">
            <h4 data-testid="movie-title">
              {singleMovie?.title
                ? singleMovie?.title
                : singleMovie?.original_title}
            </h4>
            <div className="time flex">
              <p data-testid="movie-release-date">{dateInUTC}</p>
              <p data-testid="movie-runtime">{singleMovie?.runtime} mins</p>
            </div>
            <div className="genres" data-testid="movie-genres">
              {singleMovie?.genres?.slice(0, 2)?.map((genres, index) => {
                return (
                  <p
                    index={index}
                    key={genres.id}
                    className="genre-btn"
                    data-testid="movie-genres"
                  >
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
      )}
    </div>
  );
};

export default SingleMovie;
