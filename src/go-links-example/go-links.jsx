import React from "react";
import _ from "lodash";
import * as api from "./api";
import {
	Button,
	Card,
	CardBlock,
	CardLink,
	CardTitle,
	Col,
	Form,
	FormGroup,
	Input,
	Label,
	Row,
} from "reactstrap";

const emptyNewLink = {name: "", url: ""};

export class GoLinks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			goLinks: [],
			newLink: _.cloneDeep(emptyNewLink),
		};
	}
	componentDidMount = () => {
		this.getContent();
	}
	getContent = () => {
		return api.getGoLinks().then( (goLinks) => {
			this.setState({goLinks});
		});
	}
	updateNewLink = (event) => {
		event.preventDefault();
		const {target: {id, value}} = event;
		const {newLink} = this.state;
		newLink[id] = value;
		this.setState({newLink});
	}
	onCreateNewLink = (event) => {
		event.preventDefault();
		api.postGoLink(this.state.newLink).then( () => {
			this.setState({newLink: _.cloneDeep(emptyNewLink)}, this.getContent);
		});
	}
	deleteGoLink = (name) => {
		api.deleteGoLink(name).then(this.getContent);
	}
	render = () => {
		const {goLinks, newLink} = this.state;
		return (
			<div>
				<Form
					inline
					onSubmit={this.onCreateNewLink}>
					<FormGroup>
						<Label for="name">Name</Label>
						<Input
							type="text"
							name="name"
							id="name"
							placeholder="Short Name"
							value={newLink.name}
							onChange={this.updateNewLink}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="url">URL</Label>
						<Input
							type="text"
							name="url"
							id="url"
							placeholder="URL"
							value={newLink.url}
							onChange={this.updateNewLink}
						/>
					</FormGroup>
					<Button type="submit">Add New URL</Button>
				</Form>
				<Row>
					{goLinks.map( ({name, url}, index) => (
						<Col key={index}>
							<Card>
								<CardBlock>
									<CardTitle>{name}</CardTitle>
								</CardBlock>
								<CardBlock>
									<CardLink
										href={url}
										target="_blank">Open {name}
									</CardLink>
									<Button
										onClick={this.deleteGoLink.bind(this, name)}
									>
										Delete {name}
									</Button>
								</CardBlock>
							</Card>
						</Col>
					))}
				</Row>
			</div>
		);
	}
}
