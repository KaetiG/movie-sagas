import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
    render(){
        return(
            <>
            <input placeholder='Example: Horror'></input>
            <button>Add Genre</button>
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Edit);