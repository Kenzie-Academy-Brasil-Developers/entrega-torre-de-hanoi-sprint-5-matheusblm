const buttonReset = document.querySelector("#buttonReset");
let initialMain = document.querySelector("main").innerHTML; //colocar logo após criar as torres e discos
let firstdiscSelected = null;
let lastTower = document.querySelector(".tower3");
let movimentos = document.getElementById("contador");
let contador = 0

function creatTower(){
	let board = document.getElementById("board")
	let newTower1 = document.createElement("div")
	newTower1.classList.add("tower1", "tower")
	let newTower2 = document.createElement("div")
	newTower2.classList.add("tower2", "tower")
	let newTower3 = document.createElement("div")
	newTower3.classList.add("tower3", "tower")
	board.appendChild(newTower1)
	board.appendChild(newTower2)
	board.appendChild(newTower3)
}

function creatDisc(){
	let tower = document.getElementsByClassName("tower1")[0]
	let disc1 = document.createElement("div")
	disc1.classList.add("disc1", "disc")
	let disc2 = document.createElement("div")
	disc2.classList.add("disc2", "disc")
	let disc3 = document.createElement("div")
	disc3.classList.add("disc3", "disc")
	let disc4 = document.createElement("div")
	disc4.classList.add("disc4", "disc")
	tower.appendChild(disc1)
	tower.appendChild(disc2)
	tower.appendChild(disc3)
	tower.appendChild(disc4)
}

function checkMove(originDiv, targetDiv) {
	if(targetDiv.lastElementChild === null || originDiv.lastElementChild.clientWidth < targetDiv.lastElementChild.clientWidth) {
		return true;
	} 
	return false;
}  

function discMove(event) {		
	if (firstdiscSelected === null) {
		if(event.target.classList.contains("disc")){
			if (event.currentTarget.childElementCount !== 0 && event.target === event.currentTarget.lastElementChild) {
				event.target.classList.add("selected");
				firstdiscSelected = event.currentTarget;
			} else {
				return alertErro("Voce não pode mover esse disco!");
			}
		} else {
			alertErro("Selecione um disco!")
		}
	} else {
		if (checkMove(firstdiscSelected, event.currentTarget)) {
			let disc = firstdiscSelected.lastElementChild;
			event.currentTarget.appendChild(disc);
			contador++
			movCount()
			event.currentTarget.lastElementChild.classList.remove("selected");
		} else {
			alertErro("Não é possivel colocar o disco em cima de um disco menor!");
			firstdiscSelected.lastElementChild.classList.remove("selected");
			}
		firstdiscSelected = null;
	}
	checkWinner();
}


function resetTowers(){
	const board = document.querySelector("#board");
	board.innerHTML = "";
	let div = document.getElementById("torreDeHanoiReset")
	div.classList.remove("alertWin")
	contador = 0;
	firstdiscSelected = null;
	startGame();
}
    
buttonReset.addEventListener('click', resetTowers);
    function checkWinner(){
	if(targetDiv.childElementCount === 4){
		return alertWin()
	}
}

function alertWin(){
	let div = document.getElementById("torreDeHanoiReset")
	let novo = document.createElement("span")
	novo.classList.add("youWin")
	div.classList.add("alertWin")
	novo.append("Voce ganhou!")
	div.appendChild(novo)
	setTimeout(function(){
		novo.classList.add("hidden")
		}, 5000)
}

function alertErro(text){
	let div = document.getElementById("board")
	let novo = document.createElement("span")
	novo.classList.add("alert")
	novo.append(text)
	div.appendChild(novo)
	setTimeout(function(){
	novo.classList.add("hidden")
	}, 5000)
}

function checkWinner(){
	lastTower = document.querySelector(".tower3");
	if(lastTower.childElementCount === 4){
		return alertWin()
	}
}
function movCount(){
	let novo = document.createElement("span")
	let div = document.getElementById("divContador")
	movimentos.innerHTML = "Movimentos: " + contador
	novo.append(movimentos)
	div.append(novo)
}
//Começa a criar o jogo
function startGame() { 
	creatTower();
	creatDisc();
	let towersDiv = document.querySelectorAll(".tower");
	let discsDiv = document.querySelectorAll(".disc");
	for (let index = 0; index < towersDiv.length; index++) {
		towersDiv[index].addEventListener("click", discMove);
	}

}

startGame();

