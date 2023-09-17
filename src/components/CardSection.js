import React from "react";
import { GrFormNext } from "react-icons/gr";
import Movies from "./Movies";

const CardSection = ({ data }) => {
  return (
    <div className="card_section">
      <div className="header">
        <h4>Featured Movie</h4>
        <button>
          see more{" "}
          <span className="more-icon">
            <GrFormNext style={{ color: "red" }} />
          </span>
        </button>
      </div>
      {data.length === 0 ? (
        <h3 style={{ textAlign: "center", paddingTop: "2rem" }}>
          Movie Not Found
        </h3>
      ) : (
        ""
      )}
      <div className="card-list">
        {data.slice(0, 10).map((movie, index) => {
          return <Movies movieData={movie} index={index} key={movie.id} />;
        })}
      </div>
    </div>
  );
};

export default CardSection;
