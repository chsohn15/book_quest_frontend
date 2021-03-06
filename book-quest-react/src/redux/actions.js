import Swal from 'sweetalert2'

const BOOKS_URL = "http://localhost:3000/api/v1/books"
const USER_URL = "http://localhost:3000/api/v1/users/"
const CURRENT_BOOK_URL ="http://localhost:3000/api/v1/current_book"
const STUDENT_BOOK_URL = "http://localhost:3000/api/v1/student_books/"
const SET_CHAR_URL = "http://localhost:3000/api/v1/set_character"
const READING_TWEET_URL ="http://localhost:3000/api/v1/add_tweet"
const LOAD_CURRENT_BOOK_URL = "http://localhost:3000/api/v1/load_current_book"
const REMOVE_BOOK_URL = "http://localhost:3000/api/v1/remove_from_shelf"
const REMOVE_CHARACTER_URL = "http://localhost:3000/api/v1/change_character"
const HANDLE_STREAK_URL = "http://localhost:3000/api/v1/handle_streak"
const TWEET_DATA_URL = "http://localhost:3000/api/v1/get_tweet_data"
const VOCAB_URL = "http://localhost:3000/api/v1/vocab_activities"
const RESTFUL_TWEET_URL = "http://localhost:3000/api/v1/reading_tweets/"
const VOCAB_DATA_URL = "http://localhost:3000/api/v1/get_vocab_data"
const GET_ALL_TWEETS = "http://localhost:3000/api/v1/get_all_tweets"
const ADD_CHAR_URL = "http://localhost:3000/api/v1/characters"
const CREATE_REWARD_URL = "http://localhost:3000/api/v1/rewards/"
const DELETE_VOCAB_URL = "http://localhost:3000/api/v1/vocab_activities/"
const UPDATE_PAGE_URL = "http://localhost:3000/api/v1/update_page/"

function updatedPage(page){
    return {type: 'UPDATE_CURRENT_PAGE', payload: page}
}

function updatingPage(student_book_id, new_page){
    return (dispatch) => {
        fetch(UPDATE_PAGE_URL, {method: "POST", 
        headers: {
            "Content-Type":"application/json",
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
            id: student_book_id,
            current_page: new_page
        })})
        .then(res => res.json()) 
        .then(page => {
            dispatch(updatedPage(page))
        
})}}


function addedProfilePhoto(image_url){
    return {type: 'ADD_PROFILE_PHOTO', payload: image_url}
}

function addingProfilePhoto(e){
    e.preventDefault()
    let image_url = e.target[0].value

    return (dispatch) => {
        fetch(USER_URL + localStorage.user_id, {method: "PATCH", 
        headers: {
            "Content-Type":"application/json",
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
            id: localStorage.user_id,
            image_url
        })})
        .then(res => res.json()) 
        .then(user => {
                dispatch(addedProfilePhoto(user.image_url))
        
})}}

function addedCharacterToBook(character){
    return {type: 'ADD_CHARACTER', payload: character}
}

function addingCharacterToBook(e, book_id){
    e.preventDefault()
    let name = e.target[0].value
    let image_url = e.target[1].value
    e.persist()

    return (dispatch) => {
        fetch(ADD_CHAR_URL, {method: "POST", 
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
               book_id,
               name, 
               image_url
        })
        })
        .then(res => res.json())
        .then(character => {
            e.target.reset()
            dispatch(addedCharacterToBook(character))})
}}

function deletedVocab(vocab_id){
    return {type: 'FILTER_VOCAB', payload: vocab_id}
}

function deletingVocab(vocab_id){
    return (dispatch) => {
        fetch(DELETE_VOCAB_URL  + vocab_id, {method: "DELETE", 
        headers: {
            Authorization: `Bearer ${localStorage.token}`
        }})
        .then(res => res.json()) 
        .then(res => dispatch(deletedVocab(vocab_id)))
    }
}

function createdReward(reward){

    return {type: "ADD_REWARD", payload: reward.description}
}

function addRewardErrorMessage(error){
    Swal.fire({
        imageUrl:"https://www.valindakimmel.com/wp-content/uploads/2016/03/not-yet-1426593_1280-1.jpg",
        text: error
      })
    return {type: "ADD_REWARD_ERROR_MSG", payload: error}
}

function creatingReward(price, level, student_id, description){

    return (dispatch) => {
        fetch(CREATE_REWARD_URL, {method: "POST", 
        headers: {
            "Content-Type":"application/json",
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
            price, level, student_id, description
        })})
        .then(res => res.json()) 
        .then(reward => {
            if (reward.errors){
                dispatch(addRewardErrorMessage(reward.errors))
            }
            else {
                loadingUser()
                dispatch(createdReward(reward))
            }
        })}}

function loadedVocabData(vocabData){
    return {type: "LOAD_VOCAB_DATA", payload: vocabData}
}

function loadingVocabData(){
    return (dispatch) => {
        fetch(VOCAB_DATA_URL, {method: "POST", 
        headers: {
            "Content-Type":"application/json",
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
            id: localStorage.user_id
        })})
        .then(res => res.json()) 
        .then(vocabData => dispatch(loadedVocabData(vocabData)))
    }
}

function loadedAllTweets(allTweets){
    return {type: "LOAD_ALL_TWEETS", payload: allTweets} 
}

function loadingAllTweets(){
    return (dispatch) => {
        fetch(GET_ALL_TWEETS, {method: "POST", 
        headers: {
            "Content-Type":"application/json",
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
            id: localStorage.user_id
        })})
        .then(res => res.json()) 
        .then(allTweets => dispatch(loadedAllTweets(allTweets)))
    }
}

function submittedVocab(words){
    return {type: "ADD_VOCAB_WORD", payload: words}
}
function submittingVocab(e, student_book_id, word, definition, sentence_from_book, original_sentence, point_value){
   
    e.persist()
    return (dispatch) => {
        fetch(VOCAB_URL, {method: "POST", 
        headers: {
            "Content-Type":"application/json",
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
            user_id: localStorage.user_id, student_book_id, word, definition, sentence_from_book, original_sentence, point_value
        })})
        .then(res => res.json()) 
        .then(words => 
            {   e.target.reset()
                dispatch(submittedVocab(words))
            })

       
    }}

function deletedTweet(tweet_id){
    return {type: "FILTER_TWEETS", payload: tweet_id}
}

function deletingTweet(tweet_id){
    return (dispatch) => {
        fetch(RESTFUL_TWEET_URL + tweet_id, {method: "DELETE", 
        headers: {
            Authorization: `Bearer ${localStorage.token}`
        }})
        .then(res => res.json()) 
        .then(res => dispatch(deletedTweet(tweet_id)))
    }
}

function loadedTweetData(tweetData){
    return {type: "LOAD_TWEET_DATA", payload: tweetData}
}

function loadingTweetData(){
    return (dispatch) => {
        fetch(TWEET_DATA_URL, {method: "POST", 
        headers: {
            "Content-Type":"application/json",
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
            id: localStorage.user_id
        })})
        .then(res => res.json()) 
        .then(tweetData => dispatch(loadedTweetData(tweetData)))
    }
}

function handledStreak(streak){
    return {type: "HANDLE_STREAK", payload: streak}
}

// function handlingStreak(){

//     return (dispatch) => {
//         fetch(HANDLE_STREAK_URL, {method: "POST", 
//         headers: {
//             "Content-Type":"application/json",
//             Authorization: `Bearer ${localStorage.token}`
//         },
//         body: JSON.stringify({
//             id: localStorage.user_id
//         })})
//         .then(res => res.json()) 
//         // return user.streak
//         .then(user_streak => dispatch(handledStreak(user_streak)))
//     }
// }

function loadedUser(user){
    return {type: "ADD_USER", payload: user}
}

function loadingUser(){
    
    return (dispatch) => {
        fetch(USER_URL + localStorage.user_id, {method: "GET", 
        headers: {
            Authorization: `Bearer ${localStorage.token}`
        }})
        .then(res => res.json())
        .then(user => dispatch(loadedUser(user)))
    }
}

function removingCharacter(id){

    return (dispatch) => {
        fetch(REMOVE_CHARACTER_URL, {method: "POST", 
        headers: {
            "Content-Type":"application/json",
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
            id
        })})
        .then(res => res.json())
        .then(student_book => dispatch(loadedCurrentBook(student_book)))
    }
}

// Remove book from database
function removingFromShelf(student_id, book_id){
    return (dispatch) => {
        fetch(REMOVE_BOOK_URL, {method: "POST", 
        headers: {
            "Content-Type":"application/json",
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
            student_id, book_id
        })})
        .then(res => res.json())
        .then(()=> dispatch(filterBookShelf(book_id)))
    }

}

// Remove book from bookshelf display when added to currently reading
function filterBookShelf(book_id){
    return {type: "FILTER_BOOK_SHELF", payload: book_id}
}

function loadedCurrentBook(student_book){
    return {type: "LOAD_CURRENT_BOOK", payload: student_book}
}

function loadingCurrentBook(){
    return (dispatch) => {
        fetch(LOAD_CURRENT_BOOK_URL, {method: "POST", 
        headers: {
            "Content-Type":"application/json",
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
            user_id: localStorage.user_id
        })})
        .then(res => res.json())
        .then(student_book=> dispatch(loadedCurrentBook(student_book)))
    }
}

function addedReadingTweet(student_book){
    return {type: "ADD_TWEET", payload: student_book}
}

function addingReadingTweet(e, submission, point_value, student_book_id, character_id){
    
    e.preventDefault()
    e.persist()
    return (dispatch) => {
        fetch(READING_TWEET_URL, {method: "POST", 
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
            submission, 
            point_value,
            student_book_id,
            character_id
        })
        })
        .then(res => res.json())
        .then(tweet => {
            e.target.reset()
            dispatch(addedReadingTweet(tweet))})
}}

function setCharacter(student_book){
    return {type: "SET_CHARACTER", payload: student_book}
}

function settingCharacter(character_id, student_book_id){
    return (dispatch) => {
        fetch(SET_CHAR_URL, {method: "POST", 
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
            student_book_id,
            character_id
        })
        })
        .then(res => res.json())
        .then(student_book => dispatch(setCharacter(student_book)))
}}

function finishedCurrentBook(book){
    return {type: "FINISHED_READING"}
}

function finishingCurrentBook(student_book_id){
    return (dispatch) => {
        fetch(STUDENT_BOOK_URL + student_book_id, {method: "PATCH", 
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
            id: student_book_id
        })
        })
        .then(res => res.json())
        .then(student_book => dispatch(finishedCurrentBook(student_book)))
}}

function addedCurrentBook(book){
    return {type: "SET_CURRENTLY_READING", payload: book}
}

function addingCurrentBook(book_id){
    return (dispatch) => {
        fetch(CURRENT_BOOK_URL, {method: "POST", 
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
            book_id: book_id,
            user_id: localStorage.user_id
        })
        })
        .then(res => res.json())
        .then(student_book => dispatch(addedCurrentBook(student_book)))
}}

function loadedBooks(books){

    return {type: "LOAD_BOOKS", payload: books}
}

function loadingBooks(){
    return (dispatch) => {
    fetch(USER_URL + localStorage.user_id, {method: "GET", 
    headers: {
        Authorization: `Bearer ${localStorage.token}`
    }})
    .then(res => res.json())
    .then(user => dispatch(loadedBooks(user.books)))
}
}

function addedBook(book){
    return {type: "ADD_BOOK", payload: book}
}

function addingBook(title, author, ISBN_number, image_url, pageCount){
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
            title, 
            author, 
            ISBN_number, 
            image_url, 
            total_pages: pageCount,
            user_id: localStorage.user_id
        
        })
    }
    
    return (dispatch) => {
        fetch(BOOKS_URL, configObj)
        .then(res => res.json())
        .then(book => {
          dispatch(addedBook(book))
        })
      }
}

export { 
    addingBook, 
    loadingBooks, 
    addingCurrentBook, 
    finishingCurrentBook, 
    settingCharacter, 
    addingReadingTweet,
    loadingCurrentBook,
    filterBookShelf,
    removingFromShelf, 
    removingCharacter,
    loadingUser,
    loadingTweetData,
    deletingTweet, 
    submittingVocab,
    loadingAllTweets,
    loadingVocabData,
    creatingReward,
    deletingVocab,
    addingCharacterToBook,
    addingProfilePhoto,
    updatingPage, 
    handledStreak}
