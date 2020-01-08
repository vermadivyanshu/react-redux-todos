export const ADD_TODO = 'ADD_TODO'
export const UPDATE_STATUS = 'UPDATE_STATUS'
export const REMOVE_TODOS = 'REMOVE_TODOS'


export function addTodo(text) {
    return { type: ADD_TODO, text }
}

export function updateTodosStatus(ids) {
    return { type: UPDATE_STATUS, ids }
}

export function removeTodos(ids) {
    return { type: REMOVE_TODOS, ids }
}