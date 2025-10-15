// Get the current date
const currentYear = new Date().getFullYear();
// Get the documents last modified date
const lastModDate = document.lastModified;

// Get the currentYear element from html
const currentYearElement = document.querySelector(".currentyear");
// Get the lastModified element from html
const lastModElement = document.querySelector(".lastModified");

// update the html element with the data
if(currentYearElement) {
    currentYearElement.innerHTML = `&copy; ${currentYear}`;
}
// update the html element with the data
if(lastModElement) {
lastModElement.innerHTML = `Last modification:  ${lastModDate}`;
}

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

let productsInOrder = JSON.parse(localStorage.getItem("products"));
if(productsInOrder === null) {
    productsInOrder = products.sort((a,b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if(nameA < nameB) {//a comes before b
        return -1; }
    else if(nameA > nameB) {//a comes after b
        return 1; }
    else {// names are equal
        return 0; }
    });
    productsInOrder.forEach(product => {
        product.accum = product.averagerating;
        product.count = 1;
    });
}

function productOptionTemplate(index, product) {
    return `<option value="${index}">${product.name}</option>`;
}
const productOptions = productsInOrder.map((product, index) => productOptionTemplate(index, product));
function selectAProductOption() {
    return `<option value="" disabled selected>Select a Product &#9662;</option>`;
}
const productNameSelector = document.getElementById('productName');
if(productNameSelector) {
    productNameSelector.innerHTML = `${selectAProductOption()}${productOptions.join("")}`;
}

const productIdSpan = document.querySelector('.productIdResult');
const productNameSpan = document.querySelector('.productNameResult');
const productPreviousRatingSpan = document.querySelector('.productPreviousRatingResult');
const ratingSpan = document.querySelector('.ratingResult');
const installDateSpan = document.querySelector('.installDateResult');
const designSpan = document.querySelector('.designResult');
const durabilitySpan = document.querySelector('.durabilityResult');
const easeSpan = document.querySelector('.easeResult');
const performanceSpan = document.querySelector('.performanceResult');
const reviewSpan = document.querySelector('.reviewResult');
const nameSpan = document.querySelector('.nameResult');
const productFinalRatingSpan = document.querySelector('.productFinalRatingResult');
const productRatingCountSpan = document.querySelector('.productRatingCountResult');
const pageVisitCountSpan = document.querySelector('.visitCountResult');

// Check if the URL contains a query string
const urlParams = new URLSearchParams(window.location.search);

// If a product name was submitted, display it
const productNameResult = urlParams.get('productName');
const ratingResult = urlParams.get('rating');
if (productNameResult) {
    productIdSpan.textContent = `${productsInOrder[productNameResult].id}.`;
    productNameSpan.textContent = `${productsInOrder[productNameResult].name}.`;
    const productPreviousRating = Number(productsInOrder[productNameResult].accum) / Number(productsInOrder[productNameResult].count);
    productPreviousRatingSpan.textContent = `${productPreviousRating}.`;
    productsInOrder[productNameResult].count++;
    productsInOrder[productNameResult].accum += Number(ratingResult);
    const productFinalRating = Number(productsInOrder[productNameResult].accum) / Number(productsInOrder[productNameResult].count);
    productFinalRatingSpan.textContent = `${productFinalRating}.`;    
    productRatingCountSpan.textContent = `${productsInOrder[productNameResult].count}.`;
}
localStorage.setItem("products",JSON.stringify(productsInOrder));

// If a rating was submitted, display it
if (ratingResult) {
    ratingSpan.textContent = `${ratingResult}.`;
}

// If an install date was submitted, display it
const installDateResult = urlParams.get('installDate');
if (installDateResult) {
    installDateSpan.textContent = `${installDateResult}.`;
}

// If design was submitted, display it
const designResult = urlParams.get('design');
if (designResult && designSpan) {
    designSpan.textContent = `true.`;
} else if(designSpan) {
    designSpan.textContent = `false.`;
}

// If durability was submitted, display it
const durabilityResult = urlParams.get('durability');
if (durabilityResult && durabilitySpan) {
    durabilitySpan.textContent = `true.`;
} else if(durabilitySpan) {
    durabilitySpan.textContent = `false.`;
}

// If ease was submitted, display it
const easeResult = urlParams.get('ease');
if (easeResult && easeSpan) {
    easeSpan.textContent = `true.`;
} else if(easeSpan) {
    easeSpan.textContent = `false.`;
}

// If performance was submitted, display it
const performanceResult = urlParams.get('performance');
if (performanceResult && performanceSpan) {
    performanceSpan.textContent = `true.`;
} else if(performanceSpan) {
    performanceSpan.textContent = `false.`;
}

// If a review was submitted, display it
const reviewResult = urlParams.get('review');
if (reviewResult && reviewSpan) {
    reviewSpan.textContent = `${reviewResult}.`;
} else if(reviewSpan){
    reviewSpan.textContent = `not supplied.`;
}

// If a name was submitted, display it
const nameResult = urlParams.get('name');
if (nameResult && nameSpan) {
    nameSpan.textContent = `${nameResult}.`;
} else if(nameSpan) {
    nameSpan.textContent = `not supplied.`;
}


let pageVisitCount = localStorage.getItem("visitCount");
if(pageVisitCount) {
    pageVisitCount++;
} else {
    pageVisitCount=1;
}
if(pageVisitCountSpan) {
    pageVisitCountSpan.textContent = `${pageVisitCount}.`;
}
localStorage.setItem("visitCount",pageVisitCount);

// If a resetLocalStorageData is passed, perform it
const resetLocalStorageData = urlParams.get('resetLocalStorageData');
if (resetLocalStorageData) {
    localStorage.clear();
}
