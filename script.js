const closeBtn = document.querySelector(".close-nav")
const navOpen = "open-nav"

function handleNav() {
    nav.classList.add(openNav)
}

function init() {
    closeBtn.addEventListener("click", handleNav);
}

init();