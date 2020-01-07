import { ADD_TODO, UPDATE_STATUS } from '../actions/todoActions'
import { combineReducers } from 'redux'

const initialState = {
    todos: []
}

function todos(state = [], action) {
    switch(action.type) {
        case ADD_TODO:
            return [...state, {text: action.text, id: state.length+1, status: 0}]

        case UPDATE_STATUS:
            return state.map((todo) => {
                    if(action.ids.indexOf(todo.id) != -1) {
                        return { ...todo, status: action.status};
                    }
                    return todo;
                })
            
        default:
            return state
    }
}

const todoApp = combineReducers({
    todos
})

export default todoApp;