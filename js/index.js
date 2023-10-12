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
		clickable: true,
	},
	navigation: {
		nextEl: ".slider .swiper-button-next",
		prevEl: ".slider .swiper-button-prev",
	},
	loop: true,
	autoplay: {
		delay: 2000,
	},
});

// Product Slider
const swipers = new Swiper("#swiper", {
	spaceBetween: 30,
	loop: true,
	effect: "slide",
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	autoplay: false,
	breakpoints: {
		1280: {
			slidesPerView: 4,
		},
		989: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 2,
		},
		500: {
			slidesPerView: 1,
		},
	},
});

// Item Button
const updateCount = (count, countDisplay) => {
	countDisplay.textContent = count;
};

for (let i = 1; i <= 50; i++) {
	const decrementButton = document.querySelector(`#decrement${i}`);
	const incrementButton = document.querySelector(`#increment${i}`);
	const countDisplay = document.querySelector(`#count${i}`);

	if (decrementButton && incrementButton && countDisplay) {
		let count = 0;

		decrementButton.addEventListener("click", () => {
			if (count > 0) {
				count -= 1;
				updateCount(count, countDisplay);
			}
		});

		incrementButton.addEventListener("click", () => {
			count += 1;
			updateCount(count, countDisplay);
		});

		updateCount(count, countDisplay);
	}
}

// AOS
AOS.init();

// Pagination

const itemsPerPage = 4;
const $cards = $(".card");
const $pagination = $(".pagination");
const pageCount = Math.ceil($cards.length / itemsPerPage);
let currentPage =
	localStorage.getItem("currentPage") === null
		? 1
		: parseInt(localStorage.getItem("currentPage"));

const showPageWithDelay = page => {
	currentPage = page;
	localStorage.setItem("currentPage", page);
	const startIndex = (page - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	$cards.hide();

	setTimeout(() => {
		$cards.slice(startIndex, endIndex).show();
		refreshAOSWithDelay();
	}, 500);
};

const refreshAOSWithDelay = () => {
	setTimeout(() => {
		AOS.refresh();
	}, 500);
};

$pagination.on("click", ".page-link", e => {
	e.preventDefault();
	const pageText = $(e.target).text();
	const page = getPageFromText(pageText);
	showPageWithDelay(page);
});

$pagination.on("click", ".prev-page", e => {
	e.preventDefault();
	if (currentPage > 1) {
		showPageWithDelay(currentPage - 1);
	}
});

$pagination.on("click", ".next-page", e => {
	e.preventDefault();
	if (currentPage < pageCount) {
		showPageWithDelay(currentPage + 1);
	}
});

showPageWithDelay(1);

const getPageFromText = pageText => {
	switch (pageText) {
		case "Tents":
			return 1;
		case "Camping Furniture":
			return 2;
		case "Cookwares":
			return 3;
		default:
			return 1;
	}
};
