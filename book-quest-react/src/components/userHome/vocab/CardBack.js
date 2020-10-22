import React from 'react'
import { connect } from 'react-redux'
import { deletingVocab } from '../../../redux/actions.js'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const CardBack = (props) => {

    const { id, definition, sentence_from_book, original_sentence } = props.vocab
    const book_title = props.book_title


    const classes = useStyles();

    return(
    <Card className={classes.root}>
        <CardContent>
        <Typography variant="body2" component="p" style={{fontSize:'15px'}}><strong>Definition: </strong>{definition}</Typography><br />
        <Typography variant="body2" component="p" style={{fontSize:'15px'}}><strong>Sentence from <em>{book_title}</em>:</strong> "{sentence_from_book}"</Typography><br />
        <Typography variant="body2" component="p" style={{fontSize:'15px'}}><strong>Original Sentence:</strong> {original_sentence}</Typography><br />
        <button onClick={() => props.deletingVocab(id)}>Delete Card</button>
        </CardContent>
    </Card>
    )
}


const mapDispatchToProps = (dispatch) => ({
    deletingVocab: (id) => { dispatch( deletingVocab(id) )},
    
})


const useStyles = makeStyles({
    root: {
      minWidth: 450,
      height: 300,
      backgroundColor: "#9ae3dd;",
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/fake-luxury.png")'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default connect(null, mapDispatchToProps)(CardBack)
