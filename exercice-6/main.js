let lancementOk = false;
let niveauDeCarburant = 17000;
let statutEquipage  = true;
let computerStatus = 'vert';

if (niveauDeCarburant >= 20000) {
	console.log('Niveau de carburant vérifié.');
	if (statutEquipage  && computerStatus === 'vert'){
		console.log('Equipage et ordinateur approuvés.');
		lancementOk = true;
	} else {
		console.log("AVERTISSEMENT : L'équipage ou l'ordinateur n'est pas prêt !");
	}
} else {
	console.log('AVERTISSEMENT : Carburant insuffisant !');
}



if (lancementOk) {
	console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
	console.log('Décollage!');
} else {
	console.log('Lancement annulé.');
}
