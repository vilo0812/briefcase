import React from 'react'
import {
	List,
	ListItem,
	ListItemText,
  makeStyles,
  Divider,
  Drawer,
} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import BookIcon from '@material-ui/icons/Book';
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
const SideBar = ({toogleSideBar,toggleDrawer}) => {
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
        <ListItem button className={classes.itemButton}>
          <HomeIcon/>
          <ListItemText className={classes.itemText}>
            Inicio
          </ListItemText>
        </ListItem>
        <Divider light={true}/>
        <ListItem button className={classes.itemButton}>
          <AccessibilityNewIcon/>
          <ListItemText className={classes.itemText}>
            Habilidades
          </ListItemText>
        </ListItem>
        <ListItem button className={classes.itemButton}>
          <BookIcon/>
          <ListItemText className={classes.itemText}>
            Estudios
          </ListItemText>
        </ListItem>
        <ListItem button className={classes.itemButton}>
          <AssignmentIndIcon/>
          <ListItemText className={classes.itemText}>
            Experiencias
          </ListItemText>
        </ListItem>
        <ListItem button className={classes.itemButton}>
          <LibraryBooksIcon/>
          <ListItemText className={classes.itemText}>
            Certificados
          </ListItemText>
        </ListItem>
        <ListItem button className={classes.itemButton}>
          <ContactPhoneIcon/>
          <ListItemText className={classes.itemText}>
            Contacto
          </ListItemText>
        </ListItem>
        <Divider></Divider>
      </List>
    </Drawer>
	  
	)
}
export default SideBar;