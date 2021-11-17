const Menubar = document.querySelector(".menubar");
const NavMenu = document.querySelector(".nav-menu");

Menubar.addEventListener("click", () => {
    Menubar.children[0].classList.toggle("fa-bars");
    Menubar.children[0].classList.toggle("fa-times");
    NavMenu.style.display = NavMenu.style.display == 'flex' ? 'none' : 'flex';
});
