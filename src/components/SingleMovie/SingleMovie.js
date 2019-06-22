import React, { Component } from 'react';

class SingleMovie extends Component {
    render(){
        return(
            <>
            <img 
            src={this.props.movie.poster}
            alt={this.props.movie.title}/><br />
            <h3>{this.props.movie.title}</h3>
            <p>{this.props.movie.description}</p>
            </>
        )
    }
}

export default SingleMovie;