import React, { useContext, useState } from 'react'
import './Style.css';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { eCommerceContext } from './Index';

function TrendingProducts()
{
	// Using CONTEXT (exporting variable and functions from index.js)
	const { cart, setCart, trendingProducts, cartBtn, cartBtnChange, storeVal, changeVal, msgVal, msgFunction} = useContext(eCommerceContext);
	const[showQuantity,setQuantity] = useState("");
	// JS CODE_____________________
	function addToCart(e, productId)
	{

		if (!cart.includes(productId))
		{
			var productArr = {
						productId : productId,
						quantity: 0
					}
			setCart(cart => [...cart, productArr]);
		}

		
		cartBtnChange([...cartBtn, productId])
		
	}

	var convert = JSON.stringify(cart)
	localStorage.setItem("products", convert);


	function increment(element, productVal ,pCount)
	{
		cart.map((number)=>
		{   
			if(number.productId == productVal)
			{	
				let add = number.quantity +1;
				number.quantity = add;
			}
		});   
		var store = cart.filter((abc) => {return abc.productId === productVal})
		setQuantity(store[0].quantity);
	}
	

	function decrement()
	{
		if (storeVal <= 0) {
			msgFunction("Can't add number lesser than 0");
		}
		else {
			changeVal(storeVal - 1);
		}
	}

	// View________________________
	return(
		<>
			<div className='container text-center'>
				<h2>
					Trending Products..
				</h2>

				<div className='container-fluid pt-4'>
					<div className='row'>
						{
							trendingProducts.map((value, keyP) => {
								return (
									<>
										<div className='col-6 p-4' key={keyP}>
											<div className='image' style={{ backgroundImage: "url(" + value + ")" }}>

												{/* Add to Cart Button */}
												<button className={cartBtn.includes(keyP) ? "dNone" : "addToCartBtn"} onClick={(e) => addToCart(e, keyP)}> <ShoppingCartCheckoutIcon /> </button>

												{/* Increase quantity buttons */}
												<div className={cartBtn.includes(keyP) ? "increaseQuantityBox" : "dNone"}>
													<button onClick={decrement}>-</button>
													<p> { showQuantity} </p>
													<button onClick={(e) => increment(e,keyP,0)}>+</button>
												</div>
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