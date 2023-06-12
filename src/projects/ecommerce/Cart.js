
import React, { useContext } from 'react'

import { eCommerceContext } from './Index';

function Cart() {

	const {trendingProducts} = useContext(eCommerceContext);	
	var store = localStorage.getItem("products");
	console.log("jlhgklgfhk;jhgfh");
	
	var storeConvert = JSON.parse(store);	
	console.log(storeConvert); 

	return (
		<>
			<div className='container-fluid pt-4'>
				<div className='row'>
					{
						storeConvert.map((value, key) =>
						{
							return (
								<>

									<div className='col-6 p-4'>
										<div className='image' style={{backgroundImage:"url("+trendingProducts[value]+")"}}>
											<button className='addToCartBtn' >  </button>
										</div>
									</div>
									
									<hr></hr>
									
								</>
							)
						})
					}
				</div>
			</div>
		</>
	)
}

export default Cart