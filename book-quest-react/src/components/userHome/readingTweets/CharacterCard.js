import React from 'react'
import { connect } from 'react-redux'
import { settingCharacter } from '../../../redux/actions.js'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const CharacterCard = (props) => {

    const classes = useStyles();

    const { id, name, image_url } = props.character
    const student_book_id = props.student_book_id
    const character_id = id
    return(
    <div onClick={() => props.settingCharacter(character_id, student_book_id)} style={{cursor: "pointer", width: "110px"}}>
        <Avatar className={classes.large}  src={image_url} alt={name}/>
        <h6 style={{marginTop: '10px', marginLeft: '85px', width: '100px'}}>{name}</h6>
    </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    settingCharacter: (character_id, student_book_id) => { dispatch( settingCharacter(character_id, student_book_id) )}
})


const useStyles = makeStyles((theme) => ({
    root: {

      fontFamily: "'Lato', sans-serif"
    },
    large: {
      width: theme.spacing(18),
      height: theme.spacing(18),
      marginLeft: '60px'
    },
  }));

export default connect(null, mapDispatchToProps)(CharacterCard)