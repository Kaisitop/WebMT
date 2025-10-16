// Detecta la página actual y marca el enlace correspondiente
const links = document.querySelectorAll(".site-nav__link");
const currentPage = window.location.pathname.split("/").pop(); // obtiene "tradiciones.html"

links.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
