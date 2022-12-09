let element = document.getElementById('main');
let elePadding = document.getElementById('padding');
let eleMargin = document.getElementById('margin');
let button = document.getElementById('button'); 
function changes() {
        element.style.padding = elePadding.value + "px";
        element.style.margin = eleMargin.value + "px";
}
button.addEventListener('click', changes());

