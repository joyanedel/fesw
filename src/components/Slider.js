import MultiRangeSlider from "multi-range-slider-react";
import './styles/MultiRangeSlider.css';
import React from 'react';


function Slider(props) {
	const handleInput = (e) => {
		props.set_minValue(e.minValue);
		props.set_maxValue(e.maxValue);
	};

	return (
		<div className="Slider" style={{width:"20rem", paddingLeft: "1rem",paddingRight: "1rem"}} > 
			<label htmlFor="standard-select">Año</label>
			<MultiRangeSlider
				min={props.min}
				max={props.max}
				step={1}
				ruler={false}
				label={true}
				preventWheel={false}
				minValue={props.minValue}
				maxValue={props.maxValue}
				onInput={(e) => {
					handleInput(e);
				}}
			/>
		</div>
		);
}

export default Slider;
