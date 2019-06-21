import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class MovieList extends Component {
    componentDidMount() {
        this.props.dispatch({ type: "GET_MOVIES" });
    }
    render() {
        return (
            <>
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieList);