import React from 'react';
import { addingProfilePhoto } from '../../../redux/actions.js'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'

const AddPhotoForm = (props) => {
    
    const handleSubmit = (e) => {
        props.addingProfilePhoto(e)
        props.changeBtnClicked(!props.btnClicked)
    }
    return(
    <div style={{marginTop: '10px'}}>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label style={{fontSize: "15px"}}>Image URL:</label>
            <input type="text"></input>
            <Button variant="outline-dark" type="submit" style={{marginTop: '10px'}}>Submit</Button>
        </form>
    </div>)
}

const mapDispatchToProps = (dispatch) => ({
    addingProfilePhoto: (e) => { dispatch( addingProfilePhoto(e) )}
})

export default connect(null, mapDispatchToProps)(AddPhotoForm)