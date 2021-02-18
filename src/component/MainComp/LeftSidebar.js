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
            Why Visit Us ?
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          CollegeFest presents an unmatched consumer offering for college students by 
          unique and engaging experiences from locally and 
          nationally recognized brands, to form the biggest 
          back to school celebrations. Reach thousands of 
          students at once at our large scale events. Complete
           the fields below for more information on CollegeFest.
            You can also contact us for information
           on reaching students across the country.
           
          </Typography>
          <br/>
          <Typography variant="body2" color="textSecondary" component="p">
          It is the largest cultural and technical event of North India attracting 
          crowd of over 30,000 people.With over 150+ events in line.
          It presents a 3-day chronicle playing host to eminent celebrities
          and talented scholars. 
          </Typography>
          <br/>
          <Typography variant="body2" color="textSecondary" component="p">
          When you are a CollegeFest Insider you'll have access 
          to giveaways (think tickets, gift cards, free product)
           and exclusive offers all year long! You will also be
            the first to know about new events and new ways to 
            win. Take your college experience to the next level, 
            and become an Insider today.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        <Button color="primary" href="/About">
          KNOW MORE
        </Button>
      </CardActions>
    </Card>
  
  );
}
