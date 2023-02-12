const playButton = document.getElementById('playButton')
playButton.addEventListener('click', main)

function main () {

	const grigliaX = parseInt(10)
	const grigliaY = parseInt(10)
	
	//console.log(grigliaX, grigliaY, grigliaX*grigliaY)
	
	let container = document.querySelector('.container') //elementGrid
	let elGrid = document.querySelector('.griglia') //elementGrid
	
	elGrid.innerHTML = null //reset griglia
	
	for (let i=0; i<grigliaX*grigliaY; i++) {
		elGrid.innerHTML += '<div class="cella" style="width: calc(100% / ' + grigliaX + ');" >' + parseInt(i+1) + '</div>'
	}
	
	const elCells = document.querySelectorAll('.cella') //elementCells
	
	const posBombe = generaBombe(grigliaX, grigliaY, 16)
	console.log(posBombe)
	
	let punteggio = 0
	
	let giaPremuto = []	//evita che punteggio incrementi se si preme ancora stessa cella
	
	for (let i=0; i<elCells.length ; i++) {	
	
		elCells[i].addEventListener('click', function () {
			punteggio = CellsEL(i, elCells, posBombe, giaPremuto, punteggio, grigliaX, grigliaY, elGrid)
		})
	}	
}


function CellsEL(i, elCells, posBombe, giaPremuto, punteggio, grigliaX, grigliaY, elGrid) {
	if (!isPresent(i, posBombe)){
		if (!isPresent(i, giaPremuto)) {
			elCells[i].style.backgroundColor = "rgba(0, 0, 255, 0.5)"
			giaPremuto.push (i)
			//console.log (giaPremuto)
			punteggio++
			if (punteggio == grigliaX*grigliaY-16) {
				sendAlert(true, punteggio)
			}
		}
	}
	else {
		elCells[i].style.backgroundColor = "rgba(255, 0, 0, 0.7)"
		console.log('punteggio: ', punteggio)

		removeEL(posBombe, giaPremuto, punteggio, grigliaX, grigliaY, elGrid)

		sendAlert(false, punteggio)
	}
	return punteggio
}

function removeEL(pB, gP, p, X, Y, grid) {
	
	grid.innerHTML = null //reset griglia
	
	//console.log (gP)
	//console.log (pB)

	for (let i=0; i<X*Y; i++) {
		grid.innerHTML += '<div class="cella" style="width: calc(100% / ' + X + ');" >' + parseInt(i+1) + '</div>'
	}

	const cells = document.querySelectorAll('.cella')

	for (let i=0; i<X*Y; i++) {

		if (isPresent(i, gP)) {
			cells[i].style.backgroundColor = "rgba(0, 0, 255, 0.5)"
		}
		if (isPresent(i, pB)) {
			cells[i].style.backgroundColor = "rgba(255, 0, 0, 0.7)"
		}
	}
}

function generaBombe (x, y, nB) {
	let array = parseInt
	array = []

	while (array.length<nB) {
		let rand = parseInt(Math.floor(Math.random()*(x*y)))
		if (!isPresent(rand, array)){
			array[array.length] = rand
			//console.log(rand, array)
		}
	}
	return array
}

function isPresent (a, b) {
	let check = 0
	for(let i=0; i<b.length; i++) {
		if (a == b[i]) {
			check = 1
		}
	}
	return (check == 1)
}

function sendAlert(TF, p) {
	
	if(TF == false) {
		alert('HAI PERSO!! PUNTEGGIO: ' + p)
	}
	else {
		alert('HAI VINTO!!')
	}
}
