import { LightningElement } from "lwc";

export default class HelloWorldApp extends LightningElement {
  api_key = "API KEY HERE";
  static renderMode = "light"; // the default is 'shadow'

  state = localStorage.getItem("state")
    ? JSON.parse(localStorage.getItem("state"))
    : { searchTerm: "", results: [], favorites: [] };

  setState(newState) {
    console.log(JSON.parse(localStorage.getItem("state")));
    this.state = { ...this.state, ...newState };
    localStorage.setItem("state", JSON.stringify(this.state));
  }

  setSearchTerm(event) {
    this.setState({ searchTerm: event.currentTarget.value });
  }

  async searchMovie(event) {
    const searchTerm = this.state.searchTerm;
    if (!searchTerm) return;
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&query=${searchTerm}`
    );
    const results = await response.json();
    const modifiedResults = results.results.map((movie) => {
      const [year, month, day] = movie.release_date.split("-");
      return {
        ...movie,
        releaseDate: new Date(year, month - 1, day).toLocaleDateString("en-US"),
        poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      };
    });
    this.setState({
      results: modifiedResults,
    });
  }
}
