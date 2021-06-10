import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Centro from '../../images/sucursal-centro.jpeg';
import Norte from '../../images/sucursal-norte.jpeg';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },    
  cardRoot: {
    maxWidth: 345,
    margin: 50,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.cardRoot}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            C
          </Avatar>
        }
        title="Sucursal Centro"
        subheader="Maipu 314, Antofagasta"
      />
      <CardMedia
        className={classes.media}
        image={Centro}
        title="Sucursal Centro"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Nuestro local ubicado en el centro de nuestra ciudad, es un lugar ideal para disfrutar de la mejor
          comida china en la ciudad, con decoracion y ambiente incomparable.
        </Typography>
        <Typography variant="body1" color="textPrimary" component="h2">
          Fono:
          55 2 388888
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>

    <Card className={classes.cardRoot}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            N
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Sucursal Norte"
        subheader="Los Chañares 291, Antofagasta"
      />
      <CardMedia
        className={classes.media}
        image={Norte}
        title="Sucursal Norte"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Nuestro local ubicado en el norte de nuestra ciudad, es un lugar ideal
          para una cena en familia gracias al ambiente acogedor. El area grande del local
          es ideal para eventos grandes, como: matrimonios y cumpleaños.
        </Typography>
        <Typography variant="body1" color="textPrimary" component="h2">
          Fono:
          55 2 270000
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    </div>
    
  );
}
