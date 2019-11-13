const nav = document.queryCommandIndeterm("nav")
const navOpen = "open-nav"
function handleNav() {
    nav.classList.add(navOpen)
}

function init() {
    nav.addEventListener("click", handleNav)
}

init();