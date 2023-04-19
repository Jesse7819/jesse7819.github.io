import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.min.css';

let currentUser;

$("body").on("click", ".ui-widget-overlay", function () {
	$("#dialog").dialog("close");
});

export class Bank {
	constructor() {
		this._vaultArray = [];
	}

	createSafe(username, fullname, combination, goldbars) {

		if (username in this._vaultArray) {
			$(".getSafeFormDetails").hide();
			$(".getSafeFormArea").show();
			$(".getSafeFormAreaWarning h2").text("Error: Kluis bestaat al. Kies een andere naam");
			$(".getSafeFormAreaWarning").show();
		} else {
			this._vaultArray[username] = { "fullname": fullname, "combination": combination, "goldbars": goldbars }
			$(".getSafeFormDetails").hide();
			$(".getSafeFormAreaWarning h2").text("Kluis aangemaakt.");
			$(".getSafeFormAreaWarning").show();
			$(".getSafeFormArea").show();
		}
	}

	getSafe() {
		let getSafeName = $(".getSafeBodyForm #idInput").val();
		let combi = $("#getCodeInput").val();
		currentUser = getSafeName;

		if (getSafeName in this._vaultArray) {
			$(".getSafeFormAreaWarning").hide();
			if (combi === this._vaultArray[getSafeName].combination) {
				$(".safeNameTitle").text(this._vaultArray[getSafeName].fullname);
				$(".safeGoldBars").text(this._vaultArray[getSafeName].goldbars);
				$(".getSafeFormDetails").show();
				$(".getSafeFormArea").show();
			} else {
				$(".dialog").dialog({
					"title": "Error!",
				}).text("Combinatie incorrect.");
				$(".getSafeFormDetails").hide();
			}
		} else {
			$(".dialog").dialog({
				"title": "Error!",
				autoOpen: false,
				modal: true
			}).text("").append("Het ingevulde naam bestaat niet.<br></br> Zorg ervoor dat u uw naam goed heb ingevuld.<br></br> Het is hoofdletter gevoelig!");
			$(".getSafeFormDetails").hide();

		}
	}

	deleteSafe() {
		let deleteSafeName = $(".deleteSafeBodyForm #idInput").val();
		let deleteCombi = $(".deleteSafeBodyForm #getCodeInput").val();

		if (deleteSafeName !== "" || null) {

			if (deleteCombi === this._vaultArray[deleteSafeName].combination) {

				delete this._vaultArray[deleteSafeName];
				console.log(this._vaultArray);
				$(".getSafeFormAreaWarning").hide();

			}
		}
	}

	setTotalBars(action) {

		if (action === "deposit") {
			let total = Number($("#depositInput").val());
			if (total >= 0) {
				this._vaultArray[currentUser].goldbars = (Number(this._vaultArray[currentUser].goldbars) + Number(total));
				$(".safeGoldBars").text(this._vaultArray[currentUser].goldbars);
			} else {
				$(".dialog").dialog({
					"title": "Error!"
				}).text("U heeft niets ingevuld of een negatief getal invuld!");
			}
			$("#depositInput").val("");

		} else if (action === "withdraw") {
			let total = Number($("#withdrawInput").val());
			if (this._vaultArray[currentUser].goldbars >= total) {
				if (total > 0) {
					this._vaultArray[currentUser].goldbars = (Number(this._vaultArray[currentUser].goldbars) - Number(total));
					$(".safeGoldBars").text(this._vaultArray[currentUser].goldbars);

				} else {
					$(".dialog").dialog({
						"title": "Error!"
					}).text("U heeft niets ingevuld of een negatief getal invuld!");
				}
			} else {
				$(".dialog").dialog({
					"title": "Error!"
				}).text("Je kan niet meer goudstaven eruit halen dan dat je er hebt!");
			}
			$("#withdrawInput").val("");
		}
	}
}


export function getSafeForm(formType) {

	//Doesn't work if it's not in a timer.
	if (formType === "createSafeForm") {
		setTimeout(function () {
			$(".createSafeBody").show();
			$(".getSafeBody").hide();
			$(".deleteSafeBody").hide();
			$(".safeTitle").text("Safe aanmaken");
			$(".createSafeFormFooter").show();
			$(".getSafeFormFooter").hide();
			$(".deleteSafeFormFooter").hide();
		}, 0);

	}

	if (formType === "getSafeForm") {
		setTimeout(function () {
			$(".createSafeBody").hide();
			$(".getSafeBody").show();
			$(".deleteSafeBody").hide();
			$(".safeTitle").text("Safe bekijken");
			$(".createSafeFormFooter").hide();
			$(".getSafeFormFooter").show();
			$(".deleteSafeFormFooter").hide();
		}, 0);

	}

	if (formType === "deleteSafeForm") {
		setTimeout(function () {
			$(".createSafeBody").hide();
			$(".getSafeBody").hide();
			$(".deleteSafeBody").show();
			$(".safeTitle").text("Safe verwijderen");
			$(".createSafeFormFooter").hide();
			$(".getSafeFormFooter").hide();
			$(".deleteSafeFormFooter").show();
		}, 0);
	}

}

export function uitlegFunction() {
	$(".dialog").dialog({
		"title": "Uitleg"
	}).text("").append("Op deze pagina kan je kluizen aanmaken waarin je 'goudstaven' in kan stoppen..."
		+ " Hoe? Volg de volgende stappen. <br></br>"
		+ "Stap 1: Klik op 'Kluis aanmaken' en vul alle gegevens in en klik op create. (onthoud de naam die je bovenaan heb ingevuld!) <br></br>"
		+ "Stap 2: Klik op 'Kluis bekijken' en vul uw kluis naam + combinatie in. <br></br>"
		+ "Stap 3: Vervolgens vult u in hoeveel goudstaven u eruit wilt halen of erbij wilt leggen. <br></br>"
		+ "En dat was het! Hoe ik dit heb gemaakt kunt u vinden op github onder de folder: components file: 'kluis.js'. <br></br>"
		+ "Waarschuwing: Alle kluizen die u aanmaakt worden automatisch verwijderd als u deze website afsluit.");
}
