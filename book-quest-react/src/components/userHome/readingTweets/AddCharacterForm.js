import React from 'react'
import { connect } from 'react-redux'

const AddCharacterForm = (props) => {

    return(
    <div>
        <form>
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
    // addingReadingTweet: (e, submission, point_value, student_book_id, character_id) => { dispatch( addingReadingTweet(e, submission, point_value, student_book_id, character_id) )},
  
})

export default connect(null, mapDispatchToProps)(AddCharacterForm)