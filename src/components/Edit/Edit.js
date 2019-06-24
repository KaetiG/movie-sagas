import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
    state = {
      
        description: '',
        title: ''
        
    }//sets local state for two properties as empty strings

    //ONLY THE TITLE ONCHANGE IS WORKING AND I CANT FIGURE OUT WHY
    handleDescriptionChange = (event) => {
        console.log('event happened')
        this.setState({
            ...this.state,
            description: event.target.value,          
        }
        );
    }

    handleTitleChange = (event) => {
        console.log('event happened')
        this.setState({
            ...this.state,
            title: event.target.value,
        }
        );
    }

    editMovie = () => {
        this.props.dispatch({ type: 'UPDATE_MOVIE', payload: this.state })
        this.props.history.push('/details');
    }

    handleCancel = () => {
        this.props.history.push('/');
    }
    render() {
        return (
            <>
                
                <textarea type="text"
                    rows="8"
                    cols="55"
                    onChange={this.handleDescriptionChange}
                    value={this.state.description}
                    placeholder='New Description Here'
                    key={'description'}>
                </textarea>
                <br />
                <input placeholder='New Title Here'
            type='text' value={this.state.title} 
            onChange={this.handleTitleChange}>
            </input>
                <button onClick={this.editMovie}>Submit</button>
                <button onClick={this.handleCancel}>Cancel</button>
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Edit);