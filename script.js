const closeBtn = document.querySelector(".close-nav");
const openBtn = document.querySelector(".open-nav");
const nav = document.querySelector(".nav")
const navOpen = "open-nav"


function handleOpenNav() {
    nav.classList.remove(navOpen)
}

function handleCloseNav() {
    nav.classList.add(navOpen)
}

function init() {
    closeBtn.addEventListener("click", handleOpenNav);
    openBtn.addEventListener("click", handleCloseNav);
}

init();