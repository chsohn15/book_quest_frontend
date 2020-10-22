import React from 'react'
import { connect } from 'react-redux'
import { useSelector } from "react-redux";
import { removingCharacter } from '../../../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const CharacterProfileCard = (props) => {

    const classes = useStyles();

    const { id, name, image_url } = useSelector(state => state.currentBookReducer.currentBook.twitter_character)
    const student_book_id = useSelector(state => state.currentBookReducer.currentBook.id)

    return(<div className={classes.root}>
        <Avatar src={image_url}  className={classes.large}/>
        <h5 style={{marginLeft: '55px', paddingTop: '10px'}}><strong>{name}</strong> <CheckCircleIcon style={{color:"#00ACEE"}}/></h5>
        <button onClick={ () => props.removingCharacter(student_book_id)}>Change Your Character</button>
        </div>)
}

const mapDispatchToProps = (dispatch) => ({
    removingCharacter: (student_book_id) => { dispatch( removingCharacter(student_book_id) )}
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

export default connect(null, mapDispatchToProps)(CharacterProfileCard)