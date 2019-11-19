const closeBtn = document.querySelector(".close-nav");
const openBtn = document.querySelector(".open-nav");
const nav = document.querySelector(".nav");
const navOpen = "open-navigation";


function handleOpenNav() {
    nav.classList.add(navOpen)
}

function handleCloseNav() {
    nav.classList.remove(navOpen)
}

function init() {
    closeBtn.addEventListener("click", handleCloseNav);
    openBtn.addEventListener("click", handleOpenNav);
}

init();