import React, { Component } from 'react';
import { connect } from 'react-redux';
import GenreDisplay from '../GenreDisplay/GenreDisplay';

class Details extends Component {
    handleEditClick = () => {
        this.props.history.push('/edit');//brings you to edit page
    }

    goBack = () => {
        this.props.history.push('/');//brings you back to home page
    }
    render() {
        return (
            <><div>
                <img
                    src={this.props.reduxState.movies.poster}
                    alt={this.props.reduxState.movies.title}
                    value={this.props.reduxState.movies.id} /><br />
                <h3>{this.props.reduxState.movies.title}</h3>
                <button onClick={this.goBack}>Back</button>
                <button onClick={this.handleEditClick}>Edit</button>
                <p>{this.props.reduxState.movies.description}</p>
                <p>{this.props.reduxState.genres.name}</p>
                {/* below takes every object in array of objects and renders a new Component to display the items on DOM */}
                <ul>{this.props.reduxState.genres.map(genre => <GenreDisplay genre={genre} history={this.props.history} key={genre.genre_id} />)}</ul>
            </div></>
        )
    }
}
//NEW COMPONENT MAYBE MAP THOSE NEW PROPS
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Details);