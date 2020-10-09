

export default function userReducer(
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