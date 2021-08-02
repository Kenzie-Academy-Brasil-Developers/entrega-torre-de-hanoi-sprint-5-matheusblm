// const buttonReset = document.getElementById("buttonReset") 
// button.addEventListener("click", function () {
// 	window.location.reload(true)
//       });

function creatTower(number){
	let board = document.getElementById("board")
	let newTower = document.createElement("div")
	newTower.classList.add("tower" + number)
	board.appendChild(newTower)
}

