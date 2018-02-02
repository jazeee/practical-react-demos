import React from "react";
import * as api from "./api";
import {Button} from "reactstrap";

export class GoLinks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			links: [],
		};
		this.someFunction = this.someFunction.bind(this);
	}
	someFunction() {
		this.getContent();
	}
	componentDidMount = () => {
		this.getContent();
	}
	getContent = () => {
		api.getGoLinks().then( ({links}) => {
			this.setState({links});
		});
	}
	deleteGoLink = (name) => {
		api.deleteGoLink({name})
			.then(this.getContent);
	}
	render = () => {
		const {links} = this.state;
		return (
			<div>
				<h3>Go Links</h3>
				{links.map( (link, index) => {
					return (
						<div key={index}>
							Link &apos;{link.name}&apos;:
							<a
								href={link.url}
								target="_blank">url
							</a>
							<Button
								onClick={this.deleteGoLink.bind(this, link.name)}
							>Delete &apos;{link.name}&apos;
							</Button>
						</div>
					);
				})}
			</div>
		);
	}
}
//
// function updateStyle() {this.style({color: 'red'})}
// updateStyle() // this is global.
// updateStyle.bind({})// this is the object.
// buttons = $('.some-buttons').onClick(updateStyle)
