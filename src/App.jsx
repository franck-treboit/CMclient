import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import des composants

// Home, AdminTable, AdminForm, Media, NotFound
import Home from './views/Home';
import HomeTel from './views/HomeTel';
import AdminDemoTel from './views/AdminDemoTel';
import AdminTables from './views/AdminTables';
import AdminForms from './views/AdminForms';
import Medias from './views/Medias';
import NotFound from './views/NotFound';
import HeaderMain from './components/HeaderMain'

import io from 'socket.io-client';
import './App.css';
// const ioClient = io.connect('http://localhost:4000');

export default function App() {

	return (
		<React.Fragment>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/tel" component={HomeTel} />
				<Route path="/medias" component={Medias} />
				<Route path= '/admin/:endpoint(medias|medias)/:mode' component={AdminForms}/>
				<Route path= '/adminall/:endpoint(medias|medias)/' component={AdminTables}/>
				<Route exact path="/admin/demo" component={AdminDemoTel} />
				<Route path="*" component={NotFound} />
			</Switch>
				
		</React.Fragment>
	);
}
