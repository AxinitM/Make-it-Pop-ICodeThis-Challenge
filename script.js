const navLinks = document.querySelectorAll("nav a");


function clearActiveLinks() {
  navLinks.forEach(el => el.classList.remove("active"));
}


navLinks.forEach(link => {
  link.addEventListener("click", () => {
    clearActiveLinks();
    link.classList.add("active");
  });
});


document.addEventListener("click", (event) => {
  if (!event.target.closest("nav a")) {
    clearActiveLinks();
  }
});
