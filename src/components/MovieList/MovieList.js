import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class MovieList extends Component {
    render(){
        return(
            <>
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieList);