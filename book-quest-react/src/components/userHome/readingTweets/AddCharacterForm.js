import React from 'react'



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

export default AddCharacterForm