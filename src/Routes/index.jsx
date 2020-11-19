import React,{Fragment} from 'react'
import {
 BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Briefcase from './../Components/views/Briefcase'
import DashboardBox from './../Components/base/briefcase/DashboardBox.jsx'
import HabilitiesBox from './../Components/base/briefcase/HabilitiesBox.jsx'
import studiesBox from './../Components/base/briefcase/StudiesBox.jsx'
import ExperiencesBox from './../Components/base/briefcase/ExperiencespBox.jsx'
import CertificatesBox from './../Components/base/briefcase/CertificatesBox.jsx'
import ContactBox from './../Components/base/briefcase/ContactBox.jsx'
import Navbar from './../Components/core/Navbar'
import Footer from './../Components/core/Footer'
const Routes= () => {
	return (
	<Fragment>
		<Router>
			<Navbar/>
				<Switch>
					<Briefcase>
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