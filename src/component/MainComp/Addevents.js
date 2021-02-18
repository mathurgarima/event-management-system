import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Login from "./Login";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Login.css';
import './Card.css';

const useStyles = makeStyles({
    root: {
      maxWidth: 1200,
      width:1200,
      height: 570,
    },
    media: {
      height: 300,
    },
  });
  

export default function Registration(){
  
    const classes = useStyles();

  return (
   
    <Card className={classes.root}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           ADD NEW EVENT PROGRAM
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">

          </Typography>
        </CardContent>
      </CardActionArea>
      
       
    </Card>
   
   );
}
