import React from 'react'
import ShelfBook from './ShelfBook'
import { connect } from 'react-redux'
import { loadingBooks } from '../../../redux/actions.js'
import { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


const UserBookShelf = (props) => {

    useEffect(() => {
        props.loadingBooks()
    }, [])

    return(
        <div>
        <h1 style={{fontFamily: "'Kalam', cursive", marginLeft: "500px"}}>My Bookshelf</h1>
        <Container>
            <Row >
            {props.books ? props.books.map(book => <ShelfBook book={book} key={book.id}/>) : null}
            {/* {props.books.map(book => <ShelfBook book={book} key={book.id}/>)} */}
            </Row>
        </Container>
        </div>
    )
}


const mapStateToProps = state => {
    return {books: state.booksReducer.books}
}

const mapDispatchToProps = (dispatch) => ({
    loadingBooks: () => { dispatch( loadingBooks() )}
})

export default connect(mapStateToProps, mapDispatchToProps)(UserBookShelf)