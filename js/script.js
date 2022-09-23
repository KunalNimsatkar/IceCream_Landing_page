const menu = document.getElementById("menu");
const Navlinks = document.querySelector(".navlinks");


menu.onclick = () => {
    menu.classList.toggle("openMenu");
    Navlinks.classList.toggle("hidden")
}