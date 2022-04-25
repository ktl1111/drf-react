import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from '../blogapi/src/serviceWorker';
import './index.css';
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Header from '../blogapi/src/components/Header';
import Footer from '../blogapi/src/components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const routing = (
	<Router>
		<Routes>
			<Header />

				<Route path="/" element={<App/>} />

			<Footer />
		</Routes>
	</Router>

);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();