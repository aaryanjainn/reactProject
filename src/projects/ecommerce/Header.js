import React from 'react'
import './Style.css';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { eCommerceContext } from './Index';
import { useContext } from 'react';

function Header() {
	const {cart} = useContext(eCommerceContext);
 
	var store = localStorage.getItem("products");
	var storeConvert = JSON.parse(store);
	var productsInCart = storeConvert.length;
	
	return (
		<header>
			<div className='container-fluid p-2'>
				<div className='row' style={{borderBottom:"2px solid white"}}>
					<div className='col-6'>
						<img src="since7/since7logo.png" className='logoImg'></img>
					</div>
					<div className='col-6'>
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/shop">Shop</Link></li>
							<li><Link to="/about">About</Link></li>
							<li><Link to="/contact">Contact</Link></li>
							<li><Link to="/instagram">Instargram</Link></li>
							<li><Link to="/cart"><ShoppingCartIcon/></Link><div className='cartProductCount'>{cart.length}</div> </li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header