import { LightningElement } from "lwc";

export default class HelloWorldApp extends LightningElement {
  static renderMode = "light"; // the default is 'shadow'

  state = localStorage.getItem("state")
    ? JSON.parse(localStorage.getItem("state"))
    : { searchTerm: "", results: [], favorites: [] };

  setState(newState) {
    this.state = { ...this.state, ...newState };
    localStorage.setItem("state", JSON.stringify(this.state));
  }

  setSearchTerm(event) {
    this.setState({ searchTerm: event.currentTarget.value });
  }

  async searchMovie(event) {
    const searchTerm = this.state.searchTerm;
    if (!searchTerm) return;
    const response = await fetch(`/api/index.js?query=${searchTerm}`);
    const results = await response.json();
    const modifiedResults = results.data.results.map((movie) => {
      const [year, month, day] = movie.release_date.split("-");
      return {
        ...movie,
        releaseDate: movie.release_date
          ? new Date(year, month - 1, day).toLocaleDateString("en-US")
          : "N/A",
        hasPoster: movie.poster_path ? true : false,
        poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        hasRatings: movie.vote_average ? true : false,
      };
    });
    this.setState({
      results: modifiedResults,
    });
  }
}
