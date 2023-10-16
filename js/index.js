// HamburgerToggle
const navbarLinks = document.querySelector(".navbar .nav-items");

const navbarToggle = document.querySelector(".navbar .navbar-toggle");
const toggleBar = navbarToggle.addEventListener("click", () => {
	navbarLinks.classList.toggle("show");
	navbarToggle.classList.toggle("active");
});

// Slider
const swiper = new Swiper(".slider .swiper", {
	pagination: {
		el: ".slider .swiper-pagination",
		clickable: true
	},
	navigation: {
		nextEl: ".slider .swiper-button-next",
		prevEl: ".slider .swiper-button-prev"
	},
	loop: true,
	autoplay: {
		delay: 2500
	}
});

// Product Slider
const initializeSwiper = selector => {
	return new Swiper(selector, {
		spaceBetween: 30,
		loop: true,
		effect: "slide",
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		autoplay: false,
		breakpoints: {
			1280: {
				slidesPerView: 4
			},
			989: {
				slidesPerView: 3
			},
			768: {
				slidesPerView: 2
			},
			500: {
				slidesPerView: 1
			}
		}
	});
};

const swipers = initializeSwiper("#swiper");
const swiper1 = initializeSwiper("#swiper1");

// AOS
AOS.init();
