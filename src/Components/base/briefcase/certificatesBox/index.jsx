import React, {Fragment} from 'react'
// materials
import {
	Card,
	makeStyles,
	Typography,
	Grid,
	Grow,
	CardActionArea,
	CardActions,
	CardContent,
	Button
} from '@material-ui/core';
//constants
import certificates from './../../../../Constants/certificates.js'
//styles
const useStyles = makeStyles(theme => ({
  certificates: {
  	margin : '5px',
  	width : '400px',
  	height : '200px'
  },
  title: {
    color:'inherit',
  	textAlign : 'center'
  },
}));
const CertidicatesBox = () => {
	//const
	const classes = useStyles();
	//view
	return (
		<Fragment>
		<Typography className={classes.title} variant="h4" gutterBottom>
		    Certificados
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
					certificates.map((item,index) => (
					<Card className={classes.certificates}>
				      <CardActionArea>
				        
				        <CardContent>
				          <Typography gutterBottom variant="h5" component="h2">
				            {item.title}
				          </Typography>
				          <Typography variant="body2" color="subtitle1" component="p">
				            {item.date}
				          </Typography>
				        </CardContent>
				      </CardActionArea>
				      <CardActions>
				      	{
				          	item.credentials !== "" ? (
					          	<Button href={item.credentials} color="primary">
					          		Ver Credencial
					          	</Button>
				          	) : (
				          		<Button disabled>
					          		Credencial No disponible
					          	</Button>
				          	)
				          }
				      </CardActions>
				    </Card>
				    ))
				}
				   </Grid>
			  </Grow>
		  </Grid>
		</Fragment>
	);
}
export default CertidicatesBox;