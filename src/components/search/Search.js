import React from 'react';
import './ser.css'


class Search extends React.Component {
    state = {
        searchInput: '',
        type: 'all',
        page: 1
    };

    clickBtn = () => {
        this.props.searchMovies(this.state.searchInput, this.state.type, this.state.page)
    };


    keyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.searchInput, this.state.type, this.state.page)
        }
    };

    changeType = (e) => {
        this.setState(() => ({type: e.target.dataset.type}), () => {
            this.props.searchMovies(this.state.searchInput, this.state.type, this.state.page)
        })

    };

    render() {
        let arr = [];
        for (let i = 1; i <= this.props.pages; i++) {
            arr = arr.concat(i)
        }

        return (
            <div className="row">
                <div className="input-field">
                    <input value={this.state.searchInput}
                           placeholder='Search'
                           type="search"
                           className="validate"
                           onChange={(e) => this.setState({searchInput: e.target.value})}
                           onKeyDown={this.keyDown}
                    />
                    <button type='button' className='btn  search__btn' onClick={this.clickBtn}>Search</button>
                </div>
                <div className='radio__btns'>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type='all'
                            onChange={this.changeType}
                            checked={this.state.type === 'all'}/>
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type" type="radio"
                            data-type='movie'
                            onChange={this.changeType}
                            checked={this.state.type === 'movie'}/>
                        <span>Movies</span>
                    </label>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type='series'
                               onChange={this.changeType}
                               checked={this.state.type === 'series'}/>
                        <span>Series</span>
                    </label>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type='game' onChange={this.changeType}
                               checked={this.state.type === 'game'}/>
                        <span>Games</span>
                    </label>
                </div>
                <ul className='search__pages'>
                    {arr.map((el) => {
                        if (el < this.state.page + 3 || el > this.props.pages - 3) {
                            return <li key={el}>
                                <a href="#" onClick={(e) => {
                                    e.preventDefault();
                                    this.setState(() => ({page: el}),
                                        () => {
                                            this.props.searchMovies(this.state.searchInput, this.state.type, this.state.page)
                                        })
                                }}>{el}</a>
                            </li>
                        }


                    })}
                </ul>

            </div>
        );
    }
}

export default Search;