import React from 'react';
import $ from 'jquery';

class Safe {
	constructor(safeName, totalGoldbars, combination) {
		this.safeName = safeName;
		this._totalBars = totalGoldbars;
		this._combi = combination;
	}

	// bekijktotalGoldbars(combi)
	// legGoudstaven(staven, combi)
	// pakGoudStaven(staven, combi)
	// verandercombination(nieuweCombi, oudeCombi)

	changeCombi(currentCombi, nieuwe_combi) {

	}

	// setTotalBars(action) {
	// 	if (this.getCombi() === true) {
	// 		if (action === "deposit") {
	// 			let total = $("#depositInput").val();
	// 			this._totalBars += total;
	// 			console.log("done");
	// 			$(".safeGoldBars").text(this._totalBars);
	// 		}

	// 	}
	// }

}

export class Bank {
	constructor() {
		this._vaultArray = [];
	}

	createSafe(username, fullname, combination, goldbars) {

		if (username in this._vaultArray) {
			console.log("already exist");
			$(".getSafeFormDetails").hide();
			$(".getSafeFormArea").show();
			$(".getSafeFormAreaWarning h2").text("Error: Kluis bestaat al. Kies een andere naam");
			$(".getSafeFormAreaWarning").show();

		} else {
			console.log("created");
			this._vaultArray[username] = { "fullname": fullname, "combination": combination, "goldbars": goldbars }
			console.log(this._vaultArray);
			$(".getSafeFormDetails").hide();
			$(".getSafeFormAreaWarning h2").text("Kluis aangemaakt.");
			$(".getSafeFormAreaWarning").show();
			$(".getSafeFormArea").show();
		}

	}

	getSafe() {
		let getSafeName = $(".getSafeBodyForm #idInput").val();
		let combi = $("#getCodeInput").val();

		if (combi === this._vaultArray[getSafeName].combination) {
			$(".safeNameTitle").text(this._vaultArray[getSafeName].fullname);
			$(".safeGoldBars").text(this._vaultArray[getSafeName].goldbars);
			console.log("done");
			$(".getSafeFormDetails").show();
			$(".getSafeFormAreaWarning").hide();
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

}

export function changeTotalBars(action) {
	// let safeName = $(".safeNameTitle").val();
	// console.log(safeName);
	// console.log($(".safeNameTitle").val())
	// kluisArray.get(safeName)[1].setTotalBars(action);
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


