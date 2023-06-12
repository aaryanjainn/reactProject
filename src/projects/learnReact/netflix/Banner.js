import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Banner() {
	const [storeApiData, setApiData] = useState([]);

	// First
	// Creating function with name_____________
	function stopRepeat()
	{
		axios.get("https://api.themoviedb.org/3/discover/tv?api_key=c4e764b9bc20c607857c740abf0e9918&with_networks=213")
		.then((results)=>
		{
			setApiData(results.data.results);
		});
	}
	useEffect(() => stopRepeat(), []);
	// _______________________________________

	// Second
	// Creating anonymous function____________
	// and storing it in variable
	// const anonymousFunction = () => {
	// 	axios.get("https://api.themoviedb.org/3/discover/tv?api_key=c4e764b9bc20c607857c740abf0e9918&with_networks=213")
	// 	.then((results)=>
	// 	{
	// 		setApiData(results.data.results);
	// 	});
	// };
	// useEffect(() => anonymousFunction(), []);
	// _______________________________________

	// Third
	// Fetching data from api using fetch
	// useEffect
	// (() =>
	// 	{
	// 		async function fetchData() {
	// 			const see = await fetch("https://api.themoviedb.org/3/discover/tv?api_key=c4e764b9bc20c607857c740abf0e9918&with_networks=213");
	// 			const result = await see.json()
	// 			setApiData(result.results);
	// 		}
	// 		fetchData()
	// 	},[]
	// )
	// _______________________________________




	storeApiData.map((elem)=>{
	})
	return (
		<>
			<div style={{border:"2px solid red"}}>
			{
				storeApiData.map((elem,index)=>{
					return (
						<b key={index}>{elem.name}</b>	
					)
				})
			}
			</div>
		</>
	)
}

export default Banner