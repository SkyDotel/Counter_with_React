import propTypes from "prop-types";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";

//Counter that increases in 1 second increments
function Counter(props) {
	return (
		<div class="bigCounter">
			<div>
				<i class="far fa-clock"></i>
			</div>
			<div class="foursPlace">{props.foursPlace % 10}</div>
			<div class="threesPlace">{props.threesPlace % 10}</div>
			<div class="twosPlace">{props.twosPlace % 10}</div>
			<div class="firstPlace">{props.firstPlace % 10}</div>
		</div>
	);
}

Counter.propTypes = {
	foursPlace: propTypes.number,
	threesPlace: propTypes.number,
	twosPlace: propTypes.number,
	firstPlace: propTypes.number,
};

let counter = 0;
setInterval(function () {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	console.log(four, three, two, one);

	counter++;
	ReactDOM.render(
		<Counter
			firstPlace={one}
			twosPlace={two}
			threesPlace={three}
			foursPlace={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
