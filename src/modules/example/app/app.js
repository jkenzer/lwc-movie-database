import { LightningElement } from "lwc";

export default class HelloWorldApp extends LightningElement {
  api_key = "GET KEY";
  static renderMode = "light"; // the default is 'shadow'
  //

  state = {
    searchTerm: "",
    results: [],
    favorites: [],
  };

  setSearchTerm(event) {
    this.state = {
      ...this.state,
      searchTerm: event.currentTarget.value,
    };
  }

  async searchMovie(event) {
    const searchTerm = this.state.searchTerm;
    if (!searchTerm) return;
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&query=${searchTerm}`
    );
    const results = await response.json();
    const modifiedResults = results.results.map((movie) => {
      return {
        ...movie,
        poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      };
    });
    this.state = {
      ...this.state,
      results: modifiedResults,
    };
  }
}
