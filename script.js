const towersDiv = document.querySelectorAll(".tower") //alterar para a classe das divs onde vão estar as torres
let firstDiskSelected = null;

function checkMove(originDiv, targetDiv){

}

function diskMove(event){
    if(firstDiskSelect === null){
        if(event.currentTarget.childElementCount === 1){
            return 'erro';
        }
        event.currentTarget.classList.add('selected');
        firstDiskSelected = event.currentTarget;
    } else {
        if(checkMove(firstDiskSelected, event.currentTarget)){

        }
    }
    
}

for(let index = 0; index < towersDiv.length;index++){
    towersDiv[i].addEventListener("click", diskMove);
}
