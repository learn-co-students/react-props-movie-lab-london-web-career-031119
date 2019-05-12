import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {

    return movieData.map(movie => {
      return <MovieCard title={movie.title} IMDBRating={movie.IMDBRating} genres={movie.genres} poster={movie.poster} />
    })
  }

  render() {
    const movie = {
      title: 'Choux and Maru go to Istanbul',
      IMDBRating: 3,
      genres: ['cats', 'adventure', 'romance'],
      poster: 'choux-maru-istanbul'
    }

    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
