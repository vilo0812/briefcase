
import React,{Fragment} from 'react'
import rows from './../../../Constants/habilities.js'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { 
	Paper,
	makeStyles,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	Typography,
	TableBody,
	Grow
}from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    width: '100%',
    background : 'rgb(0,0,0,0.3)',
  },
  container: {
    maxHeight: 500,
  },
  title:{
  	color:'inherit',
  	textAlign : 'center'
  },
  rowTool:{
  	color:'#ffff'
  },
  row:{
  	color: '#66FF71'
  }
});
const columns = [
  { id: 'tool', label: 'Herramienta', minWidth: 100 },
  { id: 'low', label: 'basico', minWidth: 100 },
  { id: 'medium', label: 'intermedio', minWidth: 100 },
  { id: 'high', label: 'avanzado', minWidth: 100 },
  { id: 'expert', label: 'experto', minWidth: 100 },
];

const HabilitiesBox = () => {
const classes = useStyles();
	return (
		<Fragment>
		<Typography className={classes.title} variant="h4" gutterBottom>
		    Habilidades
		</Typography>
			<Grow
		          in={true}
		          style={{ transformOrigin: '0 0 0' }}
		          {...(true ? { timeout: 1000 } : {})}
		        >
			<Paper className={classes.root}>
				<TableContainer className={classes.container} >
				<Table stickyHeader aria-label="sticky table" >
					<TableHead>
			            <TableRow>
			              {columns.map((column) => (
			                <TableCell
			                  key={column.id}
			                  align={column.align}
			                  style={{ minWidth: column.minWidth }}
			                >
			                  {column.label}
			                </TableCell>
			              ))}
			            </TableRow>
			          </TableHead>
			          <TableBody>
			          {
			          	rows.map((item,index) =>{
			          		return(
			          		<TableRow  key={index} hover role="checkbox">
			                      <TableCell className={classes.rowTool}>
			                       	{item.tool}
			                      </TableCell>
			                      <TableCell className={classes.row}>
			                       	{item.low &&
			                       		<DoneOutlineIcon></DoneOutlineIcon>
			                       	}
			                      </TableCell>
			                      <TableCell className={classes.row}>
			                       	{item.medium &&
			                       		<DoneOutlineIcon></DoneOutlineIcon>
			                       	}
			                      </TableCell>
			                      <TableCell  className={classes.row}>
			                       	{item.high &&
			                       		<DoneOutlineIcon></DoneOutlineIcon>
			                       	}
			                      </TableCell>
			                      <TableCell className={classes.row}>
			                       	{item.expert &&
			                       		<DoneOutlineIcon></DoneOutlineIcon>
			                       	}
			                      </TableCell>
			                </TableRow>
			          		);
			          	})
			          }
			                
			          </TableBody>
				</Table>
				</TableContainer>
			</Paper>
			</Grow>
		</Fragment>
	);
}
export default HabilitiesBox;