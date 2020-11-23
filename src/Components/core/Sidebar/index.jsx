import React from 'react'
//react router
import {Link} from 'react-router-dom'
import {
	List,
	ListItem,
	ListItemText,
  makeStyles,
  Divider,
  Drawer,
} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
//start useStyles
const drawerWidth = 240;  
	const useStyles = makeStyles(theme => ({
		list: {
	    color: '#ffff',
      background : 'rgb(0,0,0)',
      height : '100%'

	  },
    line:{
      color:'#ffff'
    },
    itemText:{
      marginLeft:"20px"
    },
    itemButton:{
      margin: theme.spacing(1),
    color: "#9999",
    padding: "0 0.75rem",
    textDecoration: "none",
    borderColor : 'transparent',
    fontWeight : "bolder",
    '&:hover': {
      color: "#ffffff",
    borderColor :'transparent',
    }
    },
	  nested: {
	    paddingLeft: theme.spacing(4),
	  },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
  drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
	}))
//end useStyles
const SideBar = ({toogleSideBar,toggleDrawer,tool}) => {
//start uses
	const classes = useStyles()
//start uses
  
	return (
    <Drawer 
    className={classes.drawer}
    open={toogleSideBar}
    onClose={toggleDrawer(toogleSideBar, false)}
    onOpen={toggleDrawer(toogleSideBar, true)}
    anchor="right"
    variant="temporary"
    >
        <List component="ul" className={classes.list}>
        <Link to="/">
          <ListItem button className={classes.itemButton} onClick={() => tool()}>
            <HomeIcon/>
            <ListItemText className={classes.itemText}>
              Inicio
            </ListItemText>
          </ListItem>
        </Link>
        <Divider light={true}/>
        <Link to="/proyectos">
          <ListItem button className={classes.itemButton}>
            <WorkOutlineIcon/>
            <ListItemText className={classes.itemText}>
              Proyectos
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/habilidades">
          <ListItem button className={classes.itemButton}>
              <SportsHandballIcon/>
              <ListItemText className={classes.itemText}>
                Habilidades
              </ListItemText>
          </ListItem>
        </Link>
        <Link to="/estudios">
          <ListItem button className={classes.itemButton}>
            <CastForEducationIcon/>
            <ListItemText className={classes.itemText}>
              Estudios
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/experiencias">
          <ListItem button className={classes.itemButton}>
            <AssignmentIndIcon/>
            <ListItemText className={classes.itemText}>
              Experiencias
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/certificados">
          <ListItem button className={classes.itemButton}>
            <LibraryBooksIcon/>
            <ListItemText className={classes.itemText}>
              Certificados
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/contacto">
          <ListItem button className={classes.itemButton}>
            <ContactPhoneIcon/>
            <ListItemText className={classes.itemText}>
              Contacto
            </ListItemText>
          </ListItem>
        </Link>
        <Divider></Divider>
      </List>
    </Drawer>
	  
	)
}
export default SideBar;