function creatTower(){
	let board = document.getElementById("board")
	let newTower1 = document.createElement("div")
	newTower1.classList.add("tower1")
	let newTower2 = document.createElement("div")
	newTower2.classList.add("tower2")
	let newTower3 = document.createElement("div")
	newTower3.classList.add("tower3")
	board.appendChild(newTower1)
	board.appendChild(newTower2)
	board.appendChild(newTower3)
}
function creatDisc(){
	let tower = document.getElementsByClassName("tower1")[0]
	let disc1 = document.createElement("div")
	disc1.classList.add("disc1")
	let disc2 = document.createElement("div")
	disc2.classList.add("disc2")
	let disc3 = document.createElement("div")
	disc3.classList.add("disc3")
	let disc4 = document.createElement("div")
	disc4.classList.add("disc4")
	tower.appendChild(disc1)
	tower.appendChild(disc2)
	tower.appendChild(disc3)
	tower.appendChild(disc4)
}

function checkMove(originDiv, targetDiv) {
    if(originDiv.lastElementChild.clientWidth > targetDiv.lastElementChild.clientWidth) {
        return false;
    }
    return true;
}

const towersDiv = document.querySelectorAll(".tower"); //alterar para a classe das divs onde vão estar as torres
let firstDiskSelected = null;

function checkMove(originDiv, targetDiv) {}

function diskMove(event) {
  console.log("move");
  if (firstDiskSelected === null) {
    if (event.currentTarget.childElementCount === 1) {
      return "erro"; //criar aviso de erro
    } else {
      event.currentTarget.classList.add("selected");
      firstDiskSelected = event.currentTarget;
    }
  } else {
    if (checkMove(firstDiskSelected, event.currentTarget)) {
      let disk = firstDiskSelected.lastElementChild;
      event.currentTarget.appendChild(disk);
    } else {
      firstDiskSelected.classList.remove("selected");
    }
    firstDiskSelected = null;
  }
}

for (let index = 0; index < towersDiv.length; index++) {
  towersDiv[index].addEventListener("click", diskMove);
}

const buttonReset = document.querySelector("#reset");
const initialMain = document.querySelector("main").innerHTML; //colocar logo após criar as torres e discos
function resetTowers(){
    const actualMain = document.querySelector("main");
    actualMain.innerHTML = initialMain;
}

buttonReset.addEventListener('click', resetTowers);

