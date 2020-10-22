import React from 'react'
import { connect } from 'react-redux'
import { useSelector } from "react-redux";
import { removingCharacter } from '../../../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Button from 'react-bootstrap/Button'
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const CharacterProfileCard = (props) => {


    const { name, image_url } = useSelector(state => state.currentBookReducer.currentBook.twitter_character)
    const student_book_id = useSelector(state => state.currentBookReducer.currentBook.id)

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

    return(<div className={classes.root}>
        <Avatar src={image_url}  className={classes.large}/>
        <h5 style={{marginLeft: '55px', paddingTop: '10px'}}><strong>{name}</strong> <CheckCircleIcon style={{color:"#00ACEE"}}/>
        <ArrowDropDownIcon aria-describedby={id} variant="contained" color="primary" onClick={handleClick} style={{cursor: "pointer"}}/>
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography onClick={ () => props.removingCharacter(student_book_id)} className={classes.typography} style={{cursor: "pointer"}}>Change Your Character</Typography>
      </Popover>
      </h5>
        {/* <Button variant="light" onClick={ () => props.removingCharacter(student_book_id)}>Change Your Character</Button> */}
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
    typography: {
      padding: theme.spacing(2),
    },
  }));

export default connect(null, mapDispatchToProps)(CharacterProfileCard)