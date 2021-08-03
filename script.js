let towersDiv = document.querySelectorAll(".tower");
const buttonReset = document.querySelector("#buttonReset");
let initialMain = document.querySelector("main").innerHTML; //colocar logo após criar as torres e discos
let firstdiscSelected = null;
let lastTower = document.querySelector(".tower3");

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
	console.log("move");
    if (firstdiscSelected === null) {
		if (event.currentTarget.childElementCount === 0) {
			console.log("erro sem filho");

	  		return "erro"; //criar aviso de erro
		} else {
			console.log("selecionado");
	  		event.currentTarget.classList.add("selected");
	  		firstdiscSelected = event.currentTarget;
		}
    } else {
		if (checkMove(firstdiscSelected, event.currentTarget)) {
	  		let disc = firstdiscSelected.lastElementChild;
	  		event.currentTarget.appendChild(disc);
			console.log("movimentado");
		} else {
			console.log("não pode movimentar");
	  		firstdiscSelected.classList.remove("selected");
		}
		firstdiscSelected = null;
    }
	checkWinner();
}
function resetTowers(){
	const board = document.querySelector("#board");
	board.innerHTML = "";
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
	div.classList.remove("hidden")
	div.classList.add("alert")
	novo.append("Voce ganhou!")
	div.appendChild(novo)
}

function alertErro(){
	let div = document.getElementById("board")
	let novo = document.createElement("span")
	novo.classList.add("alert")
	novo.append("Voce nao pode mover esse disco!")
	div.appendChild(novo)
	setTimeout(function(){
	novo.classList.add("hidden")
	}, 3000)
}

function checkWinner(){
	lastTower = document.querySelector(".tower3");
	if(lastTower.childElementCount === 4){
		return alert("you win!")
	}
}

//Começa a criar o jogo
function startGame() { 
	creatTower();
	creatDisc();
	towersDiv = document.querySelectorAll(".tower");
	
	for (let index = 0; index < towersDiv.length; index++) {
		towersDiv[index].addEventListener("click", discMove);
	}
}

startGame();

