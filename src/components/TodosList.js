import React from 'react';
import TodoItem from './TodosItem';
import '../styles/todosList.css';
import { connect } from "react-redux";

function TodosList({todos, selectedIds, handleChange}) {
    return(
        <ul className="todosList">
          { todos.map((todo) => <TodoItem key={todo.id} todo={todo} selectedIds={selectedIds} handleChange={handleChange} />) }
        </ul>
    )
}

const mapStateToProps = state => {
    console.log(state);
    const todos = state.todos.length > 0 ? state.todos : []
    return { todos };
}

export default connect(mapStateToProps)(TodosList);