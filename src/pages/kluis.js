import React, { useState } from 'react';
import { createKluis, getKluis, kluisInfo } from '../components/kluis';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import $ from 'jquery';


export default function Kluis() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (

		<div>
			<br></br>
			<Button variant="primary" onClick={handleShow}>
				Kluis aanmaken
			</Button><hr></hr>

			<div className="kluisInfo"></div>
			<div className="kluisInfo2"></div>
			<br></br>

			<label>Kluis ID:</label>
			<input type="text" className="kluisId"></input><br></br>
			<br></br>
			<button className="kluisArray" onClick={kluisInfo}>Bekijk kluis</button>
			<hr></hr>



			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Kluis aanmaken</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="naamInput">
							<Form.Label>Naam:</Form.Label>
							<Form.Control
								type="text" required
								placeholder="John Doe"
								autoFocus
							/>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="goudstavenInput"
						>
							<Form.Label>Aantal goudstaven:</Form.Label>
							<Form.Control
								type="number"
								placeholder="10"
								required min="1"
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="codeInput">
							<Form.Label>Code:</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								required
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={() => {
						if (($("#naamInput").val() && $("#goudstavenInput").val() && $("#codeInput").val()) !== "" || null) {
							createKluis();
							handleClose();
						}
					}}>Create</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};



