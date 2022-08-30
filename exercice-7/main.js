(function main() {
	const DIVIDENDE = 18;
	const nombres = [2, 3, 4, 5, 6, 7, 8, 9];

	for (let i = 0; i < nombres.length; i++) {
		let diviseur = nombres[i];
		let estUnFacteur = false;

		if (DIVIDENDE % diviseur === 0) {
			estUnFacteur = true;
			console.log(DIVIDENDE % diviseur === 0)
		}

		if (estUnFacteur) {
			console.log(`${diviseur} + ' est un facteur de ' + ${DIVIDENDE} !`);
		}
	}
}()); // Main IIFE
