import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Registration from "./Registration";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Login.css';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      maxWidth: 1200,
      width:1200,
      height: 570,
    },
    media: {
      height: 300,
      width: 1200,
    },
  });
  

export default function Login() {
    const classes = useStyles();

  return (
   
    <Card className={classes.root}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            WELCOME TO LOGIN FORM
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
                <div className="form-group">
                    <label>EMAIL ADDRESS</label>
                    <br/>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <br/>
         
                <div className="form-group">
                    <label>PASSWORD</label>
                    <br/>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      <Button color="primary" href="/Event">
          LOGIN
        </Button>
        </CardActions>
        <CardActions>
      <p className="forgot-password text-right">
         Have Not Registered ? <Link style={{ textDecoration: 'none', color: 
           'black' }} to="/Register">
             REGISTER
              </Link>               
          </p>
      </CardActions>
    </Card>
   
   );
}