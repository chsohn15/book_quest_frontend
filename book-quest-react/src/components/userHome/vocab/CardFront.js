import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const CardFront = (props) => {

    const classes = useStyles();

    return(
        <Card className={classes.root}>
        <CardContent>
            <Typography variant="h5" component="h2" style={{fontFamily: "'Kalam', cursive", textAlign:"center", marginTop: "110px", fontSize: "30px"}}>{props.word}</Typography>
        </CardContent>
        </Card>

    )
}

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

export default CardFront