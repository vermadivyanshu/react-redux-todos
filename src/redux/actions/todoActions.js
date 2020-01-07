export const ADD_TODO = 'ADD_TODO'
export const UPDATE_STATUS = 'UPDATE_STATUS'


export function addTodo(text) {
    return { type: ADD_TODO, text }
}

export function updateTodosStatus(ids, status) {
    return { type: UPDATE_STATUS, ids, status }
}