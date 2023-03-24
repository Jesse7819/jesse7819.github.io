import React from 'react';
import $ from 'jquery';

class HashTable {
	constructor() {
		this.table = new Array(1000000); //random grootte table.. 
		this.size = 0;
	}
	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}
		return hash % this.table.length;
	}

	set(key, value) {
		const index = this._hash(key);
		this.table[index] = [key, value];
		this.size++;
	}

	get(key) {
		const index = this._hash(key);
		return this.table[index];
	}

	remove(key) {
		const index = this._hash(key);

		if (this.table[index] && this.table[index].length) {
			this.table[index] = undefined;
			this.size--;
			return true;
		} else {
			return false;
		}
	}
}

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

	getTotalBars() {
		if (this.getCombi() === true) {
			return this._totalBars;
		}

	}

	setAantalStaven() {

	}

	getCombi() {
		let create_combi = $("#passwordInput").val();
		let get_combi = $("#getCodeInput").val();
		let deleteCombi = $(".deleteSafeBodyForm #getCodeInput").val();
		// if ((create_combi === this._combi) || (get_combi === this._combi)) {
		if ((create_combi || get_combi || deleteCombi) === this._combi) {
			return true;
		} else {
			$(".kluisInfo2").text("Combinatie is incorrect.");
			return false;
		}
	}
}

const kluisArray = new HashTable();

export function createSafe() {
	let safeName = $("#nameInput").val();
	let totalGoldbars = $("#goldbarsInput").val();
	let combination = $("#codeInput").val();
	let i = 0;

	if ((safeName && totalGoldbars && combination) !== "" || null) {
		const kluis = new Safe(safeName, totalGoldbars, combination);
		$(".kluisInfo").text("Kluis aangemaakt: Naam: " + kluis.safeName + " Aantal staven: " + kluis.totalGoldbars + " combination: " + kluis.combination);

		kluisArray.set(safeName, kluis);
		console.log(kluisArray);

	} else {
		console.log("Missing inputs");
	}
}

export function getSafe() {
	let safeName = $(".getSafeBodyForm #idInput").val();
	$(".kluisInfo2").text("");
	$(".kluisInfo2").append(kluisArray.get(safeName)[1].getTotalBars());

}

export function deleteSafe() {
	let safeName = $(".deleteSafeBodyForm #idInput").val();
	if (safeName !== "" || null) {
		if (kluisArray.get(safeName)[1].getCombi() === true) {
			console.log(kluisArray.get(safeName)[1].getCombi());
			kluisArray.remove(safeName);
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


