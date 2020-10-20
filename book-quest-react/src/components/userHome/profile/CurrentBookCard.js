import React from 'react';
import { connect } from 'react-redux'
import { finishingCurrentBook } from '../../../redux/actions.js'
import { useState } from 'react'
import UpdatePageForm from './UpdatePageForm'
import ProgressBar from 'react-bootstrap/ProgressBar';

const CurrentBookCard = (props) => {

    const [updateBtnClicked, changeUpdateBtn] = useState(false);

    if (props.book.book){
    const {title, author, image_url, total_pages, ISBN_number} = props.book.book
    const student_book_id = props.book.id 
    const currentPage = props.book.current_page
    const progress = (currentPage/total_pages) *100
    //debugger

    return(
        <div style={{paddingTop: '20px'}}>
            <div>Currently Reading</div>
            <img src={image_url}></img>
            <div>{title}</div>
            <div>{author}</div>
            <div>Total Pages: {total_pages}</div>
            <ProgressBar now={progress} />
            <div>Current Page: {currentPage} </div>
            <button onClick={()=> changeUpdateBtn(!updateBtnClicked)}>Update Current Page</button>
            {updateBtnClicked ? <UpdatePageForm updateBtnClicked={updateBtnClicked} changeUpdateBtn={changeUpdateBtn} /> : null}
            <button onClick={() => props.finishingCurrentBook(student_book_id)}>Finished Book!</button>
        </div>
    )
    }
    else return (
        <div>Add a book to your "Currently Reading" List below!</div>
    )
}

const mapStateToProps = state => {
    return {book: state.currentBookReducer.currentBook}
}

const mapDispatchToProps = (dispatch) => ({
    finishingCurrentBook: (student_book_id) => { dispatch( finishingCurrentBook(student_book_id) )}
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentBookCard)