import React from 'react'
import { connect } from 'react-redux'
import { settingCharacter } from '../../../redux/actions.js'

const CharacterCard = (props) => {
    const { id, name, image_url } = props.character
    const student_book_id = props.student_book_id
    const character_id = id
    return(
    <div onClick={() => props.settingCharacter(character_id, student_book_id)} style={{cursor: "pointer"}}>
        <img style={{width: "100px"}}src={image_url} alt={name}/>
        <div>{name}</div>
    </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    settingCharacter: (character_id, student_book_id) => { dispatch( settingCharacter(character_id, student_book_id) )}
})

export default connect(null, mapDispatchToProps)(CharacterCard)