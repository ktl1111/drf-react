import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';

const routing = (
	<Router>
		<React.StrictMode>
			<Header />
			<Routes>
				<Route path="/" element={<App/>} />
			</Routes>
			<Footer />
		</React.StrictMode>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();