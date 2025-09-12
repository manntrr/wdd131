// Get the current date
const currentYear = new Date().getFullYear();
// Get the documents last modified date
const lastModDate = document.lastModified;

// Get the currentYear element from html
const currentYearElement = document.getElementById("currentyear");
// Get the lastModified element from html
const lastModElement = document.getElementById("lastModified");

// update the html element with the data
if(currentYearElement) {
    currentYearElement.innerHTML = `&copy; ${currentYear}`;
}
// update the html element with the data
if(lastModElement) {
lastModElement.innerHTML = `Last modification:  ${lastModDate}`;
}

const mainnav = document.querySelector('.header-menu-navigation')
const hambutton = document.querySelector('.header-menu');

function clickMenu(event) {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
}

// Add a click event listender to the hamburger button and use a function that toggles the list element's list of classes.
hambutton.addEventListener('click', clickMenu);

