import React from 'react';
import Search from "../search";
import Movies from "../Movies";
import axios from "axios";
import './main.css'


class Main extends React.Component {
    state = {
        movies: [],
        loading: false,
        pages: 0

    };


    searchMovies = (str, type, page) => {
        this.setState({loading: true});
        axios(`https://www.omdbapi.com/?apikey=81d3ee7d&s=${str}${type !== 'all' ? `&type=${type}` : ''}${page !== 0 ? `&page=${page}` : ''}`)
            .then(({data}) => this.setState({
                movies: data.Search,
                loading: false,
                pages: Math.ceil(data.totalResults / 10)
            }))
    };

    render() {
        return (
            <main className='container content'>
                <Search func={this.setState} movies={this.state.movies} pages={this.state.pages}
                        searchMovies={this.searchMovies}/>
                {this.state.loading
                    ? <div className="progress #2196f3 blue">
                        <div className="indeterminate #1e88e5 blue darken-1"></div>
                    </div>
                    : ''
                }
                <Movies movies={this.state.movies}/>
            </main>
        )
    }
}

export default Main