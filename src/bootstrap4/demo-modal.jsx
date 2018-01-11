import React from "react";
import {
	Button,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
} from "reactstrap";

export const DemoModal = (props) => {
	return (
		<Modal
			isOpen={props.isOpen}
			toggle={props.toggleModal}
		>
			<ModalHeader toggle={props.toggleModal}>
				{props.title}
			</ModalHeader>
			<ModalBody>
				{props.body}
			</ModalBody>
			<ModalFooter>
				<Button
					color="primary"
					onClick={props.toggleModal}
				>
					Close
				</Button>
			</ModalFooter>
		</Modal>
	);
};
