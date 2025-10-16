const prophets = [
  {
    individualClassName: "jesus",
    accent: true,
    prophetName: "Jesus Christ",
    era: "ancient",
    birth: new Date("0000-12-24"),
    death: new Date("0034-04-12"),
    hemisphere: "middle east",
    location: "Isreal",
    scripture:"All",
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    individualClassName: "adam",
    accent: false,
    prophetName: "Adam",
    era: "ancient",
    hemisphere: "middle east",
    birth: new Date(-5000,0,1),
    death: new Date(-4500,0,1),
    location: "Garden of Eden",
    scripture:"unknown",
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    individualClassName: "noah",
    accent: false,
    prophetName: "noah",
    era: "ancient",
    hemisphere: "middle east",
    birth: "unknown",
    death: "unknown",
    location: "unknown",
    scripture:"unknown",
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    individualClassName: "alma",
    accent: false,
    prophetName: "Alma",
    era: "ancient",
    hemisphere: "americas",
    birth: "unknown",
    death: "unknown",
    location: "Aba, Nigeria",
    scripture:"unknown",
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    individualClassName: "smith",
    accent: false,
    prophetName: "joseph smith",
    era: "modern",
    hemisphere: "americas",
    birth: "unknown",
    death: "unknown",
    location: "Aba, Nigeria",
    scripture:"unknown",
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    individualClassName: "lima",
    accent: false,
    prophetName: "Lima Perú",
    era: "Aba, Nigeria",
    hemisphere: "Aba, Nigeria",
    birth: "Aba, Nigeria",
    death: "Aba, Nigeria",
    location: "Aba, Nigeria",
    scripture:"unknown",
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    individualClassName: "mcm",
    accent: false,
    prophetName: "Mexico City Mexico",
    era: "Aba, Nigeria",
    hemisphere: "Aba, Nigeria",
    birth: "Aba, Nigeria",
    death: "Aba, Nigeria",
    location: "Aba, Nigeria",
    scripture:"unknown",
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  }
]

// Get the current date
const currentYear = new Date().getFullYear();
const oldDate = new Date("1776-7-4");
// Get the currentYear element from html
const currentYearElement = document.querySelector('.currentyear');

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

// Check if the URL contains a query string
const urlParams = new URLSearchParams(window.location.search);

// If a product name was submitted, display it
const page = urlParams.get('page');
const root = document.documentElement;

const ordinalClassNames = ["first-card", "second-card", "third-card", "forth-card", "fifth-card", "sixth-card", "seventh-card", "eighth-card", "ninth-card", "tenth-card"]
const mediaQueryList = window.matchMedia("(min-width: 41rem)");
function prophetFigureTemplate(prophet) {
  return `<figure class="card ${prophet.individualClassName}">
            <img class="image" src="${prophet.imageUrl}" alt="${prophet.prophetName}" max-width="400" loading="lazy">
            <figcaption class="card-title ${(prophet.accent)?"accent":""}">
              <table>
              <thead><th class="caption-title" colspan="2">${prophet.prophetName}</th></thead>
              <tbody>
                <tr><th class="row-title">Era:</th><td class="row-data ${(prophet.accent)?"accent":""}">${prophet.era}</td></tr>
                <tr><th class="row-title">Birth:</th><td class="row-data ${(prophet.accent)?"accent":""}">${prophet.birth/*.toLocaleDateString(navigator.language,{dateStyle:'long'})*/}</td></tr>
                <tr><th class="row-title">Death:</th><td class="row-data ${(prophet.accent)?"accent":""}">${prophet.death/*.toLocaleDateString(navigator.language,{dateStyle:'long'})*/}</td></tr>
                <tr><th class="row-title">Hemisphere:</th><td class="row-data ${(prophet.accent)?"accent":""}">${prophet.hemisphere}</td></tr>
                <tr><th class="row-title">Location:</th><td class="row-data ${(prophet.accent)?"accent":""}">${prophet.location}</td></tr>
                <tr><th class="row-title">Scripture Reference:</th><td class="row-data ${(prophet.accent)?"accent":""}">${prophet.scripture}</td></tr>
              </tbody>
              </table>
            </figcaption>
          </figure>`;
}

function renderAllProphets(prophetFigureElements, prophets) {
    const prophetFigures = prophets.map(prophetFigureTemplate);
    prophetFigureElements.innerHTML = prophetFigures.join("");
    console.log(`prophets: '${prophetFigures.length}'`);
    if (mediaQueryList.matches) {
        // The viewport is currently wider than or equal to 41rem
        document.documentElement.style.setProperty('--prophet-cards-column-count', `3`);
        document.documentElement.style.setProperty('--prophet-cards-row-count', `4`);
        console.log("Large screen detected.");
    } else {
        document.documentElement.style.setProperty('--prophet-cards-column-count', `1`);
        document.documentElement.style.setProperty('--prophet-cards-row-count', `${prophetFigures.length}`);
      // The viewport is currently narrower than 41rem
      console.log("Small screen detected.");
    }
    let counter = 0;
    prophets.forEach(prophet => {
      console.log(`.${prophet.individualClassName} - ${ordinalClassNames[counter]}`);
      const prophetCard = document.querySelector(`.${prophet.individualClassName}`);
      prophetCard.classList.toggle(ordinalClassNames[counter]);
      counter++;
    });
    console.log(prophetFigureElements.innerHTML);
}

function renderAncientProphets(prophetFigureElements, prophets) {
    const prophetFigures = prophets.filter(prophet => ((prophet.era == "ancient") || (prophet.birth < oldDate))).map(prophetFigureTemplate);
    prophetFigureElements.innerHTML = prophetFigures.join("");
    console.log(`prophets: '${prophetFigures.length}'`);
    if (mediaQueryList.matches) {
        // The viewport is currently wider than or equal to 41rem
        let rowCount = Math.ceil(prophetFigures.length / 3);
        console.log(`row count: ${rowCount}`);
        document.documentElement.style.setProperty('--prophet-cards-column-count', `3`);
        document.documentElement.style.setProperty('--prophet-cards-row-count', `${rowCount}`);
        console.log("Large screen detected.");
    } else {
        document.documentElement.style.setProperty('--prophet-cards-column-count', `1`);
        document.documentElement.style.setProperty('--prophet-cards-row-count', `${prophetFigures.length}`);
      // The viewport is currently narrower than 41rem
      console.log("Small screen detected.");
    }
    let counter = 0;
    prophets.filter(prophet => ((prophet.era == "ancient") || (prophet.birth < oldDate))).forEach(prophet => {
      console.log(`.${prophet.individualClassName} - ${ordinalClassNames[counter]}`);
      const prophetCard = document.querySelector(`.${prophet.individualClassName}`);
      prophetCard.classList.toggle(ordinalClassNames[counter]);
      counter++;
    });
}

function renderModernProphets(prophetFigureElements, prophets) {
    const prophetFigures = prophets.filter(prophet => ((prophet.era == "modern") || (prophet.birth >= oldDate))).map(prophetFigureTemplate);
    prophetFigureElements.innerHTML = prophetFigures.join("");
    console.log(`prophets: '${prophetFigures.length}'`);
    if (mediaQueryList.matches) {
        // The viewport is currently wider than or equal to 41rem
        let rowCount = Math.ceil(prophetFigures.length / 3);
        console.log(`row count: ${rowCount}`);
        document.documentElement.style.setProperty('--prophet-cards-column-count', `3`);
        document.documentElement.style.setProperty('--prophet-cards-row-count', `${rowCount}`);
        console.log("Large screen detected.");
    } else {
        document.documentElement.style.setProperty('--prophet-cards-column-count', `1`);
        document.documentElement.style.setProperty('--prophet-cards-row-count', `${prophetFigures.length}`);
      // The viewport is currently narrower than 41rem
      console.log("Small screen detected.");
    }
    let counter = 0;
    prophets.filter(prophet => ((prophet.era == "modern") || (prophet.birth >= oldDate))).forEach(prophet => {
      console.log(`.${prophet.individualClassName} - ${ordinalClassNames[counter]}`);
      const prophetCard = document.querySelector(`.${prophet.individualClassName}`);
      prophetCard.classList.toggle(ordinalClassNames[counter]);
      counter++;
    });
}


function renderMiddleEasternProphets(prophetFigureElements, prophets) {
    const prophetFigures = prophets.filter(prophet => (prophet.hemisphere == "middle east")).map(prophetFigureTemplate);
    prophetFigureElements.innerHTML = prophetFigures.join("");
    console.log(`prophets: '${prophetFigures.length}'`);
    if (mediaQueryList.matches) {
        // The viewport is currently wider than or equal to 41rem
        let rowCount = Math.ceil(prophetFigures.length / 3);
        console.log(`row count: ${rowCount}`);
        document.documentElement.style.setProperty('--prophet-cards-column-count', `3`);
        document.documentElement.style.setProperty('--prophet-cards-row-count', `${rowCount}`);
        console.log("Large screen detected.");
    } else {
        document.documentElement.style.setProperty('--prophet-cards-column-count', `1`);
        document.documentElement.style.setProperty('--prophet-cards-row-count', `${prophetFigures.length}`);
      // The viewport is currently narrower than 41rem
      console.log("Small screen detected.");
    }
    let counter = 0;
    prophets.filter(prophet => (prophet.hemisphere == "middle east")).forEach(prophet => {
      console.log(`.${prophet.individualClassName} - ${ordinalClassNames[counter]}`);
      const prophetCard = document.querySelector(`.${prophet.individualClassName}`);
      prophetCard.classList.toggle(ordinalClassNames[counter]);
      counter++;
    });
}

function renderAmericanProphets(prophetFigureElements, prophets) {
    const prophetFigures = prophets.filter(prophet => (prophet.hemisphere == "americas")).map(prophetFigureTemplate);
    prophetFigureElements.innerHTML = prophetFigures.join("");
    console.log(`prophets: '${prophetFigures.length}'`);
    if (mediaQueryList.matches) {
        // The viewport is currently wider than or equal to 41rem
        let rowCount = Math.ceil(prophetFigures.length / 3);
        console.log(`row count: ${rowCount}`);
        document.documentElement.style.setProperty('--prophet-cards-column-count', `3`);
        document.documentElement.style.setProperty('--prophet-cards-row-count', `${rowCount}`);
        console.log("Large screen detected.");
    } else {
        document.documentElement.style.setProperty('--prophet-cards-column-count', `1`);
        document.documentElement.style.setProperty('--prophet-cards-row-count', `${prophetFigures.length}`);
      // The viewport is currently narrower than 41rem
      console.log("Small screen detected.");
    }
    let counter = 0;
    prophets.filter(prophet => (prophet.hemisphere == "americas")).forEach(prophet => {
      console.log(`.${prophet.individualClassName} - ${ordinalClassNames[counter]}`);
      const prophetCard = document.querySelector(`.${prophet.individualClassName}`);
      prophetCard.classList.toggle(ordinalClassNames[counter]);
      counter++;
    });
}

const headerMenuTitle = document.querySelector('.main-title');
const activeHeaderMenuItemAnchor = document.querySelector('.active');
const main = document.querySelector('.main');
const contentContainer = document.querySelector('.contentContainer');
let headerMenuItemAnchor = document.querySelector('.active');
switch (page) {
    case "home":
        headerMenuTitle.textContent = "Home";
        headerMenuItemAnchor = document.querySelector('.home-menu-item-anchor');
        root.style.setProperty('--contentHeight', '1fr');
        renderAllProphets(contentContainer, prophets);
        break;
    case "ancient":
        headerMenuTitle.textContent = "Ancient";
        headerMenuItemAnchor = document.querySelector('.ancient-menu-item-anchor');
        root.style.setProperty('--contentHeight', '1fr');
        renderAncientProphets(contentContainer, prophets);
        break;
    case "modern":
        headerMenuTitle.textContent = "Modern";
        headerMenuItemAnchor = document.querySelector('.modern-menu-item-anchor');
        root.style.setProperty('--contentHeight', '1fr');
        renderModernProphets(contentContainer, prophets);
        break;
    case "midEast":
        headerMenuTitle.textContent = "Middle East";
        headerMenuItemAnchor = document.querySelector('.midEast-menu-item-anchor');
        root.style.setProperty('--contentHeight', '1fr');
        renderMiddleEasternProphets(contentContainer, prophets)
        break;
    case "americas":
        headerMenuTitle.textContent = "Americas";
        headerMenuItemAnchor = document.querySelector('.americas-menu-item-anchor');
        root.style.setProperty('--contentHeight', '1fr');
        renderAmericanProphets(contentContainer, prophets)
        break;
}
activeHeaderMenuItemAnchor.classList.toggle('active');
headerMenuItemAnchor.classList.toggle('active');
//main.style.gridTemplateRows = "5rem 5rem 5rem 10rem 20rem 15rem var(--contentHeight) 5rem";

