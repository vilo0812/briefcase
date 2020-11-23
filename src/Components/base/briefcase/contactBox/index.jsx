import React, {Fragment} from 'react'
// materials
import {
	Button,
	Card,
	makeStyles,
	CardContent,
	Typography,
	Grid,
	Paper,
	Grow
} from '@material-ui/core';
//images
import {backgroundContact} from "./../../../../Constants/images.js"
//icons
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WorkIcon from '@material-ui/icons/Work';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
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
  contact:{
	backgroundColor: 'rgba(255, 255, 255, 0.8)',

  },
  root: {
  	flexGrow: 1,
    width: 900,
    backgroundImage: `url(${backgroundContact})`,
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
    color:'inherit',
  	textAlign : 'center'
  },
  pos: {
    marginBottom: 12,
  },
  center:{
  	textAlign : 'center'
  }
}));
const ContactBox = () => {
	//const
	const classes = useStyles();
	//view
	return (
		<Fragment>
		<Typography className={classes.title} variant="h4" gutterBottom>
		    Contacto
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
				<Paper className={classes.root}>
					<Card className={classes.contact} variant="outline">
						<CardContent>
						<Grid
						  container
						  direction="row"
						  justify="center"
						  alignItems="center"
						>
							<Grid item xs={12} sm={4}>
								<Typography variant="body1" component="p">
									<PhoneIcon></PhoneIcon>
									+58 414 901 71 84
								</Typography>
								<Typography variant="body1" component="p">
									<PhoneIcon></PhoneIcon>
									+58 412 432 81 74
								</Typography>
							</Grid>
							<Grid item xs={12} sm={4}>
								<Typography variant="body1" component="p">
									<EmailIcon></EmailIcon>
									gabriel.viloria0812@gmail.com
								</Typography>
								<Typography variant="body1" component="p">
									<LocationOnIcon></LocationOnIcon>
									Guárico, Venezuela
								</Typography>
							</Grid>
							<Grid item xs={12} sm={4}>
								<Typography variant="body1" component="p">
									<WorkIcon></WorkIcon>
									<Button href="https://www.workana.com/freelancer/6b4b37aadb352059be65ae12646a2f44?ref=user_dropdown" color="primary">perfil de workana</Button>
								</Typography>
								<Typography variant="body1" component="p">
									<GitHubIcon></GitHubIcon>
									<Button href="https://github.com/vilo0812" color="primary">perfil de github</Button>
								</Typography>
								<Typography variant="body1" component="p">
									<FacebookIcon></FacebookIcon>
									<Button href="https://www.facebook.com/vilo0812" color="primary">perfil de facebook</Button>
								</Typography>
							</Grid>
						</Grid>
						</CardContent>
					</Card>
				</Paper>
			  </Grow>
		  </Grid>
		</Fragment>
	);
}
export default ContactBox;