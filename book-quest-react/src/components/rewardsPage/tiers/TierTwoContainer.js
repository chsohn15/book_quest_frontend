import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { creatingReward } from '../../../redux/actions.js' 
import { useSelector } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const TierTwoContainer = (props) => {

    const classes = useStyles();

    const student_id = useSelector(state => state.userReducer.currentUser.id)
    const rewardsHash = useSelector(state => state.userReducer.currentUser.rewards_hash)
    // const errors = useSelector(state => state.errorsReducer.errors)

    const level = 2
    const buttons_price = 15
    const buttons_description = "buttons"

    const eyes_price = 15
    const eyes_description = "eyes"

    const nose_price = 15
    const nose_description = "nose"

    const arms_price = 20
    const arms_description = "arms"

    return(
        <React.Fragment>

            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://www.thewonderofchristmas.com/wp-content/uploads/2009/08/children-building-snowman.jpg"
                    title="Building Snowman Buttons"
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Buttons
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Add buttons to your snowman!
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Price: 15 Stars
                    </Typography>
                </CardContent>
            </CardActionArea>
        <CardActions>
            {rewardsHash["buttons"] ? 
                <Typography variant="body2" color="textSecondary" component="p">
                    Redeemed!
                </Typography> 
                : 
                <Button size="small" color="primary" onClick={() =>props.creatingReward(buttons_price, level, student_id, buttons_description)}>
                Redeem Reward
                </Button>
            }
        </CardActions>
    </Card>

    <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSblHD2y_qkduDEOFEmSUb7SnAODb-Q-_A4vA&usqp=CAU"
                    title="Building Snowman Eyes"
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Eyes
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Add eyes to your snowman!
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Price: 15 Stars
                    </Typography>
                </CardContent>
            </CardActionArea>
        <CardActions>
            {rewardsHash["eyes"] ? 
                <Typography variant="body2" color="textSecondary" component="p">
                    Redeemed!
                </Typography> 
                : 
                <Button size="small" color="primary" onClick={() =>props.creatingReward(eyes_price, level, student_id, eyes_description)}>
                Redeem Reward
                </Button>
            }
        </CardActions>
    </Card>

    <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://st4.depositphotos.com/6464944/30940/v/950/depositphotos_309403198-stock-illustration-traditional-winter-time-activity-man.jpg"
                    title="Building Snowman Nose"
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Nose
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Add a nose to your snowman!
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Price: 15 Stars
                    </Typography>
                </CardContent>
            </CardActionArea>
        <CardActions>
            {rewardsHash["nose"] ? 
                <Typography variant="body2" color="textSecondary" component="p">
                    Redeemed!
                </Typography> 
                : 
                <Button size="small" color="primary" onClick={() =>props.creatingReward(nose_price, level, student_id, nose_description)}>
                Redeem Reward
                </Button>
            }
        </CardActions>
    </Card>

    <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://lh3.googleusercontent.com/proxy/kDX2k_rNwPRn6hsCc6Ygfld-kRq6y_07l4XN6L0RVT8buiQc-JJYq6RC6vx1vNWi25i6gAN8yNx0Woyi85M0VgnFCdsix1BtgGary3F-exxU"
                    title="Building Snowman Arms"
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Arms
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Add arms to your snowman!
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Price: 20 Stars
                    </Typography>
                </CardContent>
            </CardActionArea>
        <CardActions>
            {rewardsHash["arms"] ? 
                <Typography variant="body2" color="textSecondary" component="p">
                    Redeemed!
                </Typography> 
                : 
                <Button size="small" color="primary" onClick={() =>props.creatingReward(arms_price, level, student_id, arms_description)}>
                Redeem Reward
                </Button>
            }
        </CardActions>
    </Card>
            {/* <button onClick={() => props.creatingReward(buttons_price, level, student_id, buttons_description)}>Add Buttons</button> */}
            {/* <button onClick={() => props.creatingReward(eyes_price, level, student_id, eyes_description)}>Add Eyes</button> */}
            {/* <button onClick={() => props.creatingReward(nose_price, level, student_id, nose_description)}>Add a Carrot Nose</button> */}
            {/* <button onClick={() => props.creatingReward(arms_price, level, student_id, arms_description)}>Add Arms</button> */}
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    creatingReward: (price, level, student_id, description) => { dispatch( creatingReward(price, level, student_id, description) )}
    
})

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 300,
    },
  });

export default connect(null, mapDispatchToProps)(TierTwoContainer)