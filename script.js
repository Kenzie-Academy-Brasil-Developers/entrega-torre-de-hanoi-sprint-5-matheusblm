const buttonReset = document.querySelector("#reset");
const initialMain = document.querySelector("main").innerHTML; //colocar logo após criar as torres e discos
function resetTowers(){
    const actualMain = document.querySelector("main");
    actualMain.innerHTML = initialMain;
}

buttonReset.addEventListener('click', resetTowers);