import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions/todoActions'
import '../styles/newTodo.css'

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
        this.setState({text: ''});
    }
    updateText = event => this.setState({text: event.target.value })
    render() {
        return(
            <form  class="newTodoForm" onSubmit={ this.handleFormSubmit }>
                <input  class="newTodoText" value={this.state.text} onChange={ this.updateText } placeholder="What do you need to do?"></input>
            </form>
        )
    }
}

export default connect(
    null,
    { addTodo }
)(NewTodo)