const BOOKS_URL = "http://localhost:3000/api/v1/books"
const USER_URL = "http://localhost:3000/api/v1/users/"

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

export { addingBook, loadingBooks }
