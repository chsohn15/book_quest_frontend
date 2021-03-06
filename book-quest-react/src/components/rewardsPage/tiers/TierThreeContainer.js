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

const TierThreeContainer = (props) => {

    const classes = useStyles();

    const student_id = useSelector(state => state.userReducer.currentUser.id)
    const rewardsHash = useSelector(state => state.userReducer.currentUser.rewards_hash)
    // const errors = useSelector(state => state.errorsReducer.errors)

    const level = 3
    const scarf_price = 20
    const scarf_description = "scarf"

    const hat_price = 20
    const hat_description = "hat"
    
    return(
        <React.Fragment>
            <Container style={{marginTop: '50px', marginLeft:"150px"}}>
                <Row>
                <Col md={6}>
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://previews.123rf.com/images/rrraven/rrraven1711/rrraven171100043/90455923-children-build-snowman-.jpg"
                    title="Building Snowman Scarf"
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Scarf
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Add a scarf to your snowman!
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Price: 20 Stars
                    </Typography>
                </CardContent>
            </CardActionArea>
        <CardActions>
            {rewardsHash["scarf"] ? 
                <Typography variant="body2" color="textSecondary" component="p">
                    Redeemed!
                </Typography> 
                : 
                <Button size="small" color="primary" onClick={() =>props.creatingReward(scarf_price, level, student_id, scarf_description)}>
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
                    image="https://previews.123rf.com/images/kenbenner/kenbenner1208/kenbenner120800103/14989127-cartoon-illustration-of-two-children-building-a-snowman.jpghttps://previews.123rf.com/images/kenbenner/kenbenner1208/kenbenner120800103/14989127-cartoon-illustration-of-two-children-building-a-snowman.jpg"
                    title="Building Snowman Hat"
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Hat
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Add a hat to your snowman!
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Price: 20 Stars
                    </Typography>
                </CardContent>
            </CardActionArea>
        <CardActions>
            {rewardsHash["hat"] ? 
                <Typography variant="body2" color="textSecondary" component="p">
                    Redeemed!
                </Typography> 
                : 
                <Button size="small" color="primary" onClick={() =>props.creatingReward(hat_price, level, student_id, hat_description)}>
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
      height: 300,
    },
  });

export default connect(null, mapDispatchToProps)(TierThreeContainer)