import React from "react";
import PropTypes from "prop-types";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			//your state properties here
			clicked: "red"
		};
	}
	render() {
		let newRedLightClass = "";
		let newYellowLightClass = "";
		let newGreenLightClass = "";

		if (this.state.clicked === "red") {
			newRedLightClass = "light-glow";
		} else if (this.state.clicked === "yellow") {
			newYellowLightClass = "light-glow";
		} else if (this.state.clicked === "green") {
			newGreenLightClass = "light-glow";
		}
		return (
			<div className="container">
				<div className="hanger" />

				<div className="lightBox">
					<div
						className={"red" + " " + newRedLightClass}
						onClick={() => this.setState({ clicked: "red" })}
					/>
					<div
						className={"yellow" + " " + newYellowLightClass}
						onClick={() => this.setState({ clicked: "yellow" })}
					/>
					<div
						className={"green" + " " + newGreenLightClass}
						onClick={() => this.setState({ clicked: "green" })}
					/>
				</div>
			</div>
		);
	}
}
