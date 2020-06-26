// let's go!
import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import base from '../base';
import sampleFishes from '../sample-fishes';
class App extends React.Component{
	constructor(){
	super();
	this.addFish= this.addFish.bind(this);
	this.updateFish= this.updateFish.bind(this);
	this.loadSamples=this.loadSamples.bind(this);
	this.addFish= this.addFish.bind(this);
	this.removeFish=this.removeFish.bind(this);
	this.removeFromOrder= this.removeFromOrder.bind(this);
	this.state= {
		fishes:{},
		order: {},

		};


	this.addtoOrder=this.addtoOrder.bind(this);
	}
	// componentWillMount(){
	// 	this.ref= base.syncState(`${this.props.params.storeId}/fishes`
	// 		,{
	// 			context: this,
	// 			state: 'fishes'
	// 		});
	// }
	// componentWillMount(){
	// 	this.ref=base.syncState(`/`)

	// }

	// componentsWillUnmount(){
	// 	base.removeBinding(this.ref);
	// }
	// componentWillUpdate(nextProps,nextState){
	// 	console.log('Something Changed');
	// 	console.log({nextProps,nextState});
	// 	localStorage.setItem(`order-${this.props.params.storeId}`)
	// }


	addFish(fish){
		//update our state
		const fishes={...this.state.fishes};
		// add in our new fish
		const timestamp= Date.now();
		fishes['fish-${timestamp}']= fish;
		//set state
		this.setState({ fishes})
	}

	updateFish(key,updatedFish){
		const fishes = {...this.state.fishes};
		fishes[key]= updatedFish
		this.setState({fishes });
	}

	removeFish(key){
		const fishes ={...this.state.fishes};
		// fishes[key]= null;
		// this.setState({ fishes});
		delete fishes[key];
		this.setState({fishes})
	}

	loadSamples(){
		this.setState({
			fishes: sampleFishes
		})
	}


	addtoOrder(key){
		//take a copy of our state
		const order= {...this.state.order};
		//update or add the new number of fish ordered
		order[key] = order[key]+1 || 1;
		//update our state
		this.setState({order});

	}
	removeFromOrder(key){
		const order= {...this.state.order};
		delete order[key];
		this.setState({order});
	}
	render()
	{
		// console.log(this.state.fishes);
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood market"/>
					<ul className="list-of-fishes">
					{
						Object
						.keys(this.state.fishes)
						.map(key => <Fish key={key} index ={key} details={this.state.fishes[key]}
						addtoOrder={this.addtoOrder}/>)
						
					}
					</ul>
				</div>
				<Order 
					fishes= {this.state.fishes} 
					order = {this.state.order} 
					params ={this.props.params}
					removeFromOrder={this.removeFromOrder}
					/>
				<Inventory 
					addFish={this.addFish} 
					loadSamples={this.loadSamples} 
					fishes={this.state.fishes}
					updateFish={this.updateFish}
					removeFish={this.removeFish}
					/>

			</div>
		)		
			
	}
}
// App.propTypes= {
	// params: React.PropTypes.object.isRequired
// }
export default App; 