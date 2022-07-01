const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const items = document.querySelector("#items");

const loop = (direction, e) => {
    e.preventDefault();

    if (direction ==  "right") {
        items.appendChild(items.firstElementChild);
    } else {
        items.insertBefore(items.lastElementChild, items.firstElementChild);
    }
}

right.addEventListener("click", e => {
    loop("right", e);
});

left.addEventListener("click", e => {
    loop("left", e);
});