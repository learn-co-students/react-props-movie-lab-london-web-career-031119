import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js";

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    return movieData.map(map => (
      <MovieCard
        title={map.title}
        IMDBRating={map.IMDBRating}
        genres={map.genres}
        poster={map.poster}
      />
    ));
  };

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}
