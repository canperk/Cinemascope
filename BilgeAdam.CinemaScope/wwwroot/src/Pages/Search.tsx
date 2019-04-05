import * as React from "react";
import AjaxHelper from "../Helpers/AjaxHelper";
import "../Style/search.css"
import { Route } from "react-router";
import { Link } from "react-router-dom";

class Movie {
    title: string;
    overview: string;
    image: string;
    releaseDate: string;
    starCount: number;
    setImage(imagePath: string): void {
        if (imagePath == null) {
            this.image = "/images/noimage.png"
        }
        else {
            this.image = "https://image.tmdb.org/t/p/w370_and_h556_bestv2" + imagePath;
        }
    };
}

class MovieInfoResponse {
    vote_count: number;
    id: number;
    video: boolean;
    vote_average: number;
    title: string;
    popularity: number;
    poster_path: string;
    original_language: string;
    original_title: string;
    genre_ids: Array<number>;
    backdrop_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
}
class MovieResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: Array<MovieInfoResponse>;
}

interface ISearchState {
    value: string;
    className: string;
    movies: Array<Movie>
}


export default class Search extends React.Component<any, ISearchState> {
    constructor(props: object) {
        super(props);
        this.state = { value: "", className: "open", movies: new Array<Movie>() };
        this.onSearchChanged = this.onSearchChanged.bind(this);
        this.closeSearch = this.closeSearch.bind(this);
        this.renewSearch = this.renewSearch.bind(this);
        this.onKeyPressed = this.onKeyPressed.bind(this);
    }
    render() {
        return (
            <div>
                <div id="search" className={this.state.className}>
                    <button type="button" className="closeSearch" onClick={this.closeSearch}>x</button>
                    <input type="search" value={this.state.value} onChange={this.onSearchChanged} onKeyPress={this.onKeyPressed} placeholder="Search Movie" />
                </div>
                <Link to="/" className="btn btn-default" style={{ marginBottom: '20px' }}>
                    <span className="fa fa-home"></span> Ana Sayfa
                </Link>
                <button className="btn btn-default" onClick={this.renewSearch} style={{ marginBottom: '20px' }}>
                    <span className="fa fa-search"></span> Yeni Arama
                </button>

                <section id="searchResults" className="col-xs-12 col-sm-6 col-md-12">
                    {
                        this.state.movies.map((mv, index) => {
                            return (
                                <article key={index} className="search-result row">
                                    <div className="col-xs-12 col-sm-12 col-md-3">
                                        <a href="#" title="Lorem ipsum" className="thumbnail"><img src={mv.image} alt={mv.title} /></a>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-2">
                                        <ul className="meta-search">
                                            <li><i className="fas fa-calendar"></i> <span>{mv.releaseDate}</span></li>
                                            <li><i className="fas fa-star"></i> <span>{mv.starCount}</span></li>
                                        </ul>
                                        <span className="plus"><a href="#" title="Lorem ipsum"><i className="fas fa-heart"></i> Add To Wish List</a></span>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-7 excerpet">
                                        <h3><a href="#" title="">{mv.title}</a></h3>
                                        <p>{mv.overview}</p>
                                    </div>
                                    <span className="clearfix borda"></span>
                                </article>
                            );
                        })
                    }
                </section>
            </div>
        )
    }

    onSearchChanged(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ value: e.target.value });
    }
    closeSearch() {
        this.resetState();
    }

    renewSearch() {
        this.setState({ className: "open" });
    }
    onKeyPressed(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.charCode === 13) {
            this.setState({ movies: new Array<Movie>() });
            var ajax = new AjaxHelper();
            ajax.Get<MovieResponse>("https://api.themoviedb.org/3/search/movie?api_key=b5ebaf26a198b112f425041f3de012d5&query=" + this.state.value, (data) => {
                data.results.forEach(m => {
                    var newMovie = new Movie();
                    newMovie.title = m.title;
                    newMovie.overview = m.overview;
                    newMovie.setImage(m.poster_path);
                    newMovie.releaseDate = m.release_date;
                    newMovie.starCount = m.vote_average;
                    this.state.movies.push(newMovie);
                });
                this.resetState();
            });
        }
    }
    resetState() {
        this.setState({ className: "", value: "" });
    }
}