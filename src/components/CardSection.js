import React from "react";
import { GrFormNext } from "react-icons/gr";
import Card from "./Card";

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
      <div className="card-list">
        {data.slice(0, 10).map((movie, index) => {
          return <Card movieData={movie} index={index} key={movie.id} />;
        })}
      </div>
    </div>
  );
};

export default CardSection;
