export default function userReducer(
    state = {
        currentUser: {username: "test", password: "test"}
    }, 
    action
){

switch(action.type){
    case 'ADD_USER':
        console.log(action.payload.username)
        return {
            ...state, 
            currentUser: {username: action.payload.username, password: action.payload.password}
        }
    default: 
        return state;
}
}