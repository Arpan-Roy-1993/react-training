// let's go!
import React from 'react';
import { getFunName} from '../helpers';
import PropTypes from 'prop-types'
import { BrowserRouter, Route,Switch ,Match, Miss,Link } from 'react-router-dom';

class StorePicker extends React.Component{
	constructor(){
		super();
		this.goToStore=this.goToStore.bind(this);
	}
	goToStore(event){

		event.preventDefault();
		// console.log('You change the URL');
		//first grab the text from the box
		const storeId = this.storeInput.value;
		// console.log(this.storeInput.value);
		// second we're going to transition the url to /store/storeid
		// browserHistory.push('/store/${storeId}');
		// this.router.transitionTo('/store/${storeId}');
		// console.log(this.propTypes);
	}
	
	render(){
		// return React.createElement('p',{className:'Testing'},'I love you');
		// return <p>Hello</p>
		return (
				
				<form className= "store-selector" onSubmit={(e) => this.goToStore(e)}>
				<h2> Please Enter A Store </h2>
				<input type="text" required placeholder="Store Name" defaultValue={
				getFunName()} ref={(input) => {this.storeInput= input}} />
				<Link to = {"/store/${storeId}"} >Visit Store-></Link>
				<button type="submit">Visit Store-></button>
				</form>
			)
		}
	}


 // StorePicker.contextTypes   = {
    // router: React.PropTypes.object,
  // };



export default StorePicker;
