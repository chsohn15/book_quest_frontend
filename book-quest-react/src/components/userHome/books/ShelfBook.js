import React from 'react'
import { connect } from 'react-redux'
import { addingCurrentBook } from '../../../redux/actions.js'
import { filterBookShelf } from '../../../redux/actions.js'
import { removingFromShelf } from '../../../redux/actions.js'
import { useSelector } from "react-redux";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const ShelfBook = (props) => {
    const { id, title, author, total_pages, image_url, ISBN_number } = props.book
    const student_id   = useSelector(state => state.userReducer.currentUser.id)
    
    const handleClick = (id) => {
        props.addingCurrentBook(id)
        props.filterBookShelf(id)
    }

    const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root} style={{padding: '10px', borderStyle:'solid', height: '150px', width: "500px"}}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            <em>{title}</em>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          {author}
          </Typography>
                <button onClick={() => handleClick(id)}>Add to 'Currently Reading'</button><br />
                 <button onClick={() => props.removingFromShelf(student_id, id)}>Remove from shelf</button>
        </CardContent>
        
      </div>
      <CardMedia
        className={classes.cover}
        image={image_url}
        title="Live from space album cover"
      />
    </Card>
  );

    // return(
    //     <div>
    //         <img src={image_url} alt="book" style={{height: "60px"}}/>
    //         <div>{title}</div>
    //         <div>{author}</div>
    //         <button onClick={() => handleClick(id)}>Add to 'Currently Reading'</button><br />
    //         <button onClick={() => props.removingFromShelf(student_id, id)}>Remove from shelf</button>
    //     </div>
    // )
}

const mapDispatchToProps = (dispatch) => ({
    addingCurrentBook: (book_id) => { dispatch( addingCurrentBook(book_id) )},
    filterBookShelf: (book_id) => { dispatch( filterBookShelf(book_id) )},
    removingFromShelf: (student_id, book_id) => { dispatch( removingFromShelf(student_id, book_id) )}
})

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 80,
    }
  }));

export default connect(null, mapDispatchToProps)(ShelfBook)