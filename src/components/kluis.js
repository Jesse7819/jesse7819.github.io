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
	let kluisNaam = prompt("Wat is uw kluisnaam?");
	let aantalGoudstaven = prompt("Hoeveel goudstaven?");
	let combinatie = prompt("Wat is de combinatie code?");
	const kluis = new Kluis(kluisNaam, aantalGoudstaven, combinatie);

	$(".kluisInfo").text("Kluis aangemaakt: Naam: " + kluis.kluisNaam + " Aantal staven: " + kluis.aantalGoudstaven + " combinatie: " + kluis.combinatie);
	kluisArray.push(kluis);
}

export function getKluis() {
	$(".kluisInfo2").text("");
	for (let i = 0; i < kluisArray.length; i++) {
		$(".kluisInfo2").append(kluisArray[i].getAantalStaven());
	}
}


