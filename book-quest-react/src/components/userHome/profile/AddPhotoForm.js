import React from 'react';
import { addingProfilePhoto } from '../../../redux/actions.js'
import { connect } from 'react-redux'

const AddPhotoForm = (props) => {
    
    return(<div>
        Photo Form
        <form onSubmit={(e) => props.addingProfilePhoto(e)}>
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