import React from 'react'
import { connect } from 'react-redux'
import { addingCurrentBook } from '../../../redux/actions.js'
import { filterBookShelf } from '../../../redux/actions.js'
import { removingFromShelf } from '../../../redux/actions.js'
import { useSelector } from "react-redux";
import Card from 'react-bootstrap/Card'


import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));

const ShelfBook = (props) => {
    const { id, title, author, total_pages, image_url, ISBN_number } = props.book
    const student_id   = useSelector(state => state.userReducer.currentUser.id)
    const classes = useStyles();

    const handleClick = (id) => {
        props.addingCurrentBook(id)
        props.filterBookShelf(id)
    }

    return(
        <div>
            <Card style={{ width: '13rem' }}>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{author}</Card.Text>
            <PopupState variant="popper" popupId="demo-popup-popper" >
                {(popupState) => (
                    <div>
                    <Button variant="contained" color="primary" {...bindToggle(popupState)} style={{"marginLeft": "43px"}}>
                    +
                     </Button>
                    <Popper {...bindPopper(popupState)} transition>
                    {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <Typography onClick={() => handleClick(id)} className={classes.typography} style={{cursor:"pointer"}}>Add to 'Currently Reading'</Typography>
                                <Typography onClick={() => props.removingFromShelf(student_id, id)} className={classes.typography} style={{cursor:"pointer"}}>Remove from shelf</Typography>
                            </Paper>
   
                            </Fade>
                )}
                    </Popper>
                </div>
                )}
             </PopupState>

            {/* <Button variant="primary" onClick={() => handleClick(id)}>Add to 'Currently Reading'</Button><br />
            <Button variant="primary" onClick={() => props.removingFromShelf(student_id, id)}>Remove from shelf</Button> */}
            </Card.Body>
            </Card>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addingCurrentBook: (book_id) => { dispatch( addingCurrentBook(book_id) )},
    filterBookShelf: (book_id) => { dispatch( filterBookShelf(book_id) )},
    removingFromShelf: (student_id, book_id) => { dispatch( removingFromShelf(student_id, book_id) )}
})

export default connect(null, mapDispatchToProps)(ShelfBook)