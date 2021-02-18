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
    maxWidth: 450,
    height : 250
  },
  media: {
    height: 200,
  },
});
     
const Cards = (props) => {
  const {dat} = props;
  const {des} = props;
  
  const classes = useStyles();

  return (
   <div>
    <Card className={classes.root} className="cards">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {dat}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {des}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        <Button color="primary" href="/Register">
          REGISTER
        </Button>
      </CardActions>
    </Card>
   </div>
   );
}

export default Cards;