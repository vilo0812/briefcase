import React, {Fragment} from 'react'
// materials
import {
	Card,
	makeStyles,
	Typography,
	Grid,
	Grow,
	CardActionArea,
	CardContent,
	CardMedia
} from '@material-ui/core';
//constants
import studies from './../../../../Constants/studies.js'
//styles
const useStyles = makeStyles(theme => ({
  studies: {
  	margin : '5px',
  	width : '400px',
  	height : '400px'
  },
  margin:{
  	marginLeft : '0.5px'
  },
  title: {
    color:'inherit',
  	textAlign : 'center'
  },
  media: {
    height: 140,
  },
}));
const StudiesBox = () => {
	//const
	const classes = useStyles();
	//view
	return (
		<Fragment>
		<Typography className={classes.title} variant="h4" gutterBottom>
		    Estudios
		</Typography>
			<Grid
			  container
			  direction="column"
			  justify="center"
			  alignItems="center"
			>
				<Grow
		          in={true}
		          style={{ transformOrigin: '0 0 0' }}
		          {...(true ? { timeout: 1000 } : {})}
		        >
		        <Grid
				  container
				  direction="row"
				  justify="center"
				  alignItems="center"
				>
				{
					studies.map((item,index) => (
					<Card className={classes.studies}>
				      <CardActionArea>
				        <CardMedia
				          className={classes.media}
				          image={item.img}
				          title={item.title}
				        />
				        <CardContent>
				          <Typography gutterBottom variant="h5" component="h2">
				            {item.academy}
				          </Typography>
				          <Typography variant="body2" color="subtitle1" component="p">
				            {item.title}
				          </Typography>
				          <Typography variant="subtitle2" gutterBottom>
				           {item.date}
				          </Typography>
				          <Typography variant="subtitle2" gutterBottom>
				           {item.direction}
				          </Typography>
				        </CardContent>
				      </CardActionArea>
				    </Card>
				    ))
				}
				   </Grid>
			  </Grow>
		  </Grid>
		</Fragment>
	);
}
export default StudiesBox;