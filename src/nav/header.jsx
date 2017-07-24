import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isCollapseOpen: false,
		};
	}
	toggleCollapse = () => {
		this.setState({isCollapseOpen: !this.state.isCollapseOpen});
	}
	render = () => {
		return (
			<Navbar color='primary' inverse toggleable>
				<NavbarBrand href='/'>Github Browser</NavbarBrand>
				<NavbarToggler right onClick={this.toggleCollapse} />
				<Collapse isOpen={this.state.isCollapseOpen} navbar>
					<Nav className='ml-auto' navbar>
						<NavItem>
							<NavLink href='/repos/'>Repos</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}
