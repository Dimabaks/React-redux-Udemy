import { useState } from "react";
import generateRandomNum from "../utils/generateRandomNum";

export default function RandomNumber(props) {
	const [randomNumber, setRandomNumber] = useState(
		generateRandomNum(props.maxNum),
	);
	const changeRandomNum = () => {
		setRandomNumber(generateRandomNum(props.maxNum));
	};

	return (
		<div>
			<h1>{randomNumber}</h1>
			<button onClick={changeRandomNum}>Generate new random number</button>
		</div>
	);
}
