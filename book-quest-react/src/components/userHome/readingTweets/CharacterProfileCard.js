import React from 'react'
import { connect } from 'react-redux'
import { useSelector } from "react-redux";
import { removingCharacter } from '../../../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const CharacterProfileCard = (props) => {

    const classes = useStyles();

    const { id, name, image_url } = useSelector(state => state.currentBookReducer.currentBook.twitter_character)
    const student_book_id = useSelector(state => state.currentBookReducer.currentBook.id)

    return(<div className={classes.root}>
        <Avatar src={image_url}  className={classes.large}/>
        <h5><strong>{name}</strong></h5>
        <button onClick={ () => props.removingCharacter(student_book_id)}>Change Your Character</button>
        </div>)
}

const mapDispatchToProps = (dispatch) => ({
    removingCharacter: (student_book_id) => { dispatch( removingCharacter(student_book_id) )}
})

const useStyles = makeStyles((theme) => ({
    root: {
    //   display: 'flex',
    //   '& > *': {
    //     margin: theme.spacing(1),
    //   },
      fontFamily: "'Lato', sans-serif"
    },
    large: {
      width: theme.spacing(18),
      height: theme.spacing(18),
    },
  }));

export default connect(null, mapDispatchToProps)(CharacterProfileCard)