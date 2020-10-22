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
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const TierOneContainer = (props) => {

    const classes = useStyles();

    const student_id = useSelector(state => state.userReducer.currentUser.id)
    const rewardsHash = useSelector(state => state.userReducer.currentUser.rewards_hash)
    //rewardsHash["body"]

    // const errors = useSelector(state => state.errorsReducer.errors)

    const level = 1
    const body_price = 20
    const body_description = "body"

    const face_price = 20
    const face_description = "face"

    // DISABLE BUTTON WHEN REWARD IS REDEEMED
    // CALCULATE MONEY SPENT AND BALANCE

    return(
    <React.Fragment>
        <Container style={{marginTop: '50px', marginLeft:"150px"}}>
            <Row>
        {/* {errors.rewardsError ? <div>{errors.rewardsError}</div>: null} */}
        <Col md={6}>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://thumbs.dreamstime.com/b/child-making-snowball-isolated-vector-illustration-graphic-cute-child-making-snowball-isolated-vector-illustration-graphic-130272751.jpg"
                    title="Building Snowman"
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Snowman Body
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Start building your snowman by adding a base!
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Price: 20 Stars
                    </Typography>
                </CardContent>
            </CardActionArea>
        <CardActions>
            {rewardsHash["body"] ? 
                <Typography variant="body2" color="textSecondary" component="p">
                    Redeemed!
                </Typography> 
                : 
                <Button size="small" color="primary" onClick={() =>props.creatingReward(body_price, level, student_id, body_description)}>
                Redeem Reward
                </Button>
            }
        </CardActions>
    </Card>
    </Col>
    <Col md={6}>
    <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://st4.depositphotos.com/5112083/21955/v/1600/depositphotos_219557216-stock-illustration-happy-family-winter-outwear-build.jpg"
                    title="Building Snowman Face"
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Snowman Face
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Add a Face to Your Snowman!
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Price: 20 Stars
                    </Typography>
                </CardContent>
            </CardActionArea>
        <CardActions>
        {rewardsHash["face"] ? 
                <Typography variant="body2" color="textSecondary" component="p">
                    Redeemed!
                </Typography> 
                : 
                <Button size="small" color="primary" onClick={() =>props.creatingReward(face_price, level, student_id, face_description)}>
                    Redeem Reward
                </Button>
            }
            
        </CardActions>
    </Card>
    </Col>
    </Row>
    </Container>
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
      height: 185,
    },
  });

export default connect(null, mapDispatchToProps)(TierOneContainer)