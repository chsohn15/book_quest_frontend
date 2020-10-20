import React from 'react';
import { addingProfilePhoto } from '../../../redux/actions.js'
import { connect } from 'react-redux'

const AddPhotoForm = (props) => {
    
    const handleSubmit = (e) => {
        props.addingProfilePhoto(e)
        props.changeBtnClicked(!props.btnClicked)
    }
    return(<div>
        Photo Form
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Image URL</label>
            <input type="text"></input>
            <input type="submit"></input>
        </form>
    </div>)
}

const mapDispatchToProps = (dispatch) => ({
    addingProfilePhoto: (e) => { dispatch( addingProfilePhoto(e) )}
})

export default connect(null, mapDispatchToProps)(AddPhotoForm)