import React, { useEffect, useState } from "react";
import axios from "axios";

function Index() {
	const [breedList, setBreedList] = useState([]);
	const [getType, setType] = useState([]);


	useEffect(() => {
		axios.get("https://dog.ceo/api/breeds/list/all").then((result) => {
			let data = result.data.message;
			for (let x in data) {
				if (data[x].length > 0) {
					let see = { [x]: data[x] };
					setBreedList(breedList => [...breedList, see]);
				}
			}
		});
	}, []);

	function getTypesFunc(e)
	{
		let userSelectType = e.target.value;
		breedList.map((breed) =>
		{
			if (Object.keys(breed)[0] === userSelectType)
			{
				setType(Object.values(breed))
			}
		})
	}

	return (
		<div style={{ borderBottom: "dotted", padding: "20px" }}>
			<select onChange={getTypesFunc} name={"dogList"}>
				{
					breedList.map((breed) =>
					{
						let parent = Object.keys(breed)[0];
						return(
							<option value={parent} key={parent}>{parent}</option>
						)		
					})
				}
			</select>
			<select>
				<option value={0} key={0} selected disabled hidden>Please select Do Breed first</option>
				{
					getType.length > 0 ? 
					(getType[0].map((type) =>
					{
						return(							
							<option value={type} key={type}>{type}</option>
						)		
					})): ""
				}
			</select>
		</div>
	)
}

export default Index;