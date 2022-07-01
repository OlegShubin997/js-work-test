const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const items = document.querySelector("#items");
const computedStyles = window.getComputedStyle(items);
const itemsLi = document.querySelectorAll(".item");

const minRight = 0;
const itemWidth = getComputedStyle(itemsLi[0]).width;
const step = parseInt(itemWidth);
const preShowItems = 300 / step;
const maxRight = (itemsLi.length - preShowItems) * step;
let currentRight = 0;


items.style.right = currentRight;

right.addEventListener("click", e => {
    e.preventDefault();

    if (currentRight < maxRight) {
        currentRight += step;
        items.style.right = `${currentRight}px`
    }
});

left.addEventListener("click", e => {
    e.preventDefault();

    if (currentRight > minRight) {
        currentRight -= step;
        items.style.right = `${currentRight}px`
    }
});