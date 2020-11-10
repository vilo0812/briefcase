import React,{Fragment} from 'react';
import {
	makeStyles,
	Grid,
	Avatar,
	Box,
	Typography
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import BookIcon from '@material-ui/icons/Book';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import {Link} from 'react-router-dom'
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
    fontWeight : 'bolder'
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
    backgroundImage: 'url("./images/tec.jpg")',
    backgroundSize: 'cover',
    backgroundPosition : 'center'
  }
}));
const Briefcase= ({history,children}) => {
//start useS 
const classes = useStyles();
//end uses
const scroll = () =>{
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
	            <Avatar className={classes.avatarLarge} alt="Remy Sharp" src="./images/vilo.jpg" />
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
					Ofrezco un trabajo honesto y de calidad para que tu  <br/>
					empresa o negocio alcance todos sus objetivos <br/>
					<Typography variant="h6" gutterBottom>
				 		Desde c#, php, javascript y python hasta laravel, vue y react
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
						 <Link to="/habilidades" className={classes.icon} onClick={() => scroll()}>
					 		<AccessibilityNewIcon/>
					 	</Link>
						 </Box>
						 <Box m={2}>
						 <Link to="/estudios" className={classes.icon}>
					 		<BookIcon/>
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
      		<Grid 
	          container
			  direction="row"
			  justify="center"
			  alignItems="center"
			 >
			 	<Box>
			 		{children}
			 	</Box>
			 </Grid>
      	</Box>
      	
	</Fragment>
	);
}

export default Briefcase;