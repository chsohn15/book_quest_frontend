import React from 'react';
import { connect } from 'react-redux'
import { finishingCurrentBook } from '../../../redux/actions.js'
import { useState } from 'react'
import UpdatePageForm from './UpdatePageForm'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';

const CurrentBookCard = (props) => {

    const [updateBtnClicked, changeUpdateBtn] = useState(false);

    if (props.book.book){
    const {title, author, image_url, total_pages, ISBN_number} = props.book.book
    const student_book_id = props.book.id 
    const currentPage = props.book.current_page
    const progress = (currentPage/total_pages) *100
    //debugger

    return(
        <div style={{paddingTop: '20px', fontFamily: "'Lato', sans-serif", fontSize: '16px'}}>
            <div style={{fontSize: '16px', fontWeight:"bold"}}>Currently Reading:</div>
            <img src={image_url} style={{paddingTop: '10px'}}></img>
            <div style={{fontWeight:"bold"}} ><em>{title}</em></div>
            <div style={{paddingTop: '10px'}}>By {author}</div>
            <div style={{paddingTop: '10px'}}>Total Pages: {total_pages}</div>
            <ProgressBar style={{marginTop: '10px'}} now={progress} />
            <div style={{paddingTop: '10px'}}>Current Page: {currentPage} </div>
            {updateBtnClicked === false? 
            <Button variant="outline-dark" style={{marginTop: '15px', cursor:"pointer"}} onClick={()=> changeUpdateBtn(!updateBtnClicked)}>Update Current Page</Button>
            : null}
            {updateBtnClicked ? <UpdatePageForm updateBtnClicked={updateBtnClicked} changeUpdateBtn={changeUpdateBtn} /> : null}
            <Button variant="outline-dark" style={{marginTop: '15px', cursor:"pointer"}} onClick={() => props.finishingCurrentBook(student_book_id)}>Finished Book!</Button>
        </div>
    )
    }
    else return (
        <div style={{fontSize: '16px', marginTop: '10px'}}>Add a book to your "Currently Reading" List below!</div>
    )
}

const mapStateToProps = state => {
    return {book: state.currentBookReducer.currentBook}
}

const mapDispatchToProps = (dispatch) => ({
    finishingCurrentBook: (student_book_id) => { dispatch( finishingCurrentBook(student_book_id) )}
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentBookCard)