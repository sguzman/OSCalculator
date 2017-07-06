const dm = document.getElementById('dragme');

function drag_start(event) {
    const style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text/plain",
        (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
}
function drag_over(event) {
    event.preventDefault();
    return false;
}
function drop(event) {
    const offset = event.dataTransfer.getData("text/plain").split(',');
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    event.preventDefault();
    return false;
}
dm.addEventListener('dragstart',drag_start,false);
document.addEventListener('dragover',drag_over,false);
document.addEventListener('drop',drop,false);
