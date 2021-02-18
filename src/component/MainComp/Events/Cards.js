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
     
const Cardz = (props) => {
  const {dat} = props;
  
  const classes = useStyles();

  return (
   <div>
    <Card className={classes.root} className="cards">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {dat}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button color="primary" href="/Register">
          EDIT
        </Button>

        <Button color="secondary" href="/Register">
          DELETE
        </Button>
      </CardActions>
    </Card>
   </div>
   );
}

export default Cardz;