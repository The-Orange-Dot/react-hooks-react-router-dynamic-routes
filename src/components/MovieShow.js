import { useParams } from "react-router";
import React from "react";

const MovieShow = ({ movies }) => {
  let params = useParams();
  console.log(params);
  return (
    <div>
      <h3>{movies[params.movieID].title}</h3>
    </div>
  );
};

export default MovieShow;
