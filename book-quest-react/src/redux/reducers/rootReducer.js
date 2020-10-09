import { combineReducers } from "redux";

const rootReducer = combineReducers({
    userReducer, booksReducer
})

export default rootReducer

function userReducer(
    state = {
        currentUser: {}
    }, 
    action
){

switch(action.type){
    case 'ADD_USER':
        const {id, first_name, last_name, username, is_student } = action.payload

        return {
            ...state, 
            currentUser: {id, first_name, last_name, username, is_student}
        }
    default: 
        return state;
    }
}

function booksReducer(state = {books: []}, action){
    switch(action.type){
        case 'ADD_BOOK':
            return{
                ...state,
                books: [...state.books, action.payload]
            }
        default: 
            return state;
    }
}