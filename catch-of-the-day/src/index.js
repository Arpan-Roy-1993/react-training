// let's go!
import React from 'react';
import {render} from 'react-dom';
import ReactDom from 'react-dom';
import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
// import Switch from 'react-router';
import NotFound from './components/NotFound';
// render(<App/>,document.querySelector('#main'));
const Root =() => {
	return (
		<BrowserRouter>
		<div>
		<Route exact pattern="/" component={StorePicker} />
		<Route pattern="/store/:storeId" component={App} />
		<Switch component={NotFound} />
		</div>
		</BrowserRouter>
	)
}
render(<Root/>,document.querySelector('#main'));
