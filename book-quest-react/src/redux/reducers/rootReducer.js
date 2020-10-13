import { combineReducers } from "redux";

const rootReducer = combineReducers({
    userReducer, booksReducer, currentBookReducer, tweetDataReducer
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
        const {id, first_name, last_name, username, is_student, total_points, streak } = action.payload

        return {
            ...state, 
            currentUser: {id, first_name, last_name, username, is_student, total_points, streak}
        }
    case 'HANDLE_STREAK':
        const user_streak = action.payload.streak

        return {
            ...state, 
            currentUser: {...state.currentUser, streak: user_streak}
        }
    default: 
        return state;
    }
}

function booksReducer(state = {books: []}, action){
    switch(action.type){
        case 'LOAD_BOOKS':
            return {
                ...state, 
                books: action.payload
            }
        case 'ADD_BOOK':
            return{
                ...state,
                books: [...state.books, action.payload]
            }
        case 'FILTER_BOOK_SHELF':
            let bookshelf = state.books.filter(book => book.id !== action.payload)
            return{
                ...state,
                books: bookshelf
            }
        default: 
            return state;
    }
}

function currentBookReducer(state = {currentBook: {}}, action){
    switch(action.type){
        case 'SET_CURRENTLY_READING':
            return {
                ...state,
                currentBook: action.payload}
        case 'FINISHED_READING':
            return {
                ...state,
                currentBook: {}}
        case 'SET_CHARACTER':
            return {
                ...state,
                currentBook: action.payload
            }
        case 'ADD_TWEET':
            return {
                ...state,
                currentBook: action.payload
            }
        case 'LOAD_CURRENT_BOOK':
            return {
                ...state,
                currentBook: action.payload
            }
        case 'FILTER_TWEETS':
            return{
                ...state,
                currentBook: {
                    ...state.currentBook, 
                    reading_tweets: state.currentBook.reading_tweets.filter(tweet => tweet.id !== action.payload)
                }
            }
        default: 
            return state;
    }
}

function tweetDataReducer(state = {tweetData: []}, action){
    switch(action.type){
        case 'LOAD_TWEET_DATA':

            let tweetData2 = action.payload.map(tweet_hash => {
                let d = tweet_hash.date.replace(/\-/g, '/')
                d = new Date(d)
                tweet_hash.date = d.toDateString()
                return tweet_hash
            })
            return {
                ...state,
                tweetData: tweetData2}
        default: 
            return state;
    }
}