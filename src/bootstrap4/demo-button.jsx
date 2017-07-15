import React from 'react';
import { Button } from 'reactstrap';

export const DemoButton = ({onClick, text}) => (
	<Button
		color='danger'
		onClick={onClick}
	>
		{text}
	</Button>
);
