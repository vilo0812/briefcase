import React,{Fragment} from 'react'
//img 
// import {backgroundLandscape} from "./../../../../Constants/images.js"
import {backgroundWelcome} from "./../../../../Constants/images.js"
import {logoVilo} from "./../../../../Constants/images.js"
//components
import HabilitiesBox from './../habilitiesBox'
import StudiesBox from './../studiesBox'
import ContactBox from './../contactBox'
import ExperiencesBox from './../experiencesBox/'
// materials
import {
	Card,
	makeStyles,
	CardContent,
	Typography,
	Grid,
	Avatar,
	Paper,
	Grow
} from '@material-ui/core';
//styles
const useStyles = makeStyles(theme => ({
  avatarLarge: {
  width: theme.spacing(20),
  height: theme.spacing(20),
  },
  avatar:{
  	borderRadius: '100%',
	display: 'inline-block',
	margin: '0 0 5em 0',
	padding: '1em',
	border: 'solid 1px rgba(255, 255, 255, 0.25)',
	backgroundColor: 'rgba(255, 255, 255, 0.4)',
	marginTop : '30px'
  },
  welcome:{
	backgroundColor: 'rgba(255, 255, 255, 0.9)',
	width: 550,
  },
  root: {
  	flexGrow: 1,
    width: 900,
    backgroundImage: `url(${backgroundWelcome})`,
    backgroundSize: 'cover',
    backgroundPosition : 'center',
    [theme.breakpoints.down('sm')]: {
      width: 700,
    },
	[theme.breakpoints.down('xs')]: {
	    width: 400,
	}
  },
  margin:{
  	marginLeft : '0.5px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));
const DashboardBox = () => {
	//const
	const classes = useStyles();
	return (
		<Fragment>
			<Grow
	          in={true}
	          style={{ transformOrigin: '0 0 0' }}
	          {...(true ? { timeout: 1000 } : {})}
	        >
	        <Grid
			  container
			  direction="column"
			  justify="center"
			  alignItems="center"
			>
			<Paper className={classes.root}>
					<Grid
					  container
					  direction="row-reverse"
					  justify="space-around"
					  alignItems="center"
					>
						<Card className={classes.welcome} variant="outline">
							<CardContent>
								<Typography variant="h5" component="h1">
								¡Bienvenido!
								</Typography>
								<Typography className={classes.pos} color="textSecondary">
								Perfil Personal
								</Typography>
								<Typography variant="body2" component="p">
								Soy Gabriel Viloria, titular de la cédula de identidad: V-27.167.028,
								nací el 12/08/1998 en un pequeño pueblo del estado Aragua-Venezuela,
								soy ingeniero en sistemas egresado de la Univerdad 
								Experimental Rómulo Gallegos,
								en la cual me fui desarrollando adquiriendo otros conocimientos en el ámbito tecnológico, donde aprendí a desarrollar, volviéndome así un programador, en  lenguajes de programación tales como : 
								<ul>
									<li>javascript</li>
									<li>php</li>
									<li>python</li>
									<li>c#</li>
								</ul>							
								Obteniendo así conocimientos avanzados en    algunas de las más populares plantillas de trabajo (frameworks), de  lenguajes de programación; php, c# y JavaScript como son:
								<ul>
									<li>vue</li>
									<li>laravel</li>
									<li>react</li>
									<li>asp .net core 3</li>
								</ul>
								Manejo básico de base de datos:
								<ul>
									<li>MySQL</li>
									<li>MsSQL</li>
								</ul>
								</Typography>
							</CardContent>
						</Card>
						<span className={classes.avatar}>
				            <Avatar 
				              className={classes.avatarLarge}
				              alt="Remy Sharp"
				               src={logoVilo} />
						</span>
					</Grid>
				</Paper>
		  		<HabilitiesBox></HabilitiesBox>
		  		<ExperiencesBox></ExperiencesBox>
		  		<StudiesBox></StudiesBox>
		  		<ContactBox></ContactBox>
			</Grid>
		  </Grow>
		</Fragment>
	);
}
export default DashboardBox;