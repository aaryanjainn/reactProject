import React, { useContext } from 'react'
import './Style.css';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { eCommerceContext } from './Index';






function TrendingProducts()
{
	// JS CODE_____________________
		const {cart,setCart,trendingProducts} = useContext(eCommerceContext);	
	
		function addToCart(e,productId)
		{
			var result = cart.find(item => item.id === productId);
			setCart(cart => [...cart, productId]);
		}


		var convert = JSON.stringify(cart)
		localStorage.setItem("products", convert);
	
	// View________________________
	return (

		<>
			<div className='container text-center'>
				<h2>
					Trending Products..
				</h2>

				<div className='container-fluid pt-4'>
					<div className='row'>
						{
							trendingProducts.map((value, keyP) =>
							{
								return(
									<>
										<div className='col-6 p-4'>
											<div className='image' style={{backgroundImage:"url("+value+")"}}>
												<button className='addToCartBtn' onClick={(e) => addToCart(e,keyP)}> <ShoppingCartCheckoutIcon/> </button>
											</div>
										</div>
									</>
								)
							})
						}
					</div>
				</div>
			</div>
		</>
		
	)
}

export default TrendingProducts