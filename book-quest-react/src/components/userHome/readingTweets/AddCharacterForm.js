import React from 'react'
import { connect } from 'react-redux'
import { addingCharacterToBook } from '../../../redux/actions.js'

const AddCharacterForm = (props) => {

    return(
    <div>
        <form onSubmit={(e) => props.addingCharacterToBook(e)}>
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