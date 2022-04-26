import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
		<Router>
		<Header />
		<Routes>
				{/*<Route path="/h" element={<Header />} />*/}
				<Route path="/" element={<App/>} />
				{/*<Route path="/f" element={<Footer />} />*/}
		</Routes>
		<Footer />
	</Router>
);

// const routing = (
// 	<Router>
// 		<Routes>
// 			{/*<Header />*/}
//
// 				<Route path="/" element={<Header />} />
// 				<Route path="/" element={<App/>} />
// 				<Route path="/" element={<Footer />} />
//
// 			{/*<Footer />*/}
// 		</Routes>
// 	</Router>
//
// );

// ReactDOM.render(routing, document.getElementById('root'));

reportWebVitals();