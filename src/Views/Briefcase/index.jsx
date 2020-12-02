import React,{Fragment} from 'react';
import {
	makeStyles,
	Grid,
	Avatar,
	Box,
	Typography
} from '@material-ui/core';
//images
import {logoViloWeb,backgroundViloWeb} from './../../Constants/images'
//icons
import HomeIcon from '@material-ui/icons/Home';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
//react router
import {Link} from 'react-router-dom'
//styles
const useStyles = makeStyles((theme) => ({
	icon:{
	color:'inherit',
	borderRadius: '100%',
	padding: '0.2em 0.4em',
	border: 'solid 1px rgba(255, 255, 255, 0.25)',
	backgroundColor: 'rgba(255, 255, 255, 0.075)',
	cursor: 'pointer',
	'&:hover':{
		color:'#ffff',
		backgroundColor: 'rgba(255, 255, 255, 0.25)'
	}
	},	
  h1:{
    color : "#ffff",
    textAlign : 'center',
  },
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
	backgroundColor: 'rgba(255, 255, 255, 0.075)',
	marginTop : '30px'
  },
  backgroundAvatar:{
  	margin: 0,
    backgroundImage: `url(${backgroundViloWeb})`,
    backgroundSize: 'cover',
    backgroundPosition : 'center'
  }
}));
const Briefcase= ({history,children}) => {
//start useS 
const classes = useStyles();
//end uses
const scrolling = () =>{
	console.log('scroll')
}
	return (
	<Fragment>
		<Box mt={3} className={classes.backgroundAvatar}>
			<Grid 
	          container
			  direction="row"
			  justify="center"
			  alignItems="center"
			 > 
			 <span className={classes.avatar}>
	            <Avatar className={classes.avatarLarge} alt="Remy Sharp" src={logoViloWeb} />
			 </span>
	      	</Grid>
      	</Box>
      	<Box mx={10}>
				<Grid 
		          container
				  direction="row"
				  justify="center"
				  alignItems="center"
				 > 
				 <Typography className={classes.h1} variant="h4" gutterBottom>
				 	<i>
					"La única forma de <br/>
					hacer un gran trabajo,<br/>
					es amar lo que haces"<br/>
					</i>
					<Typography variant="h6" gutterBottom>
				 		--Steve Jobs--
				 	</Typography>
				 	<Box mt={4}>
					 	<Grid 
				          container
						  direction="row"
						  justify="center"
						  alignItems="center"
						 > 
						 <Box m={2}>
						 <Link to="/" className={classes.icon}>
					 		<HomeIcon/>
					 	</Link>
						 </Box>
						 <Box m={2}>
							 <Link to="/proyectos" className={classes.icon}>
						 		<WorkOutlineIcon/>
						 	</Link>
						 </Box>
						 <Box m={2}>
							 <Link to="/habilidades" className={classes.icon} onClick={() => scrolling()}>
						 		<SportsHandballIcon/>
						 	</Link>
						 </Box>
						 <Box m={2}>
						 <Link to="/estudios" className={classes.icon}>
					 		<CastForEducationIcon/>
					 	</Link>
						 </Box>
						 <Box m={2}>
						 <Link to="/experiencias" className={classes.icon}>
					 		<AssignmentIndIcon/>
					 	 </Link>
						 </Box>
						 <Box mx={2}>
						 <Link to="/certificados" className={classes.icon}>
					 		<LibraryBooksIcon/>
					 	 </Link>
						 </Box>
						 <Box m={2}>
						 <Link to="/contacto" className={classes.icon}>
					 		<ContactPhoneIcon/>
					 	 </Link>
						 </Box>
				 		</Grid>
				 	</Box>
				 	</Typography>
		      	</Grid>
	      	</Box>
	    <Box>
			 {children}
      	</Box>
      	
	</Fragment>
	);
}

export default Briefcase;