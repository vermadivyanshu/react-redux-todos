import React from 'react';
import TodosList from './TodosList'
import NewTodo from './NewTodo'
import TodoActions from './TodoActions'
import { connect } from 'react-redux'
import {updateTodosStatus} from '../redux/actions/todoActions'

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
        if(this.state.selectedIds.indexOf(selectedId) == -1) {
            newSelectedIds = [...this.state.selectedIds, selectedId];
        }
        else {
            newSelectedIds = this.state.selectedIds.filter((id) => id !== selectedId )
        }
        this.setState((prevState) => { return {...prevState, selectedIds: newSelectedIds} })
    }
    
    markComplete = (event) => {
        event.preventDefault()
        this.props.updateTodosStatus(this.state.selectedIds, 1)
        this.setState({selectedIds: []})
        // this.updateStatus(1)
    }
    markNotComplete = (event) => {
        event.preventDefault()
        this.props.updateTodosStatus(this.state.selectedIds, 0)
        this.setState({selectedIds: []})
        // this.updateStatus(0)
    }
    
    render() {
        return(
            <div className="todos">
                <NewTodo createTodo={this.createTodo} />
                <TodosList todos={this.state.todos} selectedIds={this.state.selectedIds} handleChange={this.addOrRemoveSelectedIds} />
                <TodoActions markComplete={this.markComplete} markNotComplete={this.markNotComplete} getIncompleteCount={this.getIncompleteCount} />
            </div>
        )
    }
}

export default connect(
    null,
    {updateTodosStatus}
)(Todos)