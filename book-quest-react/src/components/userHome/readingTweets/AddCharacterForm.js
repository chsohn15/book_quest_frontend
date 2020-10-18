import React from 'react'
import { connect } from 'react-redux'
import { addingCharacterToBook } from '../../../redux/actions.js'
import { useSelector } from "react-redux";

const AddCharacterForm = (props) => {

    const book_id = useSelector(state => state.currentBookReducer.currentBook.book_id)

    return(
    <div>
        <form onSubmit={(e) => props.addingCharacterToBook(e, book_id)}>
        <label>Character Name:</label>
        <input type="text" name="character"></input><br />
        <label>Image URL:</label>
        <input type="text" name="image-url"></input><br />
        <input type="submit"/>
        </form>
    </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    addingCharacterToBook : (e, book_id) => { dispatch( addingCharacterToBook (e, book_id) )},
  
})

export default connect(null, mapDispatchToProps)(AddCharacterForm)