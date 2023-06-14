import React, { useContext } from 'react'
import './Style.css';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { eCommerceContext } from './Index';

function TrendingProducts()
{
	// Using CONTEXT (exporting variable and functions from index.js)
	const { cart, setCart, trendingProducts, cartBtn, cartBtnChange, storeVal, changeVal, msgVal, msgFunction} = useContext(eCommerceContext);

	// JS CODE_____________________
	function addToCart(e, productId)
	{
		// console.log(productId);
		if (!cart.includes(productId)) {
			cart.find(item => item.id === productId);
			setCart(cart => [...cart, productId]);
		}
		cartBtnChange([...cartBtn, productId])
		localStorage.setItem("products", cart);
	}

	function increment()
	{
		if (storeVal >= 10)
		{
			msgFunction("Can't add number greate than 10");
		}
		else
		{
			changeVal(storeVal + 1);
		}
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
													<p> {storeVal} </p>
													<button onClick={increment}>+</button>
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