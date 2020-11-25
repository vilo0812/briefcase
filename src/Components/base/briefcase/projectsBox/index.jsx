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
	CardActions,
	CardMedia,
	Button
} from '@material-ui/core';
//icons
import GitHubIcon from '@material-ui/icons/GitHub';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
//constants
import projects from './../../../../Constants/projects.js'
//styles
const useStyles = makeStyles(theme => ({
  projects: {
  	margin : '5px',
  	width : '400px',
  	minHeight : '510px'
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
  technology:{
  	fontWeight : 'bolder'
  }
}));
const ProjectsBox = () => {
	//const
	const classes = useStyles();
	//view
	return (
		<Fragment>
		<Typography className={classes.title} variant="h4" gutterBottom>
		    Proyectos
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
					projects.map((item,index) => (
					<Card className={classes.projects}>
				      <CardActionArea>
				      	<CardMedia
				          className={classes.media}
				          image={item.img[0]}
				          title={item.title}
				        />
				        <CardContent>
				          <Typography gutterBottom variant="h5" component="h2">
				            {item.title}
				          </Typography>
				          <ul>
				          {
				      		item.technology.backend.active_language === true ? (
				      			<li>
					      			<Typography className={classes.technology} gutterBottom variant="caption" component="block">
					      				{`backend hecho en el lenguaje ${item.technology.backend.language}`}
					      				{
					      					item.technology.backend.active_framework === true ? (
					      					 ` con el framework ${item.technology.backend.framework}`
					      					) : ("")
					      				}
					      			</Typography>
					      		</li>
				      		) : ("")
					      }
				          {
				      		item.technology.frontend.active_language === true ? (
				      			<li>
					      			<Typography className={classes.technology} gutterBottom variant="caption" component="block">
					      				{`frontend hecho en el lenguaje ${item.technology.frontend.language}`}
					      				{
					      					item.technology.frontend.active_framework === true ? (
					      					 ` con el framework ${item.technology.frontend.framework}`
					      					) : ("")
					      				}
					      			</Typography>
				      			</li>
				      		) : ("")
					      }
					      </ul>
				          <Typography variant="body2" color="subtitle1" component="p">
				            {item.description}
				          </Typography>
				        </CardContent>
				      </CardActionArea>
				      <CardActions>
				      <Grid
						  container
						  direction="column"
						  justify="center"
						  alignItems="start"
						>

				      	<Grid item>
					      	<Typography variant="body2" color="subtitle1" component="p">
					      	<GitHubIcon></GitHubIcon> 
					            GitHub:
					      	{
					      		item.github !== "" ? (
					      			<Button href={item.github} color="primary">
					      				ver en github
					      			</Button>
					      		) : (
					      			"No Disponible"
					      		)
					      	}
					        </Typography>
				    	</Grid>
				    	<Grid item>
				    	<Typography variant="body2" color="subtitle1" component="p">
					      	<WorkOutlineIcon></WorkOutlineIcon>
					      	Host:
					      	{
					      		item.host.host_active === true ? (
					      			<Button href={item.host.direction} color="primary">
					      				ver en producción
					      			</Button>
					      		) : (
					      			"No Disponible"
					      		)
					      	}
				      	</Typography>
				      	</Grid>
				      	<Grid item>
				      	{
				      		item.host.user_active === true ? (
				      			<Typography variant="body2" color="subtitle1" component="p">
				      				Usuario registrado:
				      				<ul>
				      					<li>usuario: {item.host.user}</li>
				      					<li>contraseña: {item.host.password}</li>
				      				</ul>
				      			</Typography>
				      		) : (null)
					    }
				      	</Grid>
				      </Grid>
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
export default ProjectsBox;