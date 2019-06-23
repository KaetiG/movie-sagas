import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
    state = {
        description: '',
    }
    handleDescriptionChange = (event) => {
        console.log('event happened')
        this.setState({
            description: event.target.value,
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
                    value={this.state.description}
                    key={'description'}>
                </textarea>
                <br />
                {/* <input placeholder='New Description Here'
            type='text' value={this.state.newDesu.description} 
            onChange={this.handleDescriptionChange('description')}>
            </input> */}
                <button onClick={this.editMovie}>Submit</button>
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Edit);