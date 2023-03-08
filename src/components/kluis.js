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

	getAantalStaven(input_combi) {
		if (input_combi === this._combi) {
			return this._aantalStaven;
		} else {
			return false;
		}
	}

	setAantalStaven() {

	}

}

const kluisArray = [];

export function createKluis() {
	let kluisNaam = prompt("Wat is uw kluisnaam?");
	let goudStaven = prompt("Hoeveel goudstaven?");
	let combinatieCode = prompt("Wat is de combinatie code?");
	const kluis = new Kluis(kluisNaam, goudStaven, combinatieCode);

	$(".kluisInfo").append("Kluis aangemaakt: Naam: " + kluis.kluisNaam + " Aantal staven: " + kluis.aantalStaven + " combinatie: " + kluis.combi);
	kluisArray.push(kluis);
}

export function getKluis() {
	for (let i = 0; i < kluisArray.length; i++) {
		$(".kluisInfo2").append(kluisArray[i]);
	}
}
