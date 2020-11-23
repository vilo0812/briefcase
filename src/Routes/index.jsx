import React,{Fragment} from 'react'
import {
 BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Briefcase from './../Components/views/Briefcase'
import ProjectsBox from './../Components/base/briefcase/projectsBox'
import DashboardBox from './../Components/base/briefcase/dashboardBox'
import HabilitiesBox from './../Components/base/briefcase/habilitiesBox'
import studiesBox from './../Components/base/briefcase/studiesBox'
import ExperiencesBox from './../Components/base/briefcase/experiencesBox'
import CertificatesBox from './../Components/base/briefcase/certificatesBox'
import ContactBox from './../Components/base/briefcase/contactBox'
import Navbar from './../Components/core/Navbar'
import Footer from './../Components/core/Footer'
const Routes= () => {
	return (
	<Fragment>
		<Router>
			<Navbar/>
				<Switch>
					<Briefcase>
				        <Route path="/proyectos" component={ProjectsBox} exact/>
				        <Route path="/contacto" component={ContactBox} exact/>
				        <Route path="/certificados" component={CertificatesBox} exact/>
				        <Route path="/experiencias" component={ExperiencesBox} exact/>
				        <Route path="/estudios" component={studiesBox} exact/>
				        <Route path="/habilidades" component={HabilitiesBox} exact/>
				        <Route path="/" component={DashboardBox} exact/>
			    	</Briefcase>
			    </Switch>
		   <Footer/>
		</Router>
	</Fragment>
	);
}

export default Routes;