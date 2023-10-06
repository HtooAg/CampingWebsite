const navbarLinks = document.querySelector(".navbar .nav-items");

const navbarToggle = document.querySelector(".navbar .navbar-toggle");
const toggleBar = navbarToggle.addEventListener("click", () => {
	navbarLinks.classList.toggle("show");
	navbarToggle.classList.toggle("active");
});
