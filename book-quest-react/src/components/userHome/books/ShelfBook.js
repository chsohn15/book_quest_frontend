import React from 'react'
import { connect } from 'react-redux'
import { addingCurrentBook } from '../../../redux/actions.js'
import { filterBookShelf } from '../../../redux/actions.js'
import { removingFromShelf } from '../../../redux/actions.js'
import { useSelector } from "react-redux";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'


import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';


import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';



const ShelfBook = (props) => {
    const { id, title, author, total_pages, image_url, ISBN_number } = props.book
    const student_id   = useSelector(state => state.userReducer.currentUser.id)
    const classes = useStyles();

    const handleClick = (id) => {
        props.addingCurrentBook(id)
        props.filterBookShelf(id)
    }
    
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const pop_id = open ? 'simple-popover' : undefined;

    return(
        <Col md={3}>
            <Card style={{ width: '13rem', marginTop: '15px' }} >
                <Card.Img variant="top" src={image_url} /> 
                    <Card.Body>
                        <Card.Title>{title} <KeyboardArrowDownIcon onClick={handlePopClick} aria-describedby={pop_id} style={{cursor: "pointer"}}/>
                            <Popover
                                id={pop_id}
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
                                <Typography onClick={() => handleClick(id)} className={classes.typography} style={{cursor:"pointer"}}>Add to 'Currently Reading'</Typography>
                                <Typography onClick={() => props.removingFromShelf(student_id, id)} className={classes.typography} style={{cursor:"pointer"}}>Remove from shelf</Typography>
                            </Popover>
                        </Card.Title> 
                    <Card.Text>{author}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addingCurrentBook: (book_id) => { dispatch( addingCurrentBook(book_id) )},
    filterBookShelf: (book_id) => { dispatch( filterBookShelf(book_id) )},
    removingFromShelf: (student_id, book_id) => { dispatch( removingFromShelf(student_id, book_id) )}
})

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
      fontFamily: "'Lato', sans-serif"
    },
    small: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
    panelBody: {
        marginBottom: "0px"
    },
    mediaLeft: {
        marginRight: "10px"
    },
    submission: {
        fontSize: '18px'
    },
    typography: {
        padding: theme.spacing(2),
      }
  }));

export default connect(null, mapDispatchToProps)(ShelfBook)