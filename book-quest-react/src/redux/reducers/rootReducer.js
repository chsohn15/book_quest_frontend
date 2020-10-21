import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';

const appReducer = combineReducers({
    userReducer, booksReducer, currentBookReducer, tweetDataReducer, allTweetsReducer, vocabDataReducer, errorsReducer
})

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
      storage.removeItem('persist:root')
      state = undefined
    }
  
    return appReducer(state, action)
  }

export default rootReducer

function userReducer(
    state = {
        currentUser: {}
    }, 
    action
){

switch(action.type){
    case 'ADD_USER':
        const {id, first_name, last_name, username, is_student, total_points, streak, all_vocab, rewards_hash, money_spent, balance, image_url, vocab_streak, all_tweets } = action.payload

        return {
            ...state, 
            currentUser: {id, first_name, last_name, username, is_student, total_points, streak, all_vocab, rewards_hash, money_spent, balance, image_url, vocab_streak, all_tweets}
        }
    case 'HANDLE_STREAK':
        return {
            ...state, 
            currentUser: {...state.currentUser, streak: state.currentUser.streak + 1}
        }
    case 'ADD_VOCAB_WORD':
        return {
            ...state, 
            currentUser: {...state.currentUser, all_vocab: action.payload}
        }
    case 'ADD_REWARD':
        let rewards_description = action.payload
        return {
            ...state, 
            currentUser: {...state.currentUser, rewards_hash: {...state.currentUser.rewards_hash, [rewards_description]: true}}
        }
    case 'FILTER_VOCAB':
        return {
            ...state, 
            currentUser: {
                ...state.currentUser, 
                all_vocab: state.currentUser.all_vocab.filter(vocab => vocab.vocab.id !== action.payload)}
        }
    case 'ADD_PROFILE_PHOTO':
        return {
            ...state, 
            currentUser: {
                ...state.currentUser, 
                image_url: action.payload}
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
        case 'ADD_CHARACTER':

            return{
                ...state,
                currentBook: {
                    ...state.currentBook, 
                    book: {
                        ...state.currentBook.book,
                        characters: [...state.currentBook.book.characters, action.payload]}
                }
            }
        case 'UPDATE_CURRENT_PAGE':
            return{
                ...state,
                currentBook: {
                    ...state.currentBook, 
                    current_page: action.payload
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

function vocabDataReducer(state = {vocabData: []}, action){
    switch(action.type){
        case 'LOAD_VOCAB_DATA':

            let vocabData2 = action.payload.map(vocab_hash => {
                let d = vocab_hash.date.replace(/\-/g, '/')
                d = new Date(d)
                vocab_hash.date = d.toDateString()
                return vocab_hash
            })
            return {
                ...state,
                vocabData: vocabData2}
        default: 
            return state;
    }
}

function allTweetsReducer(state = {allTweets: []}, action){
    switch(action.type){
        case 'LOAD_ALL_TWEETS':
            return {
                ...state,
                allTweets: action.payload}
        default: 
            return state;
    }
}

function errorsReducer(state = {errors: {}}, action){
    switch(action.type){
        case 'ADD_REWARD_ERROR_MSG':
            return {
                ...state,
                errors: {...state.errors, rewardsError: action.payload}}
        default: 
            return state;
    }
}