import React from 'react';
import TodosList from './TodosList'
import NewTodo from './NewTodo'
import TodoActions from './TodoActions'
import { connect } from 'react-redux'
import {updateTodosStatus, removeTodos} from '../redux/actions/todoActions'
import '../styles/todos.css'

class Todos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIds: [],
        }
    }
    createTodo = (text) => {
        var newTodo = { text, id: this.state.length+1, status: 0 }
        this.setState((prevState) => {
            return({length: prevState.length+1,
            todos: [...prevState.todos, newTodo], selectedIds: prevState.selectedIds})
        })
    }
    addOrRemoveSelectedIds = (selectedId) => {
        var newSelectedIds = []
        if(this.state.selectedIds.indexOf(selectedId) === -1) {
            newSelectedIds = [...this.state.selectedIds, selectedId];
        }
        else {
            newSelectedIds = this.state.selectedIds.filter((id) => id !== selectedId )
        }
        this.setState((prevState) => { return {...prevState, selectedIds: newSelectedIds} })
    }
    
    toggleTodoStatus = (event) => {
        event.preventDefault()
        this.props.updateTodosStatus(this.state.selectedIds)
        this.setState({selectedIds: []})
        // this.updateStatus(1)
    }
    removeTodos = (event) => {
        event.preventDefault();
        this.props.removeTodos(this.state.selectedIds)
        this.setState({selectedIds: []})
    }
    
    render() {
        return(
            <div className="todos">
                <NewTodo createTodo={this.createTodo} />
                <TodosList selectedIds={this.state.selectedIds} handleChange={this.addOrRemoveSelectedIds} />
                <TodoActions toggleTodoStatus={this.toggleTodoStatus} removeTodos={this.removeTodos} getIncompleteCount={this.getIncompleteCount} />
            </div>
        )
    }
}

export default connect(
    null,
    {updateTodosStatus, removeTodos}
)(Todos)