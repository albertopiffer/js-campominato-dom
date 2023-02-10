const playButton = document.getElementById('playButton')
playButton.addEventListener('click', function () {

const grigliaX = parseInt(10)
const grigliaY = parseInt(10)

//console.log(grigliaX, grigliaY, grigliaX*grigliaY)

let elGrid = document.querySelector('.griglia') //elementGrid

elGrid.innerHTML = null //reset griglia

for (let i=0; i<grigliaX*grigliaY; i++) {
    elGrid.innerHTML += '<div class="cella" style="width: calc(100% / ' + grigliaX + ');" >' + parseInt(i+1) + '</div>'
}

const elCells = document.querySelectorAll('.cella') //elementCells

for (let i=0; i<elCells.length; i++) {
	const cell = elCells[i]

	cell.addEventListener('click', function () {
		console.log(i + 1)
		cell.style.backgroundColor = "rgba(102, 44, 174, 0.3)"
	})
}

generaBombe(grigliaX, grigliaY)

})




function generaBombe (x, y) {
	let array = parseInt
	array = []

	while (array.length<16) {
		let rand = parseInt(Math.floor(Math.random()*(x*y)))
		if (!isPresent(rand, array)){
			array[array.length] = rand
			//console.log(rand, array)
		}
	}
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
