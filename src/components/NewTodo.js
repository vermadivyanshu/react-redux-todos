import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions/todoActions'

class NewTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.text);
        // this.props.createTodo(this.state.text);
        this.setState({text: ''});
    }
    updateText = event => this.setState({text: event.target.value })
    render() {
        return(
            <form onSubmit={ this.handleFormSubmit }>
                <input value={this.state.text} onChange={ this.updateText } placeholder="What do you need to do?"></input>
            </form>
        )
    }
}

export default connect(
    null,
    { addTodo }
)(NewTodo)