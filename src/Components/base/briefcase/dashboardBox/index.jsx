import React,{Fragment} from 'react'
//img 
import {backgroundLandscape} from "./../../../../Constants/images.js"
import {logoVilo} from "./../../../../Constants/images.js"
//habilidades
import HabilitiesBox from './../habilitiesBox'
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
	backgroundColor: 'rgba(255, 255, 255, 0.8)',
	width: 550,
	[theme.breakpoints.down('xs')]: {
	    width : '100%'
	}
  },
  root: {
  	flexGrow: 1,
    width: 900,
    backgroundImage: `url(${backgroundLandscape})`,
    backgroundSize: 'cover',
    backgroundPosition : 'center',
    [theme.breakpoints.down('sm')]: {
      width: 550,
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
							Soy Gabriel Viloria un ingeniero en sistemas,
							mi número de cédula es: V-27.167.028,
							nacido en 12/08/1998,
							de edad 22 años,
							tengo una gran pasión por el desarrollo por ello manejo múltiples áreas de conocimiento
							en el área del desarrollo, 
							tales como:
							<ul>
								<li>html</li>
								<li>css</li>
								<li>javascript</li>
								<li>php</li>
								<li>python</li>
								<li>c#</li>
							</ul>							
							y conocimientos en algunos de los más
							 populares  plantillas de trabajo
							  (frameworks), de los lenguajes de
							   programación de php, c# y javascript tales como:
							<ul>
								<li>vue</li>
								<li>laravel</li>
								<li>react</li>
								<li>asp .net core 3</li>
							</ul>
							Manejo básico de base de datos:
							<ul>
								<li>MySQL</li>
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
		  </Grow>
		  <HabilitiesBox></HabilitiesBox>
		</Fragment>
	);
}
export default DashboardBox;