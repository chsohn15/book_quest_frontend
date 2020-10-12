import React from 'react'
import { connect } from 'react-redux'
import { useSelector } from "react-redux";
import { removingCharacter } from '../../../redux/actions';

const CharacterProfileCard = (props) => {

    const { id, name, image_url } = useSelector(state => state.currentBookReducer.currentBook.twitter_character)
    const student_book_id = useSelector(state => state.currentBookReducer.currentBook.id)

    return(<div>
        <div>Character Profile Card</div>
        <img src={image_url} style={{ width: "100px"}}/>
        <div>{name}</div>
        <button onClick={ () => props.removingCharacter(student_book_id)}>Change Your Character</button>
        </div>)
}

const mapDispatchToProps = (dispatch) => ({
    removingCharacter: (student_book_id) => { dispatch( removingCharacter(student_book_id) )}
})

export default connect(null, mapDispatchToProps)(CharacterProfileCard)