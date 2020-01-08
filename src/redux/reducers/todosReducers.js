import { ADD_TODO, UPDATE_STATUS, REMOVE_TODOS } from '../actions/todoActions'
import { combineReducers } from 'redux'

function todos(state = [], action) {
    switch(action.type) {
        case ADD_TODO:
            return [...state, {text: action.text, id: state.length+1, status: 0}]

        case UPDATE_STATUS:
            return state.map((todo) => {
                    if(action.ids.indexOf(todo.id) !== -1) {
                        return { ...todo, status: todo.status === 0 ? 1 : 0 };
                    }
                    return todo;
                })
        case REMOVE_TODOS:
            return state.filter((todo) => {
              return action.ids.indexOf(todo.id) === -1
            })
            
        default:
            return state
    }
}

const todoApp = combineReducers({
    todos
})

export default todoApp;