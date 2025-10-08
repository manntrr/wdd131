const temples = [
  {
    individualClassName: "nigeria",
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: new Date("2005-08-07"),//"2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    individualClassName: "manti",
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: new Date("1888-05-21"),//"1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    individualClassName: "payson",
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: new Date("2015-06-07"),//"2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    individualClassName: "guam",
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: new Date("2020-05-02"),//"2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    individualClassName: "wdc",
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: new Date("1974-11-19"),//"1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    individualClassName: "lima",
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: new Date("1986-01-10"),//"1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    individualClassName: "mcm",
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: new Date("1983-12-02"),//"1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    individualClassName: "slc",
    templeName: "Salt Lake City",
    location: "Salt Lake City, Utah, United States",
    dedicated: new Date("1893-04-06"),//"1893, April, 6",
    area: 253015,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-10782.jpg"
  },
  {
    individualClassName: "palmyra",
    templeName: "Palmyra, New York",
    location: "Palmyra, New York, United States",
    dedicated: new Date("2000-04-06"),//"2000, April, 6",
    area: 10900,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/palmyra-new-york-temple/palmyra-new-york-temple-64405.jpg"
  },
  {
    individualClassName: "columbia",
    templeName: "Columbia, South Carolina",
    location: "Columbia, South Carolina, United States",
    dedicated: new Date("1999-10-16"),//"1999, October, 16",
    area: 10700,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/columbia-south-carolina-temple/columbia-south-carolina-temple-46491.jpg"
  }];
const ordinalClassNames = ["first-card", "second-card", "third-card", "forth-card", "fifth-card", "sixth-card", "seventh-card", "eighth-card", "ninth-card", "tenth-card"]
const mediaQueryList = window.matchMedia("(min-width: 41rem)");
  function templeFigureTemplate(temple) {
  return `<figure class="card ${temple.individualClassName}">
            <img class="image" src="${temple.imageUrl}" alt="${temple.templeName}" max-width="400" loading="lazy">
            <figcaption class="card-title">
              <table>
              <thead><th class="caption-title" colspan="2">${temple.templeName}</th></thead>
              <tbody>
                <tr><th class="row-title">Location:</th><td class="row-data">${temple.location}</td></tr>
                <tr><th class="row-title">Dedication:</th><td class="row-data">${temple.dedicated.toLocaleDateString(navigator.language,{dateStyle:'long'})}</td></tr>
                <tr><th class="row-title">Size:</th><td class="row-data">${temple.area.toLocaleString()} sq ft</td></tr>
              </tbody>
              </table>
            </figcaption>
          </figure>`;
}

function renderAllTemples(templeFigureElements, temples) {
    const templeFigures = temples.map(templeFigureTemplate);
    templeFigureElements.innerHTML = templeFigures.join("");
    console.log(`temples: '${templeFigures.length}'`);
    if (mediaQueryList.matches) {
        // The viewport is currently wider than or equal to 41rem
        document.documentElement.style.setProperty('--temple-cards-column-count', `3`);
        document.documentElement.style.setProperty('--temple-cards-row-count', `4`);
        console.log("Large screen detected.");
    } else {
        document.documentElement.style.setProperty('--temple-cards-column-count', `1`);
        document.documentElement.style.setProperty('--temple-cards-row-count', `${templeFigures.length}`);
      // The viewport is currently narrower than 41rem
      console.log("Small screen detected.");
    }
    let counter = 0;
    temples.forEach(temple => {
      console.log(`.${temple.individualClassName} - ${ordinalClassNames[counter]}`);
      const templeCard = document.querySelector(`.${temple.individualClassName}`);
      templeCard.classList.toggle(ordinalClassNames[counter]);
      counter++;
    });
    console.log(templeFigureElements.innerHTML);
}

function renderOldTemples(templeFigureElements, temples) {
    const templeFigures = temples.filter(temple => temple.dedicated < oldDate).map(templeFigureTemplate);
    templeFigureElements.innerHTML = templeFigures.join("");
    console.log(`temples: '${templeFigures.length}'`);
    if (mediaQueryList.matches) {
        // The viewport is currently wider than or equal to 41rem
        let rowCount = Math.ceil(templeFigures.length / 3);
        console.log(`row count: ${rowCount}`);
        document.documentElement.style.setProperty('--temple-cards-column-count', `3`);
        document.documentElement.style.setProperty('--temple-cards-row-count', `${rowCount}`);
        console.log("Large screen detected.");
    } else {
        document.documentElement.style.setProperty('--temple-cards-column-count', `1`);
        document.documentElement.style.setProperty('--temple-cards-row-count', `${templeFigures.length}`);
      // The viewport is currently narrower than 41rem
      console.log("Small screen detected.");
    }
    let counter = 0;
    temples.filter(temple => temple.dedicated < oldDate).forEach(temple => {
      console.log(`.${temple.individualClassName} - ${ordinalClassNames[counter]}`);
      const templeCard = document.querySelector(`.${temple.individualClassName}`);
      templeCard.classList.toggle(ordinalClassNames[counter]);
      counter++;
    });
}

function renderNewTemples(templeFigureElements, temples) {
    const templeFigures = temples.filter(temple => temple.dedicated >= newDate).map(templeFigureTemplate);
    templeFigureElements.innerHTML = templeFigures.join("");
    console.log(`temples: '${templeFigures.length}'`);
    if (mediaQueryList.matches) {
        // The viewport is currently wider than or equal to 41rem
        let rowCount = Math.ceil(templeFigures.length / 3);
        console.log(`row count: ${rowCount}`);
        document.documentElement.style.setProperty('--temple-cards-column-count', `3`);
        document.documentElement.style.setProperty('--temple-cards-row-count', `${rowCount}`);
        console.log("Large screen detected.");
    } else {
        document.documentElement.style.setProperty('--temple-cards-column-count', `1`);
        document.documentElement.style.setProperty('--temple-cards-row-count', `${templeFigures.length}`);
      // The viewport is currently narrower than 41rem
      console.log("Small screen detected.");
    }
    let counter = 0;
    temples.filter(temple => temple.dedicated >= newDate).forEach(temple => {
      console.log(`.${temple.individualClassName} - ${ordinalClassNames[counter]}`);
      const templeCard = document.querySelector(`.${temple.individualClassName}`);
      templeCard.classList.toggle(ordinalClassNames[counter]);
      counter++;
    });
}

function renderLargeTemples(templeFigureElements, temples) {
    const templeFigures = temples.filter(temple => temple.area > largeSize ).map(templeFigureTemplate);
    templeFigureElements.innerHTML = templeFigures.join("");
    console.log(`temples: '${templeFigures.length}'`);
    if (mediaQueryList.matches) {
        // The viewport is currently wider than or equal to 41rem
        let rowCount = Math.ceil(templeFigures.length / 3);
        console.log(`row count: ${rowCount}`);
        document.documentElement.style.setProperty('--temple-cards-column-count', `3`);
        document.documentElement.style.setProperty('--temple-cards-row-count', `${rowCount}`);
        console.log("Large screen detected.");
    } else {
        document.documentElement.style.setProperty('--temple-cards-column-count', `1`);
        document.documentElement.style.setProperty('--temple-cards-row-count', `${templeFigures.length}`);
      // The viewport is currently narrower than 41rem
      console.log("Small screen detected.");
    }
    let counter = 0;
    temples.filter(temple => temple.area > largeSize ).forEach(temple => {
      console.log(`.${temple.individualClassName} - ${ordinalClassNames[counter]}`);
      const templeCard = document.querySelector(`.${temple.individualClassName}`);
      templeCard.classList.toggle(ordinalClassNames[counter]);
      counter++;
    });
}

function renderSmallTemples(templeFigureElements, temples) {
    const templeFigures = temples.filter(temple => temple.area < smallSize).map(templeFigureTemplate);
    templeFigureElements.innerHTML = templeFigures.join("");
    console.log(`temples: '${templeFigures.length}'`);
    if (mediaQueryList.matches) {
        // The viewport is currently wider than or equal to 41rem
        let rowCount = Math.ceil(templeFigures.length / 3);
        console.log(`row count: ${rowCount}`);
        document.documentElement.style.setProperty('--temple-cards-column-count', `3`);
        document.documentElement.style.setProperty('--temple-cards-row-count', `${rowCount}`);
        console.log("Large screen detected.");
    } else {
        document.documentElement.style.setProperty('--temple-cards-column-count', `1`);
        document.documentElement.style.setProperty('--temple-cards-row-count', `${templeFigures.length}`);
      // The viewport is currently narrower than 41rem
      console.log("Small screen detected.");
    }
    let counter = 0;
    temples.filter(temple => temple.area < smallSize).forEach(temple => {
      console.log(`.${temple.individualClassName} - ${ordinalClassNames[counter]}`);
      const templeCard = document.querySelector(`.${temple.individualClassName}`);
      templeCard.classList.toggle(ordinalClassNames[counter]);
      counter++;
    });
}

function clickMenu(event) {
    if (mediaQueryList.matches) {
        // The viewport is currently wider than or equal to 41rem
        console.log("Large screen detected.");
    } else {
    	mainnav.classList.toggle('show');
	    hambutton.classList.toggle('show');
      header.classList.toggle('show');
      body.classList.toggle('show');
      // The viewport is currently narrower than 41rem
      console.log("Small screen detected.");
    }
  console.log('menu clicked!');
}
function clickHome(event) {
  event.preventDefault();
  console.log('home clicked!');
  activeButton.classList.toggle('active');
  homeButton.classList.toggle('active');
  activeButton = document.querySelector('.active')
  mainName.textContent = "Home";
  if(templeFiguresElement) {
    renderAllTemples(templeFiguresElement, temples);
  }
  console.log('home loaded!');

}
function clickOld(event) {
  event.preventDefault();
  console.log('old clicked!');
  activeButton.classList.toggle('active');
  oldButton.classList.toggle('active');
  activeButton = document.querySelector('.active')
  mainName.textContent = "Old";
  if(templeFiguresElement) {
    renderOldTemples(templeFiguresElement, temples);
  }
  console.log('old loaded!');
}
function clickNew(event) {
  event.preventDefault();
  console.log('new clicked!');
  activeButton.classList.toggle('active');
  newButton.classList.toggle('active');
  activeButton = document.querySelector('.active')
  mainName.textContent = "New";
  if(templeFiguresElement) {
    renderNewTemples(templeFiguresElement, temples);
  }
  console.log('new loaded!');
}
function clickLarge(event) {
  event.preventDefault();
  console.log('large clicked!');
  activeButton.classList.toggle('active');
  largeButton.classList.toggle('active');
  activeButton = document.querySelector('.active')
  mainName.textContent = "Large";
  if(templeFiguresElement) {
    renderLargeTemples(templeFiguresElement, temples);
  }
  console.log('large loaded!');
}
function clickSmall(event) {
  event.preventDefault();
  console.log('small clicked!');
  activeButton.classList.toggle('active');
  smallButton.classList.toggle('active');
  activeButton = document.querySelector('.active')
  mainName.textContent = "Small";
  if(templeFiguresElement) {
    renderSmallTemples(templeFiguresElement, temples);
  }
  console.log('small loaded!');
}
function screenSizeChanged(event) {
        if (event.matches) {
          if(mainnav.classList.contains('show')) {
          	mainnav.classList.toggle('show');
	          hambutton.classList.toggle('show');
            header.classList.toggle('show');
            body.classList.toggle('show');
            console.log("hamburger menu closed.");
          }
          console.log("Now a large screen.");
        } else {
            console.log("Now a small screen.");
        }
    };
// Get the current date
const currentYear = new Date().getFullYear();
// Get the currentYear element from html
const currentYearElement = document.querySelector('.currentyear');
const oldDate = new Date("1900-1-1");
const newDate = new Date("2001-1-1");
const largeSize = 90000;
const smallSize = 10000;
const body = document.querySelector('.body');
const header = document.querySelector('.header');
const mainnav = document.querySelector('.header-menu-navigation');
const hambutton = document.querySelector('.header-menu-title-name');
const mainName = document.querySelector('.main-name');
const homeButton = document.querySelector('.home');
const oldButton = document.querySelector('.old');
const newButton = document.querySelector('.new');
const largeButton = document.querySelector('.large');
const smallButton = document.querySelector('.small');
const templeFiguresElement = document.querySelector(".temple-cards");
homeButton.classList.toggle('active');
let activeButton = document.querySelector('.active')

// Get the documents last modified date
const lastModDate = document.lastModified;
// Get the lastModified element from html
const lastModElement = document.querySelector('.lastModified');

// update the html element with the data
if(currentYearElement) {
    currentYearElement.innerHTML = `&copy; ${currentYear}`;
}
// update the html element with the data
if(lastModElement) {
lastModElement.innerHTML = `Last modification:  ${lastModDate}`;
}
// Add a click event listender to the hamburger button and use a function that toggles the list element's list of classes.
hambutton.addEventListener('click', clickMenu);
homeButton.addEventListener('click', clickHome);
oldButton.addEventListener('click', clickOld);
newButton.addEventListener('click', clickNew);
largeButton.addEventListener('click', clickLarge);
smallButton.addEventListener('click', clickSmall);
mediaQueryList.addEventListener("change", screenSizeChanged);
if(templeFiguresElement) {
  renderAllTemples(templeFiguresElement, temples);
}
console.log('page loaded on home!');