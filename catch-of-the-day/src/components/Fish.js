import React from 'react';
import {formatPrice} from '../helpers';
class Fish extends React.Component{
	render(){
		
		const {details, index} = this.props;
		const isAvailable = details.status =='available';;
		const buttonText=isAvailable ? 'Add to Order' : 'Sold Out!';
		return(
		<li className="menu-fish">
			<img src={details.image} alt={details.name} />
			<h3 className= "fish-name">
			{details.name}
			<span className="price">{details.price}</span>
			</h3>
		<p>{details.desc}</p>
		<button onClick={() => this.props.addtoOrder(index)}
		disabled={!isAvailable}>{buttonText}</button>
		</li>
		)
	}
}
export default Fish;