const hmbgr = document.querySelector('.hmbgr');
const side = document.querySelector('.side');
const utama = document.querySelector('.slider');
const navi = document.querySelector('.navi');

hmbgr.addEventListener('click', () => {
    hmbgr.classList.toggle('active');
    side.classList.toggle('active');
    utama.classList.toggle('active');
    navi.classList.toggle('active');
})

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dot = document.querySelectorAll('.slider .dot li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(() => { next.click() }, 5000);
function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dot li.active');
    last_active_dot.classList.remove('active');
    dot[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => { next.click() }, 5000);
}

dot.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    })
})
window.onresize = function (event) {
    reloadSlider();
};
