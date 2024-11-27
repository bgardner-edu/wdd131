// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('nav')
const hambutton = document.querySelector('#menu');

const home = document.getElementById("home")
const old = document.getElementById("old")
const newer = document.getElementById("new")
const large = document.getElementById("large")
const small = document.getElementById("small")

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	// Add more temple objects here...
	{
		templeName: "Rome Italy",
		location: "Rome, Italy",
		dedicated: "2019, March, 10",
		area: 41010,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
	},
	{
		templeName: "St George",
		location: "St George, Utah",
		dedicated: "1877, April, 6",
		area: 143969,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40435-main.jpg"
	},
	{
		templeName: "Kirtland",
		location: "Kirtland , Ohio",
		dedicated: "1836, December, 27",
		area: 15000,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/kirtland-temple/kirtland-temple-1275-main.jpg"
	},
];

RenderTemples(temples, "Home");

home.addEventListener("click", () => {
	RenderTemples(temples, "Home");
})
old.addEventListener("click", () => {
	let filteredTemples = temples.filter(temple => temple.dedicated.substring(0, 4) <= 1900);
	RenderTemples(filteredTemples, "Old")
})
newer.addEventListener("click", () => {
	let filteredTemples = temples.filter(temple => temple.dedicated.substring(0, 4) >= 2000)
	RenderTemples(filteredTemples, "New")
})
large.addEventListener("click", () => {
	let filteredTemples = temples.filter(temple => temple.area > 90000)
	RenderTemples(filteredTemples, "Large")
})
small.addEventListener("click", () => {
	let filteredTemples = temples.filter(temple => temple.area < 10000 )
	RenderTemples(filteredTemples, "Small")
})

const year = document.getElementById("current_year");
const lastModified = document.getElementById("last_modified");

const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;

lastModified.innerHTML = `<span>Last Modified: ${new Date(document.lastModified)}</span>`;



function Template(temple) {

	return `<div class="temple">
            <h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Size: ${temple.area} sq ft</p>
			<img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="270px">
        </div>`
};

function RenderTemples(templeList, title) {
	const main = document.querySelector("main");
	main.innerHTML = `<h2 id="temples">${title}</h2>`

	const templeElement = document.getElementById("temples");
	const templeContent = templeList.map((temple) => Template(temple));

	templeElement.insertAdjacentHTML("afterend", templeContent.join(""));
};