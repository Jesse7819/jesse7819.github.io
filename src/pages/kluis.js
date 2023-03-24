import React, { useState } from 'react';
import { createSafe, getSafeForm, kluisInfo, getSafe, deleteSafe } from '../components/kluis';
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
			<Button variant="primary" onClick={() => {
				handleShow();
				getSafeForm("createSafeForm");


			}}>
				Kluis aanmaken
			</Button>
			<Button variant="info" onClick={() => {
				handleShow();
				getSafeForm("getSafeForm");
			}}>
				Kluis bekijken
			</Button>
			<Button variant="danger" onClick={() => {
				handleShow();
				getSafeForm("deleteSafeForm");
			}}>
				Kluis verwijderen
			</Button><hr></hr>


			<div className="kluisInfo"></div>
			<div className="kluisInfo2"></div>

			<hr></hr>


			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title className="safeTitle">Kluis aanmaken</Modal.Title>
				</Modal.Header>

				{/* Body for creating safe */}
				<Modal.Body className="createSafeBody">
					<Form className="createSafeBodyForm">
						<Form.Group className="mb-3" controlId="nameInput">
							<Form.Label>Naam:</Form.Label>
							<Form.Control
								type="text" required
								placeholder="John Doe"
								autoFocus
							/>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="goldbarsInput"
						>
							<Form.Label>Aantal goudstaven:</Form.Label>
							<Form.Control
								type="number"
								placeholder="10"
								required min="1"

							/>
						</Form.Group>
						<Form.Group className="mb-3 passwordInput" controlId="codeInput">
							<Form.Label>Code:</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								required
							/>
						</Form.Group>
					</Form>
				</Modal.Body>

				{/* Body for getting safe info */}
				<Modal.Body className="getSafeBody">
					<Form className="getSafeBodyForm">
						<Form.Group className="mb-3" controlId="idInput">
							<Form.Label>ID:</Form.Label>
							<Form.Control
								type="text" required
								placeholder="0000"
								autoFocus
							/>
						</Form.Group>
						<Form.Group className="mb-3 passwordInput" controlId="getCodeInput">
							<Form.Label>Code:</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								required
							/>
						</Form.Group>
					</Form>
				</Modal.Body>

				{/* Body for deleting safe */}
				<Modal.Body className="deleteSafeBody">
					<Form className="deleteSafeBodyForm">
						<Form.Group className="mb-3" controlId="idInput">
							<Form.Label>ID:</Form.Label>
							<Form.Control
								type="text" required
								placeholder="0000"
								autoFocus
							/>
						</Form.Group>
						<Form.Group className="mb-3 passwordInput" controlId="getCodeInput">
							<Form.Label>Code:</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								required
							/>
						</Form.Group>
					</Form>
				</Modal.Body>

				{/* Footer buttons for create form */}
				<Modal.Footer className="createSafeFormFooter">
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={() => {
						if (($("#naamInput").val() && $("#goudstavenInput").val() && $("#codeInput").val()) !== "" || null) {
							createSafe();
							handleClose();
						}
					}}>Create</Button>
				</Modal.Footer>

				{/* Footer buttons for get safe form */}
				<Modal.Footer className="getSafeFormFooter">
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={() => {
						if (($(".getSafeBodyForm #idInput").val() && $(".getSafeBodyForm #getCodeInput").val()) !== "" || null) {
							getSafe();
							handleClose();
						}
					}}>Bekijk</Button>
				</Modal.Footer>

				{/* Footer buttons for delete safe form */}
				<Modal.Footer className="deleteSafeFormFooter">
					<Button variant="secondary" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="primary" onClick={() => {
						if (($(".deleteSafeBodyForm #idInput").val() && $(".deleteSafeBodyForm #getCodeInput").val()) !== "" || null) {
							deleteSafe();
							handleClose();
						}
					}}>Delete</Button>
				</Modal.Footer>
			</Modal>

			<div className="getSafeFormDetails"><h2 className="safeNameTitle">Jesse</h2>
				<Form className="detailsForm">

					<Form.Group className="mb-3 depositInput" controlId="depositInput">
						<Form.Label>Deposit:</Form.Label><br></br>
						<Button variant="secondary" className="decreaseBtn">-</Button>
						<Form.Control
							type="number" required
							placeholder="0000"
							className="inputArrows"
						/>
						<Button variant="secondary" className="increaseBtn">+</Button>

					</Form.Group>

					<Form.Group className="mb-3 withdrawInput" controlId="withdrawInput">
						<Form.Label>Withdraw:</Form.Label><br></br>
						<Button variant="secondary" className="decreaseBtn">-</Button>
						<Form.Control
							type="number" required
							placeholder="0000"
							className="inputArrows"
						/>
						<Button variant="secondary" className="increaseBtn">+</Button>

					</Form.Group>

				</Form>
			</div>

		</div>
	);
};



