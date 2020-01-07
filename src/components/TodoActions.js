import React from 'react';
import { connect } from 'react-redux';

function TodoActions(props) {
    return(
        <div className="todoActions">
          <span>{props.incompleteTodosCount} incomplete items</span>
          <span><button onClick={props.markComplete}>Mark complete</button></span>
          <span><button onClick={props.markNotComplete}>Mark not complete</button></span>
        </div>
    )
}

const mapStateToProps = state => {
    let incompleteTodosCount = state.todos.reduce((incompleteCount, todo) => {
        if(todo.status == 0) {
            incompleteCount++;
        }
        return incompleteCount;
    }, 0)
    return { incompleteTodosCount }
}

export default connect(mapStateToProps)(TodoActions);


