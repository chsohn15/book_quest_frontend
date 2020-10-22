import React from 'react'
import { useSelector } from "react-redux";
import { connect } from 'react-redux'
import { updatingPage } from '../../../redux/actions.js'
import Button from 'react-bootstrap/Button';


const UpdatePageForm = (props) => {

    const student_book_id  = useSelector(state => state.currentBookReducer.currentBook.id)

    const handleSubmit = (e) => {
        e.preventDefault()
        let new_page = e.target[0].value

        props.updatingPage(student_book_id, new_page)
        props.changeUpdateBtn(!props.updateBtnClicked)
    }

    return(
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label style={{marginTop: '10px'}}>New Current Page:</label>
                <input type="number"></input>
                <Button style={{marginTop: '10px'}} variant="outline-dark" type="submit">Submit</Button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    updatingPage: (student_book_id, new_page) => { dispatch( updatingPage(student_book_id, new_page) )}
})

export default connect(null, mapDispatchToProps)(UpdatePageForm)