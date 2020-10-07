export default function userReducer(
    state = {
        currentUser: {}
    }, 
    action
){
    
switch(action.type){
    case 'ADD_USER':
        return {
            ...state, 
            currentUser: {username: "test", first_name: "test"}
        }
    default: 
        return state;
}
}