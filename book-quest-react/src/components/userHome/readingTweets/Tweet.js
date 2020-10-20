import React from 'react'
import { deletingTweet } from '../../../redux/actions.js'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


const Tweet = (props) => {
    const classes = useStyles();

    const { id, created_at, submission } = props.tweet
    const { name, image_url } = props.tweet.character

    const date = new Date(created_at)
    const finalDate = date.toDateString()

    if (props.tweet.student_book){
        const book_title = props.tweet.student_book.book.title
    return(
    <div>
        <img src={image_url} style={{width: "20px"}} />
        <span>{name}</span>
        <div><em>{book_title}</em></div>
        <div>{submission}</div>
        <div>{finalDate}</div>
        <button onClick={() => props.deletingTweet(id)}>-</button>
    </div>
    )
    }
    else{
        return (
            <div className={classes.root}>
            <div className={classes.panelBody} >
            <div class="media">
                <a className={classes.mediaLeft} href="#fake">
                    <Avatar src={image_url}  className={classes.small} ></Avatar>
                </a>
                <div class="media-body">
                    <h6><strong>{name}</strong></h6><CheckCircleIcon color="primary"/>
                    <p className={classes.submission}>{submission}</p>
                    <ul class="nav nav-pills nav-pills-custom">
                        <li><a href="#"><span class="glyphicon glyphicon-share-alt"></span></a></li>
                        <li><a href="#"><span class="glyphicon glyphicon-retweet"></span></a></li>
                        <li><a href="#"><span class="glyphicon glyphicon-star"></span></a></li>
                        <li><a href="#"><span class="glyphicon glyphicon-option-horizontal"></span></a></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
/* <div>
            <img src={image_url} style={{width: "20px"}} />
            <span>{name}</span>
            <div>{submission}</div>
            <div>{finalDate}</div>
            <button onClick={() => props.deletingTweet(id)}>-</button>
        </div> */
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    deletingTweet: (tweet_id) => { dispatch( deletingTweet(tweet_id) )}
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
        marginBottom: "10px"
    },
    mediaLeft: {
        marginRight: "10px"
    },
    submission: {
        fontSize: '18px'
    }
  }));

export default connect(null, mapDispatchToProps)(Tweet)