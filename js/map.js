// Google Map
document.addEventListener("DOMContentLoaded", () => {
	const googleMapsURL =
		"https://maps.google.com/maps?width=600&height=400&hl=en&q=University%20of%20Oxford&t=&z=14&ie=UTF8&iwloc=B&output=embed";

	const iframe = document.getElementById("gmap_iframe");

	iframe.src = googleMapsURL;
});
