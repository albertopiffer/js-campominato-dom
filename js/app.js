const playButton = document.getElementById('playButton')
playButton.addEventListener('click', function () {

const grigliaX = parseInt(10)
const grigliaY = parseInt(10)

//console.log(grigliaX, grigliaY, grigliaX*grigliaY)

let elGrid = document.querySelector('.griglia') //elementGrid

for (let i=0; i<grigliaX*grigliaY; i++) {
    elGrid.innerHTML += '<div class="cella" style="width: calc(100% / ' + grigliaX + ');" >' + parseInt(i+1) + '</div>'
}

const elCells = document.querySelectorAll('.cella') //elementCells

for (let i=0; i<elCells.length; i++) {
	const cell = elCells[i]
	console.log (cell)

	cell.addEventListener('click', function () {
		console.log(i + 1)
		cell.style.backgroundColor = "rgba(102, 44, 174, 0.3)"
	})
}

})
