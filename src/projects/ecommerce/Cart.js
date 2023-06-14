
import React, { useContext } from 'react'

import { eCommerceContext } from './Index';

function Cart() {

	const {trendingProducts} = useContext(eCommerceContext);	
	var store = localStorage.getItem("products");	
	var storeConvert = JSON.parse(store);	
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
										<div className='image' style={{backgroundImage:"url("+trendingProducts[value]+")"}}></div>
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