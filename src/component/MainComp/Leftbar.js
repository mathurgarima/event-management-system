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
    maxWidth: 1000,
  },
  media: {
    height: 130,
    width: 1200
  },
});


export default function LeftSidebar() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            TEEDx Talks
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Did you know that the iconic idea-sharing forum TEDx started as a campus event at USC in 2009? Now, the platform encourages campuses to start their own version of the digitally evolved lecture series. Capturing such talks on video makes for powerful, potentially viral social media. For details on how to start a campus TEDx, visit the website.
          </Typography>
          <br/>
          <Typography gutterBottom variant="h5" component="h2">
            Community Service Events
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Millennials love expressing their values online, but 80% of them feel it’s essential for people to come together in person to promote positive change. Invite them to be that change. Team up with an organization outside of campus to promote and orchestrate a meaningful community event. For instance, clean up a local beach, organize a themed open mike, or raise awareness with a special class where all proceeds go to a cause. 
          </Typography>
          <br/>
          <Typography gutterBottom variant="h5" component="h2">
            Solo Night Hike
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Sends groups out on an established trail (with reliable guides) late at night. Send a guide further along and send students one at a time to navigate a short, flat distance of the hike alone. This is a great bonding activity that can be made even more fun by ending the hike with a bonfire and s’mores!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        <Button color="primary" href="/Event">
          KNOW MORE
        </Button>
      </CardActions>
    </Card>
  
  );
}
