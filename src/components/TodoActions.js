import React from 'react';
import { connect } from 'react-redux';
import '../styles/todoActions.css'

function TodoActions(props) {
    return(
        <div className="todoActions">
          <span>{props.incompleteTodosCount} incomplete items</span>
          <span><button onClick={props.toggleTodoStatus}>Toggle Todo status</button></span>
          <span><button onClick={props.removeTodos}>Remove todos</button></span>
        </div>
    )
}

const mapStateToProps = state => {
    let incompleteTodosCount = state.todos.reduce((incompleteCount, todo) => {
        if(todo.status === 0) {
            incompleteCount++;
        }
        return incompleteCount;
    }, 0)
    return { incompleteTodosCount }
}

export default connect(mapStateToProps)(TodoActions);


