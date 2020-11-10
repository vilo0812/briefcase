import React,{Fragment} from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	makeStyles,
  Button,
  Grid
} from '@material-ui/core';
import {
  Menu as MenuIcon
} from '@material-ui/icons';
import SideBar from './../Sidebar'
//start style
const useStyles = makeStyles((theme) => ({
  navbar:{
    background : "rgb(0,0,0,0.3)",
    fontSize: "1rem",
    fontWeight: 600,
    height: "inherit",
    lineHeight: "inherit",
    padding: "0 1.25rem",
    textDecoration: "none"
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
    color: "#9999",
    padding: "0 0.75rem",
    textDecoration: "none",
    borderColor : 'transparent',
    fontWeight : "bolder",
    '&:hover': {
      color: "#ffffff",
    borderColor :'transparent',
    },
  },
  ".button:before":{
    margin: "0 0.5rem 0 0"
  }
}));
//end styles
const Navbar= () => {
// start uses
const classes = useStyles();
const [toogleSideBar,setToogleSideBar] = React.useState(false)
// end uses
// start methods
const tool = () => {
  setToogleSideBar(!toogleSideBar)
}
const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setToogleSideBar(open)
  };
// end methods
	return (
  <Fragment>
	<AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            ViloWeb
          </Typography>
          <Button
          size="large"
          className={classes.button}
          startIcon={<MenuIcon />}
          onClick={() => tool()}
        >
          Menu
        </Button>
        </Toolbar>
    </AppBar>
    <Grid
    container
    direction="row-reverse"
    justify="flex-start"
    alignItems="stretch"
    >
      <SideBar toogleSideBar={toogleSideBar} toggleDrawer={toggleDrawer}/>
    </Grid>
</Fragment>
	);
}

export default Navbar;