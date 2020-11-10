import React from 'react'
import {
	Box,
	Grid,
	Typography,
	Divider,
	Grow
} from '@material-ui/core';
const Footer = () => {
	return (
		<Box mt={3}>
			<Grid 
	          container
			  direction="row"
			  justify="center"
			  alignItems="center"
			 > 
			 <Divider/>
			  <Grow
		          in={true}
		          style={{ transformOrigin: '0 0 0' }}
		          {...(true ? { timeout: 1000 } : {})}
		        >
			  <Typography variant="overline" gutterBottom>
					© Gabriel Viloria. Todos los derechos reservados.
				</Typography>
	      	</Grow>
	      </Grid>
      	</Box>
	);
}
export default Footer;