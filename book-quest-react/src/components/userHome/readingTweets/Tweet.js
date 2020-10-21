import React from 'react'
import { deletingTweet } from '../../../redux/actions.js'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';


const Tweet = (props) => {
    const classes = useStyles();
    
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const pop_id = open ? 'simple-popover' : undefined;

    const { id, created_at, submission } = props.tweet
    const { name, image_url } = props.tweet.character

    const date = new Date(created_at)
    const finalDate = date.toDateString()

    if (props.tweet.student_book){
        const book_title = props.tweet.student_book.book.title

    return(
    <div>
         <div className={classes.root}>
            <div className={classes.panelBody} >
            <div class="media">
                <a className={classes.mediaLeft} href="#fake">
                    <Avatar src={image_url}  className={classes.small} ></Avatar>
                </a>
                <div class="media-body" style={{padding:'10px'}}>
                    <h6>
                        <strong>{name}</strong> 
                        <CheckCircleIcon style={{color:"#00ACEE"}}/>  
                        <span>{finalDate}</span>
                        <KeyboardArrowDownIcon onClick={handleClick} aria-describedby={pop_id} style={{cursor:"pointer", position: "absolute", right: "385px"}}/>
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
                        <Typography onClick={() => props.deletingTweet(id)} className={classes.typography} style={{cursor:"pointer"}}>Delete Tweet</Typography>
                    </Popover>
                        <span><em>   {book_title}</em></span>
                    </h6>
                    <p className={classes.submission}>{submission}</p>
                    
                </div>
            </div>
        </div>
        </div>
        {/* <img src={image_url} style={{width: "20px"}} />
        <span>{name}</span>
        <div><em>{book_title}</em></div>
        <div>{submission}</div>
        <div>{finalDate}</div>
        <button onClick={() => props.deletingTweet(id)}>-</button> */}
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
                <div class="media-body" style={{padding:'10px'}}>
                    <h6>
                        <strong>{name}</strong> 
                        <CheckCircleIcon style={{color:"#00ACEE"}}/>  
                        <span>{finalDate}</span>
                        <KeyboardArrowDownIcon onClick={handleClick} aria-describedby={pop_id} style={{cursor:"pointer", position: "absolute", right: "385px"}}/>
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
                        <Typography onClick={() => props.deletingTweet(id)} className={classes.typography} style={{cursor:"pointer"}}>Delete Tweet</Typography>
                    </Popover>
                    </h6>
                    <p className={classes.submission}>{submission}</p>
                    
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

export default connect(null, mapDispatchToProps)(Tweet)