import React, { useState } from 'react';
import { Bank, getSafeForm, uitlegFunction } from '../components/kluis';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import $ from 'jquery';


const bank = new Bank();


export default function Kluis() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	let depositCount;
	let withdrawCount;

	function incrementCount(action) {
		depositCount = Number($("#depositInput").val());
		withdrawCount = Number($("#withdrawInput").val());

		if (action === "deposit") {
			if (depositCount !== null) {
				depositCount = depositCount + 1;
				$("#depositInput").val(depositCount);
			}

		} else if (action === "withdraw") {
			if (withdrawCount !== null) {
				withdrawCount = withdrawCount + 1;
				$("#withdrawInput").val(withdrawCount);

			}
		}
	}

	function decrementCount(action) {
		depositCount = Number($("#depositInput").val());
		withdrawCount = Number($("#withdrawInput").val());

		if (action === "deposit") {
			if (depositCount !== null) {
				if (depositCount <= 0) {
					depositCount = 0;
					$("#depositInput").val(depositCount);
				} else {
					depositCount = depositCount - 1;
					$("#depositInput").val(depositCount);
				}
			}

		} else if (action === "withdraw") {
			if (withdrawCount !== null) {
				if (withdrawCount <= 0) {
					withdrawCount = 0;
					$("#withdrawInput").val(withdrawCount);
				} else {
					withdrawCount = withdrawCount - 1;
					$("#withdrawInput").val(withdrawCount);
				}
			}
		}
	}

	return (

		<div>
			<br></br>
			<div className="kluisBtns">
				<Button className="kluisBtn" variant="primary" onClick={() => {
					uitlegFunction();
				}}>
					Uitleg
				</Button>
				<Button className="kluisBtn" variant="success" onClick={() => {
					handleShow();
					getSafeForm("createSafeForm");
				}}>
					Kluis aanmaken
				</Button>
				<Button className="kluisBtn" variant="info" onClick={() => {
					handleShow();
					getSafeForm("getSafeForm");
				}}>
					Kluis bekijken
				</Button>
				<Button className="kluisBtn" variant="danger" onClick={() => {
					handleShow();
					getSafeForm("deleteSafeForm");
				}}>
					Kluis verwijderen
				</Button><hr></hr>
			</div>

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
								placeholder="John"
								autoFocus
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="fullnameInput">
							<Form.Label>Volledige naam:</Form.Label>
							<Form.Control
								type="text" required
								placeholder="John Doe"

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
							<Form.Label>Naam:</Form.Label>
							<Form.Control
								type="text" required
								placeholder="John"
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
						if (($("#naamInput").val() && $("#fullnameInput").val() && $("#goudstavenInput").val() && $("#codeInput").val()) !== "" || null) {
							bank.createSafe($("#nameInput").val(), $("#fullnameInput").val(), $("#codeInput").val(), $("#goldbarsInput").val());
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
							bank.getSafe();
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
							bank.deleteSafe();
							handleClose();
						}
					}}>Delete</Button>
				</Modal.Footer>
			</Modal>

			<div className="getSafeFormArea">
				<div className="getSafeFormAreaWarning">
					<h2>Error: Kluis bestaat al. Kies een andere naam</h2>
				</div>
				<div className="getSafeFormDetails">
					<h2 className="safeNameTitle">x</h2>
					<h3 className="goudstavenInfo">Aantal goudstaven:</h3>
					<h3 className="safeGoldBars">0</h3>
					<Form className="detailsForm">

						<Form.Group className="mb-3 depositInput" controlId="depositInput">
							<Form.Label>Deposit:</Form.Label><br></br>
							<Button variant="secondary" className="decreaseBtn" onClick={() => {
								decrementCount("deposit");
							}}>-</Button>
							<Form.Control
								type="number" required
								placeholder="0000"
								className="inputArrows"
								value={depositCount}

							/>
							<Button variant="secondary" className="increaseBtn" onClick={() => {
								incrementCount("deposit");
							}}>+</Button><br></br>
							<Button variant="success" className="depositConfirm" onClick={() => {
								bank.setTotalBars("deposit");
							}}>Confirm</Button>

						</Form.Group>

						<Form.Group className="mb-3 withdrawInput" controlId="withdrawInput">
							<Form.Label>Withdraw:</Form.Label><br></br>
							<Button variant="secondary" className="decreaseBtn" onClick={() => {
								decrementCount("withdraw");
							}}>-</Button>
							<Form.Control
								type="number" required
								placeholder="0000"
								className="inputArrows"
								value={withdrawCount}

							/>
							<Button variant="secondary" className="increaseBtn" onClick={() => {
								incrementCount("withdraw");
							}}>+</Button><br></br>
							<Button variant="success" className="withdrawConfirm" onClick={() => {
								bank.setTotalBars("withdraw");
							}}>Confirm</Button>
						</Form.Group>
					</Form>

					<Button variant="secondary" className="changeCombiBtn" onClick={() => {
						//function
					}}>Finish</Button>

				</div>
			</div>
			<div className="dialog" id="dialog">
				lalala
			</div>

		</div>
	);
};



