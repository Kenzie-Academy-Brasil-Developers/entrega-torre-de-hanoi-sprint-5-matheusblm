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
