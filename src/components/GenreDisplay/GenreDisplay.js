import React, { Component } from 'react';
import { connect } from 'react-redux';

class GenreDisplay extends Component {
    render() {
        return(
            <li>{this.props.genre.name}</li>
            // displays each genre as list item on dom
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(GenreDisplay);