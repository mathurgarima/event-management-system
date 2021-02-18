import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 400,
  },
});


export default function RightSidebar() {
  const classes = useStyles();

  return (
   
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/2952834/pexels-photo-2952834.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Sound Beat"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            DJ Night
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          If God could be the DJ, then Life is the dance floor; Love is the rhythm and You are the music.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        <Button color="primary" href="/Register">
          REGISTER
        </Button>
      </CardActions>
    </Card>
   
   );
}

