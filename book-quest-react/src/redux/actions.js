const BOOKS_URL = "http://localhost:3000/api/v1/books"
const USER_URL = "http://localhost:3000/api/v1/users/"
const CURRENT_BOOK_URL ="http://localhost:3000/api/v1/current_book"
const STUDENT_BOOK_URL = "http://localhost:3000/api/v1/student_books/"
const SET_CHAR_URL = "http://localhost:3000/api/v1/set_character"
const READING_TWEET_URL ="http://localhost:3000/api/v1/add_tweet"

function addedReadingTweet(tweet){

}

function addingReadingTweet(e, submission, point_value, student_book_id, character_id){
    
    e.preventDefault()
    debugger
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
        .then(student_book => console.log(student_book))
        // .then(tweet => dispatch(addedReadingTweet(tweet)))
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
        fetch(STUDENT_BOOK_URL + student_book_id, {method: "POST", 
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

export { addingBook, loadingBooks, addingCurrentBook, finishingCurrentBook, settingCharacter, addingReadingTweet}
