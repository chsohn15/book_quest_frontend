

export default function userReducer(
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