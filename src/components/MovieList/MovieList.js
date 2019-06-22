import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import SingleMovie from '../SingleMovie/SingleMovie';

class MovieList extends Component {
    componentDidMount() {
        this.props.dispatch({ type: "GET_MOVIES" });
    }
    render() {
        return (
            <div>
            {this.props.reduxState.movies.map(movie => <SingleMovie movie={movie} key={movie.id} />)}
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieList);