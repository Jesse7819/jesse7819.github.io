import React from 'react';
import $ from 'jquery';

class Kluis {
	constructor(kluisNaam, aantalGoudstaven, combinatie) {
		this.kluisNaam = kluisNaam;
		this._aantalStaven = aantalGoudstaven;
		this._combi = combinatie;
	}

	// bekijkAantalGoudstaven(combi)
	// legGoudstaven(staven, combi)
	// pakGoudStaven(staven, combi)
	// veranderCombinatie(nieuweCombi, oudeCombi)

	changeCombi(input_combi, nieuwe_combi) {

	}

	getAantalStaven() {
		if (this.getCombi() === true) {
			return this._aantalStaven;
		} else {
			$(".kluisInfo2").text("Flikker op");
		}

	}


	setAantalStaven() {

	}

	getCombi() {
		let input_combi = prompt("Voer uw code in");
		if (input_combi === this._combi) {
			return true;
		} else {
			return false;
		}
	}
}

const kluisArray = [];

export function createKluis() {
	let kluisNaam = $("#naamInput").val();
	let aantalGoudstaven = $("#goudstavenInput").val();
	let combinatie = $("#codeInput").val();

	if ((kluisNaam && aantalGoudstaven && combinatie) !== "" || null) {
		const kluis = new Kluis(kluisNaam, aantalGoudstaven, combinatie);
		$(".kluisInfo").text("Kluis aangemaakt: Naam: " + kluis.kluisNaam + " Aantal staven: " + kluis.aantalGoudstaven + " combinatie: " + kluis.combinatie);
		kluisArray.push(kluis);

	} else {
		console.log("Missing inputs");
	}
}

export function kluisInfo() {
	let id = $(".kluisId").val();
	getKluis(id);
}

export function getKluis(id) {
	$(".kluisInfo2").text("");
	$(".kluisInfo2").append(kluisArray[id].getAantalStaven());

}


