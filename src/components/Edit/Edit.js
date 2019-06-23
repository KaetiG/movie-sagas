import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
    state = {
        newEdit: {
        description: '',
        title: ''
        }
    }
    handleDescriptionChange = (description) => (event) => {
        console.log('event happened')
        this.setState({
            newEdit: {
            description: event.target.value,
            ...this.state.newEdit
            }
        }
        );
    }

    handleTitleChange = (title) => (event) => {
        console.log('event happened')
        this.setState({
            newEdit: {
            ...this.state.newEdit,
            title: event.target.value,
            }
        }
        );
    }
    render() {
        return (
            <>
                
                <textarea type="text"
                    rows="8"
                    cols="55"
                    onChange={this.handleDescriptionChange}
                    value={this.state.newEdit.description}
                    placeholder='New Description Here'
                    key={'description'}>
                </textarea>
                <br />
                <input placeholder='New Title Here'
            type='text' value={this.state.newEdit.title} 
            onChange={this.handleTitleChange('description')}>
            </input>
                <button onClick={this.editMovie}>Submit</button>
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Edit);