import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    render() {
        return (
            <><div>
                <img
                    src={this.props.reduxState.movies.poster}
                    alt={this.props.reduxState.movies.title}
                    value={this.props.reduxState.movies.id} /><br />
                <h3>{this.props.reduxState.movies.title}</h3>
                <p>{this.props.reduxState.movies.description}</p>
                <p>{this.props.reduxState.genres.name}</p>
                {/* <ul>{this.props.reduxState.genres.map(genre => <li genre={genre} key={genre.id} ></li>)}</ul> */}
            </div></>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Details);