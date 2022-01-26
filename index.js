
const marker = document.querySelector('#marker');
const items = document.querySelectorAll('nav a');


function eventFunction(e){
    marker.style.left = e.target.offsetLeft+'px';
    marker.style.width = e.target.offsetWidth+'px';
}
items.forEach(link => {
    link.addEventListener('click',eventFunction);
});