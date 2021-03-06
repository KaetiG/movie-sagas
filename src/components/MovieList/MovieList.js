import React, { Component } from 'react';
import { connect } from 'react-redux';
//import axios from 'axios';
import SingleMovie from '../SingleMovie/SingleMovie';

class MovieList extends Component {
    componentDidMount() {
        this.props.dispatch({ type: "GET_MOVIES" });
        //this.props.dispatch({ type: "GET_GENRES" });
    }
    render() {
        return (
            <div>
                {/* maps through array of objects and renders new component for each object to display on DOM */}
            {this.props.reduxState.movies.map(movie => <SingleMovie movie={movie} history={this.props.history} key={movie.id} />)}
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieList);