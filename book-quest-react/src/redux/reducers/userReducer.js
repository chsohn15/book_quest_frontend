import { combineReducers } from "redux";

const rootReducer = combineReducers({
    currentUser: userReducer, 
    currentBook: booksReducer
})

export default rootReducer

function userReducer(
    state = {
        currentUser: {},
        currentBook: {}
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
    case 'ADD_BOOK':
        return{
            ...state,
            currentBook: {...action.payload}
        }
    default: 
        return state;
    }
}