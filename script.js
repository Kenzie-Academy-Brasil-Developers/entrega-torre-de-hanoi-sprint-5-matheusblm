


function checkMove(originDiv, targetDiv) {
    if(originDiv.lastElementChild.clientWidth > targetDiv.lastElementChild.clientWidth) {
        return false;
    }
    return true;
}