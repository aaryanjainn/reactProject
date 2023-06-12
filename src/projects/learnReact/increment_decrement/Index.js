import React from "react";
import { useState } from "react";

function Index() {
	const [storeVal, changeVal] = useState(0);
	const [msgVal, msgFunction] = useState("");

	function increment() {
		if (storeVal >= 10) {
			msgFunction("Can't add number greate than 10");
			changeVal(0);
		}
		else {
			changeVal(storeVal + 1);
		}
	}
	function decrement() {
		if (storeVal <= 0) {
			msgFunction("Can't add number lesser than 0");
			changeVal(0);
		}
		else {
			changeVal(storeVal - 1);
		}
	}

	return (
		<>
			<button onClick={increment}>+</button>
			<p> {storeVal} </p>
			<button onClick={decrement}>-</button>

			<p> {msgVal} </p>
		</>
	)
}

export default Index;
