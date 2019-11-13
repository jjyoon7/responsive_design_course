const closeBtn = document.querySelector(".close-nav");
const nav = document.querySelector(".nav")
const navOpen = "open-nav"

function handleNav() {
    nav.classList.remove(navOpen)
}

function init() {
    closeBtn.addEventListener("click", handleNav);
}

init();