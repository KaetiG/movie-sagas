import React, { Component } from 'react';
import { connect } from 'react-redux';

class SingleMovie extends Component {
    handlePosterClick = () => {
        console.log('poster clicked', this.props.history);
        this.props.dispatch({ type: 'GET_DETAILS', payload: this.props.movie })
        this.props.history.push('/details');
    }

    render(){
        return(
            <>
            <img 
            src={this.props.movie.poster}
            alt={this.props.movie.title} 
            onClick={this.handlePosterClick}
            value={this.props.movie.id}/><br />
            <h3>{this.props.movie.title}</h3>
            <p>{this.props.movie.description}</p>
            </>
        )
    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(SingleMovie);